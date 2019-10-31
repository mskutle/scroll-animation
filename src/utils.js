function drawImage(canvas, image) {
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
}

export function calculateWhichImageToDrawAndDrawIt(canvas, images) {
  const scrollTop = Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );

  const scrollCoefficient = 3;

  const scrollPercentage =
    (scrollTop * scrollCoefficient) / window.innerHeight / 1.5;

  const numberOfFrames = images.length;
  const index = Math.round(numberOfFrames * scrollPercentage) || 0;

  if (images[index]) {
    drawImage(canvas, images[index]);
  }
}

export function initialize(canvas, images) {
  const initialImage = images[0];
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = true;

  initialImage.onload = () => {
    drawImage(canvas, initialImage);
  };
}

function createImage(src) {
  const image = new Image();
  image.src = src;
  return image;
}

export function getImageObjects() {
  return [...Array(101).keys()].map((_, index) =>
    createImage(`/img/${index}.jpg`)
  );
}
