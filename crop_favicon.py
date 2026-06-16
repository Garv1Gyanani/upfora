import ctypes
from ctypes import wintypes
import os
import subprocess

class GdiplusStartupInput(ctypes.Structure):
    _fields_ = [
        ("GdiplusVersion", ctypes.c_uint32),
        ("DebugEventCallback", ctypes.c_void_p),
        ("SuppressBackgroundThread", ctypes.c_int),
        ("SuppressExternalCodecs", ctypes.c_int)
    ]

gdiplus = ctypes.windll.gdiplus
ole32 = ctypes.windll.ole32

def crop_favicon():
    # 1. Initialize GDI+ to read justlogo.png
    token = ctypes.c_ulonglong()
    input_struct = GdiplusStartupInput(1, None, 0, 0)
    gdiplus.GdiplusStartup(ctypes.byref(token), ctypes.byref(input_struct), None)

    src_logo_path = r"c:\Users\Garv\Downloads\upfora\upfora\projectimages\justlogo.png"
    img = ctypes.c_void_p()
    res = gdiplus.GdipLoadImageFromFile(ctypes.c_wchar_p(src_logo_path), ctypes.byref(img))
    
    if res != 0:
        print("Failed to load justlogo.png, error:", res)
        gdiplus.GdiplusShutdown(token)
        return

    w = ctypes.c_uint32()
    h = ctypes.c_uint32()
    gdiplus.GdipGetImageWidth(img, ctypes.byref(w))
    gdiplus.GdipGetImageHeight(img, ctypes.byref(h))
    
    width = w.value
    height = h.value
    print("justlogo.png original size:", width, height)

    # Scan to find bounding box of emblem (Alpha > 10)
    min_x, max_x = width, 0
    min_y, max_y = height, 0
    
    for y in range(height):
        for x in range(width):
            c = ctypes.c_uint32()
            gdiplus.GdipBitmapGetPixel(img, x, y, ctypes.byref(c))
            a = (c.value >> 24) & 0xff
            if a > 10:
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y

    gdiplus.GdipDisposeImage(img)
    gdiplus.GdiplusShutdown(token)

    print("Detected emblem content: X=[{}, {}], Y=[{}, {}]".format(min_x, max_x, min_y, max_y))

    if max_x <= min_x or max_y <= min_y:
        print("No emblem content detected!")
        return

    # Crop tightly with a small 2px padding to prevent edge clipping
    padding = 2
    crop_x = max(0, min_x - padding)
    crop_y = max(0, min_y - padding)
    crop_w = (max_x - min_x) + 2 * padding
    crop_h = (max_y - min_y) + 2 * padding

    print("Cropping emblem: X={}, Y={}, W={}, H={}".format(crop_x, crop_y, crop_w, crop_h))

    # Now delegate to Powershell to crop justlogo.png and save to public/favicon.png
    ps_code = f"""
Add-Type -AssemblyName System.Drawing
$src = [System.Drawing.Image]::FromFile("{src_logo_path.replace('\\', '\\\\')}")
$bmp = New-Object System.Drawing.Bitmap {crop_w}, {crop_h}
$g = [System.Drawing.Graphics]::FromImage($bmp)
$rect_dest = New-Object System.Drawing.Rectangle 0, 0, {crop_w}, {crop_h}
$rect_src = New-Object System.Drawing.Rectangle {crop_x}, {crop_y}, {crop_w}, {crop_h}
$g.DrawImage($src, $rect_dest, $rect_src, [System.Drawing.GraphicsUnit]::Pixel)
$bmp.Save("c:\\\\Users\\\\Garv\\\\Downloads\\\\upfora\\\\upfora\\\\public\\\\favicon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
$src.Dispose()
Write-Output "Tight-cropped favicon saved successfully!"
"""

    res = subprocess.run(["powershell", "-Command", ps_code], capture_output=True, text=True)
    print("Favicon crop STDOUT:", res.stdout)
    print("Favicon crop STDERR:", res.stderr)

def main():
    # 1. Tight crop favicon first
    crop_favicon()
    
    # 2. Tightly crop header image
    # Let's crop header image horizontally exactly from X=380 to X=1340 (which covers the logo and full subtitle)
    # This leaves exactly 7px of padding on the left and right of the content.
    img_path = r"c:\Users\Garv\Downloads\upfora\upfora\projectimages\header image.png"
    crop_x = 377
    crop_y = 391
    crop_w = 968 # (1345 - 377)
    crop_h = 186
    
    print("Cropping header_image: X={}, Y={}, W={}, H={}".format(crop_x, crop_y, crop_w, crop_h))
    
    ps_code = f"""
Add-Type -AssemblyName System.Drawing
$src = [System.Drawing.Image]::FromFile("{img_path.replace('\\', '\\\\')}")
$bmp = New-Object System.Drawing.Bitmap {crop_w}, {crop_h}
$g = [System.Drawing.Graphics]::FromImage($bmp)
$rect_dest = New-Object System.Drawing.Rectangle 0, 0, {crop_w}, {crop_h}
$rect_src = New-Object System.Drawing.Rectangle {crop_x}, {crop_y}, {crop_w}, {crop_h}
$g.DrawImage($src, $rect_dest, $rect_src, [System.Drawing.GraphicsUnit]::Pixel)
$bmp.Save("c:\\\\Users\\\\Garv\\\\Downloads\\\\upfora\\\\upfora\\\\public\\\\header_image.png", [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
$src.Dispose()
Write-Output "Cropped header image saved successfully!"
"""

    res = subprocess.run(["powershell", "-Command", ps_code], capture_output=True, text=True)
    print("Header crop STDOUT:", res.stdout)
    print("Header crop STDERR:", res.stderr)

if __name__ == "__main__":
    main()
