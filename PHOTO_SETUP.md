# How to Add Your Photo

## Step 1: Prepare Your Photo

1. **Recommended size**: Square photo (e.g., 800x800px or 1000x1000px)
2. **Format**: JPG, PNG, or WebP
3. **File name**: Name it `profile-photo.jpg` (or any name you prefer)

## Step 2: Add Photo to Project

### Option A: Using the `public` folder (Easiest)

1. Place your photo file in the `public` folder:
   ```
   vishwa-portfolio/
   └── public/
       └── profile-photo.jpg  (your photo here)
   ```

2. The code is already set up to use `/profile-photo.jpg` - no code changes needed!

### Option B: Using a different filename

If you want to use a different filename:

1. Place your photo in the `public` folder with your chosen name
2. Open `app/page.tsx`
3. Find line ~117 where it says:
   ```jsx
   <img 
     src="/profile-photo.jpg" 
   ```
4. Change `"/profile-photo.jpg"` to your filename, e.g., `"/my-photo.png"`

## Step 3: Verify

1. Run `npm run dev`
2. Navigate to the home section
3. Your photo should appear in the circular frame on the right side

## Current Location in Code

The photo is displayed in the **Home Section** (around line 114-125 in `app/page.tsx`).

The photo will:
- Be displayed in a circular frame
- Have a blue gradient glow effect around it
- Automatically resize to fit the frame
- Show a placeholder (VH initials) if the image file is not found

## Tips

- **Best results**: Use a square photo with your face centered
- **File size**: Keep it under 500KB for faster loading
- **Background**: Photos with solid or blurred backgrounds work best
- **Format**: JPG is recommended for photos, PNG for graphics
