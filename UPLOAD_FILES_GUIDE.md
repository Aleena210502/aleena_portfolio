# 📁 How to Upload Your Image and CV

## 🖼️ Adding Your Profile Image

### Step 1: Prepare Your Image
- **Format**: JPG, PNG, or WebP
- **Size**: 400x400 pixels (square format works best)
- **File Size**: Under 500KB for fast loading
- **Quality**: High resolution, good lighting, centered face

### Step 2: Upload to Public Folder
1. Go to the `public` folder in your project
2. Replace `profile.jpg` with your actual image
3. Make sure the filename is exactly `profile.jpg`

```
public/
├── profile.jpg  ← Your profile photo here
└── cv.pdf       ← Your CV here (see below)
```

### Alternative Image Names
You can also use:
- `profile.png`
- `profile.webp`

If you use a different name, update `components/animated-profile.tsx`:
```typescript
<Image src="/your-filename.jpg" alt="Aleena" />
```

## 📄 Adding Your CV

### Step 1: Prepare Your CV
- **Format**: PDF (recommended)
- **Size**: Under 2MB
- **Name**: Professional filename like `aleena-cv.pdf`

### Step 2: Upload to Public Folder
1. Place your CV file in the `public` folder
2. Recommended filename: `cv.pdf`

### Step 3: Update CV Download Link
The CV download button is already configured! Just make sure your file is named `cv.pdf` in the `public` folder.

## 🎯 Quick Upload Steps

### Method 1: Drag & Drop
1. Open your project folder
2. Navigate to the `public` folder
3. Drag your image and CV files into this folder
4. Confirm the filenames match:
   - Profile image: `profile.jpg`
   - CV: `cv.pdf`

### Method 2: Copy & Paste
1. Copy your files
2. Paste them into the `public` folder
3. Rename if necessary to match the expected filenames

### Method 3: Using File Explorer
```
1. Open File Explorer
2. Navigate to: Your Project → public
3. Copy your files here:
   - profile.jpg (your photo)
   - cv.pdf (your resume)
```

## 🔧 File Locations

### Where to Place Files:
```
aleena-portfolio/
├── public/
│   ├── profile.jpg    ← YOUR PROFILE IMAGE
│   ├── cv.pdf         ← YOUR CV/RESUME
│   └── next.svg       ← (existing file)
├── components/
│   ├── hero-section.tsx
│   └── animated-profile.tsx
└── app/
    └── page.tsx
```

## ✅ Verification Checklist

After uploading, verify:

### Profile Image:
- [ ] File is in `public/profile.jpg`
- [ ] Image is square format
- [ ] File size under 500KB
- [ ] Image loads when you run `npm run dev`

### CV:
- [ ] File is in `public/cv.pdf`
- [ ] File size under 2MB
- [ ] Download button works in browser
- [ ] CV opens correctly when downloaded

## 🚀 Test Your Uploads

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Check your profile image**:
   - Go to http://localhost:3000
   - Your image should appear in the hero section
   - If not, check the browser console for errors

3. **Test CV download**:
   - Click the "Download CV" button
   - CV should download automatically
   - Verify the PDF opens correctly

## 🔍 Troubleshooting

### Image Not Showing:
1. **Check filename**: Must be exactly `profile.jpg`
2. **Check location**: Must be in the `public` folder
3. **Check format**: Try JPG if PNG doesn't work
4. **Check size**: Large files may need optimization

### CV Not Downloading:
1. **Check filename**: Must be exactly `cv.pdf`
2. **Check location**: Must be in the `public` folder
3. **Check file**: Ensure PDF isn't corrupted
4. **Test manually**: Try opening `http://localhost:3000/cv.pdf`

### File Too Large:
1. **Compress image**: Use TinyPNG or similar tools
2. **Optimize PDF**: Use PDF compression tools
3. **Reduce quality**: For web use, lower quality is fine

## 📱 Mobile Considerations

- **Image**: Will automatically resize for mobile
- **CV**: Downloads work on all devices
- **Performance**: Optimized files load faster on mobile

## 🎨 Design Tips

### Profile Image:
- Use professional headshot
- Plain background works best
- Center your face in the frame
- Smile for friendly appearance

### CV:
- Use clean, modern design
- Include contact information
- Save as PDF for consistency
- Test download on different devices

---

## 🎉 Ready to Go!

Once you've uploaded both files:
1. Run `npm run dev`
2. Check your portfolio at http://localhost:3000
3. Your animated profile image should appear
4. CV download button should work perfectly

Your portfolio will be fully functional with your personal branding! 🚀
