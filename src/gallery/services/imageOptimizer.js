// Client-side Browser Image Optimizer
// Generates fast WebP thumbnails and web previews with zero server CPU load

export async function processImageFile(file, maxWidth = 1920, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        // Calculate dimensions maintaining aspect ratio
        let { width, height } = img;
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        // Export as WebP (or fallback to JPEG)
        const optimizedDataUrl = canvas.toDataURL('image/webp', quality);

        // Generate tiny 400px thumbnail for fast masonry loading
        const thumbCanvas = document.createElement('canvas');
        const thumbWidth = 400;
        const thumbHeight = Math.round((img.height * thumbWidth) / img.width);
        thumbCanvas.width = thumbWidth;
        thumbCanvas.height = thumbHeight;
        const thumbCtx = thumbCanvas.getContext('2d');
        thumbCtx.imageSmoothingEnabled = true;
        thumbCtx.imageSmoothingQuality = 'medium';
        thumbCtx.drawImage(img, 0, 0, thumbWidth, thumbHeight);
        const thumbDataUrl = thumbCanvas.toDataURL('image/webp', 0.65);

        resolve({
          originalName: file.name,
          url: optimizedDataUrl,
          thumbUrl: thumbDataUrl,
          width,
          height,
          sizeKb: Math.round(optimizedDataUrl.length / 1024),
        });
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}
