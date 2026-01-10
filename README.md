# NexSpring Software Website

## Team Member Photo Requirements

### Aspect Ratio
- **Square (1:1)** - Required
- Photos must be square format to display correctly

### Recommended Pixel Dimensions
- **Minimum**: 400×400px
- **Recommended**: 600×600px to 800×800px
- **Maximum**: 1200×1200px (larger files may load slower)

### File Format
- **Format**: JPG or PNG
- **File Size**: Under 200KB per image (for faster loading)
- **Quality**: High quality, but compressed for web

### How It Works
- The photo container uses `aspect-ratio: 1` (square)
- Images use `object-fit: cover` which means:
  - Square photos fit perfectly
  - Non-square photos will be cropped to square (centered)
  - Images automatically scale to fill the container

### Summary
✅ **Use square photos (1:1 aspect ratio)**  
✅ **Recommended size: 600×600px to 800×800px**  
✅ **Format: JPG or PNG**  
✅ **File size: Under 200KB**

The CSS handles all scaling and cropping automatically, so square photos work best.
