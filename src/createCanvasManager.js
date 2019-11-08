export const create = (
  canvas,
  options = {
    images: [],
    width: window.innerWidth,
    height: window.innerHeight,
    scrollCoefficient: 3,
    scrollTop: Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
  }
) => {
  const ctx = canvas.getContext("2d");

  const drawImage = image => {
    ctx.drawImage(image, 0, 0, options.width, options.height);
  };

  const init = () => {
    canvas.width = options.width;
    canvas.height = options.height;
    const initialImage = options.images[0];
    initialImage.onload = () => drawImage(initialImage);
  };

  const calculateWhichImageToDrawAndDrawIt = () => {
    const scrollPercentage =
      (options.scrollTop * options.scrollCoefficient) / options.height / 1.5;

    const numberOfFrames = options.images.length;
    const index = Math.round(numberOfFrames * scrollPercentage) || 0;

    if (options.images[index]) {
      drawImage(options.images[index]);
    }
  };

  return {
    init,
    calculateWhichImageToDrawAndDrawIt
  };
};
