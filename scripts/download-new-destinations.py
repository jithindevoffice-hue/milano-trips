import os
import io
import ssl
import urllib.request
from PIL import Image, ImageEnhance

dest_dir = '/Users/jithindev/Downloads/milano-trips/public/images'

images = {
    'dubai.webp': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85',
    'singapore.webp': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=85',
    'philippines.webp': 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1600&q=85',
    'malaysia.webp': 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1600&q=85',
    'europe.webp': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=85',
    'amsterdam.webp': 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1600&q=85',
    'jordan.webp': 'https://images.unsplash.com/photo-1548786811-dd6e453ccca7?auto=format&fit=crop&w=1600&q=85',
    'oman.webp': 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1600&q=85',
    'japan.webp': 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85',
    'machu-picchu.webp': 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1600&q=85',
    'rajasthan.webp': 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=85',
    'goa.webp': 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=85',
    'mumbai.webp': 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=85',
    'kerala.webp': 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85',
    'darjeeling.webp': 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85',
    'manali.webp': 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=85',
}

ctx = ssl._create_unverified_context()

for filename, url in images.items():
    out_path = os.path.join(dest_dir, filename)
    print(f"Fetching {filename}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
        data = resp.read()
    
    with Image.open(io.BytesIO(data)) as img:
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Resize to standard max 1600px width
        w, h = img.size
        if max(w, h) > 1600:
            scale = 1600 / max(w, h)
            img = img.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
        
        # Enhance vibrance and contrast slightly
        color = ImageEnhance.Color(img)
        img = color.enhance(1.08)
        contrast = ImageEnhance.Contrast(img)
        img = contrast.enhance(1.04)
        sharp = ImageEnhance.Sharpness(img)
        img = sharp.enhance(1.08)
        
        img.save(out_path, 'WEBP', quality=88, method=6)
        print(f"Saved: {out_path} ({os.path.getsize(out_path)} bytes, size={img.size})")

print("All new destination images downloaded and converted successfully!")
