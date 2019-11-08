function drawImage({
  canvas,
  image,
  height = image.height,
  width = image.width
}) {
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, width, height);
}

export function calculateWhichImageToDrawAndDrawIt({
  canvas,
  height = window.innerHeight,
  width = window.innerWidth,
  images,
  scrollCoefficient = 3
}) {
  const scrollTop = Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );

  const scrollPercentage = (scrollTop * scrollCoefficient) / height / 1.5;

  const numberOfFrames = images.length;
  const index = Math.round(numberOfFrames * scrollPercentage) || 0;

  if (images[index]) {
    drawImage({ canvas, image: images[index], width, height });
  }
}

export function initialize({
  canvas,
  images,
  height = window.innerHeight,
  width = window.innerWidth
}) {
  const initialImage = images[0];
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = true;

  initialImage.onload = () => {
    drawImage({ canvas, image: initialImage, width, height });
  };
}

function createImage(src) {
  const image = new Image();
  image.src = src;
  return image;
}

export function getImageObjects() {
  return [...Array(201).keys()].map((_, index) =>
    createImage(`/xmas-tree/v2/${index}.jpg`)
  );
}
