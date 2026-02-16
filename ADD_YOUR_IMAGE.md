# 📸 Adding Your Profile Image

## Steps to Add Your Animated Profile Image:

### 1. Prepare Your Image
- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 400x400 pixels or higher (square format works best)
- **File Size**: Under 500KB for optimal loading

### 2. Add Your Image
Replace the placeholder file in the `public` folder:
```
public/profile.jpg  ← Replace this with your actual image
```

### 3. Supported File Names
You can use any of these file names:
- `profile.jpg` (default)
- `profile.png` 
- `profile.webp`

### 4. Update the Code (Optional)
If you use a different filename, update `components/animated-profile.tsx`:
```typescript
<Image
  src="/your-filename.jpg"  // Change this line
  alt="Aleena"
  fill
  className="object-cover"
  priority
/>
```

## 🎨 Animation Features

Your profile image will include these animations:
- **Floating Effect**: Gentle up/down movement
- **Glow Effect**: Animated glow that adapts to theme
- **Border Animation**: Color-shifting gradient border
- **Hover Effects**: Scale and rotation on hover
- **Pulse Effect**: Subtle pulsing ring
- **Decorative Elements**: Animated dots around the image

## 🎯 Tips for Best Results

1. **Use a high-quality photo** with good lighting
2. **Center your face** in the image for best visibility
3. **Use a plain background** for professional look
4. **Square format** works best with the circular frame
5. **Test different expressions** - smiling vs professional

## 🔄 Fallback

If your image fails to load, it will automatically show a gradient background with your initial "A".

## 📱 Responsive

The image automatically adjusts for:
- Mobile: 192x192px
- Desktop: 256x256px
- High-DPI displays

---

**Your animated profile will appear in the hero section with smooth animations!** 🚀
