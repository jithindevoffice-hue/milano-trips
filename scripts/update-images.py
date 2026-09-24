import os
import io
import ssl
import urllib.request
from PIL import Image, ImageEnhance

dest_dir = '/Users/jithindev/Downloads/milano-trips/public/images'
brain_dir = '/Users/jithindev/.gemini/antigravity-ide/brain/cb84bd1e-0ce7-4115-998a-c7de75ec261b'

ai_images = {
    'coast-hero.webp': os.path.join(brain_dir, 'coast_hero_1790263053419.jpg'),
    'santorini-banner.webp': os.path.join(brain_dir, 'santorini_banner_1790263075297.jpg'),
    'bali.webp': os.path.join(brain_dir, 'bali_temple_1790263100790.jpg'),
    'london.webp': os.path.join(brain_dir, 'london_landmarks_1790263408443.jpg'),
    'elephants.webp': os.path.join(brain_dir, 'elephants_safari_1790263436905.jpg'),
    'safari.webp': os.path.join(brain_dir, 'african_safari_1790263475228.jpg'),
    'kuala-lumpur.webp': os.path.join(brain_dir, 'kuala_lumpur_1790263505220.jpg'),
    'transfer-car.webp': os.path.join(brain_dir, 'transfer_car_1790263538019.jpg'),
    'about-traveler.webp': os.path.join(brain_dir, 'about_traveler_1790263602312.jpg'),
    'gallery-09.webp': os.path.join(brain_dir, 'swiss_alps_1790263636616.jpg'),
    'gallery-11.webp': os.path.join(brain_dir, 'maldives_resort_1790263675289.jpg'),
    'gallery-02.webp': os.path.join(brain_dir, 'beach_wedding_1790263724988.jpg'),
    'gallery-06.webp': os.path.join(brain_dir, 'tropical_island_1790263780654.jpg'),
}

online_gallery = {
    'gallery-01.webp': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    'gallery-03.webp': 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=85',
    'gallery-04.webp': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    'gallery-05.webp': 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1600&q=85',
    'gallery-07.webp': 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85',
    'gallery-08.webp': 'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1600&q=85',
    'gallery-10.webp': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=85',
    'gallery-12.webp': 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1600&q=85',
}

def enhance_and_save(img, out_path, max_dim=1920):
    if img.mode != 'RGB':
        img = img.convert('RGB')
    
    # Resize if huge while maintaining crispness
    w, h = img.size
    if max(w, h) > max_dim:
        scale = max_dim / max(w, h)
        img = img.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
    
    # Enhance vibrance, color saturation and sharpness subtly
    color_enhancer = ImageEnhance.Color(img)
    img = color_enhancer.enhance(1.08)
    
    contrast_enhancer = ImageEnhance.Contrast(img)
    img = contrast_enhancer.enhance(1.04)
    
    sharpness_enhancer = ImageEnhance.Sharpness(img)
    img = sharpness_enhancer.enhance(1.1)
    
    img.save(out_path, 'WEBP', quality=88, method=6)
    print(f"Saved: {out_path} ({os.path.getsize(out_path)} bytes, size={img.size})")

print("Processing custom AI images...")
for filename, src_path in ai_images.items():
    out_path = os.path.join(dest_dir, filename)
    with Image.open(src_path) as img:
        enhance_and_save(img, out_path)

print("\nDownloading and processing remaining curated gallery images...")
ctx = ssl._create_unverified_context()
for filename, url in online_gallery.items():
    out_path = os.path.join(dest_dir, filename)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
        data = resp.read()
    with Image.open(io.BytesIO(data)) as img:
        enhance_and_save(img, out_path)

print("\nAll 21 images updated successfully!")
