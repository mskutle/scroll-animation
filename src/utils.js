export function drawImage(ctx, percentage) {
  const images = getImages();
  const numberOfFrames = images.length;
  const index = Math.round(numberOfFrames * percentage) || 0;

  if (images[index]) {
    const image = images[index];
    console.log("Drawing image...");
    ctx.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
  }
}

export function initialize(canvas) {
  const initialImage = getImages()[0];
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = true;

  initialImage.onload = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.drawImage(initialImage, 0, 0, window.innerWidth, window.innerHeight);
  };
}

function createImage(src) {
  const image = new Image();
  image.src = src;

  return image;
}

function getImages() {
  return [...Array(101).keys()].map((_, index) =>
    createImage(`/img/${index}.jpg`)
  );
}

export function scrubThroughFrames(canvas, percentage) {
  const ctx = canvas.getContext("2d");
  drawImage(ctx, percentage);
}
