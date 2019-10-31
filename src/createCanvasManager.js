export const createCanvasManager = canvas => {
  const ctx = canvas.getContext("2d");

  const getImageObjects = () => {
    return [...Array(101).keys()].map((_, index) =>
      createImage(`/img/${index}.jpg`)
    );
  };

  const images = getImageObjects();

  const initializeCanvas = () => {
    const initialImage = images[0];
    ctx.imageSmoothingEnabled = true;

    initialImage.onload = () => {
      drawImage(initialImage);
    };
  };

  const createImage = src => {
    const image = new Image();
    image.src = src;
    return image;
  };

  const drawImage = image =>
    ctx.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);

  const calculateWhichImageToDrawAndDrawIt = () => {
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
      drawImage(images[index]);
    }
  };

  return {
    calculateWhichImageToDrawAndDrawIt,
    initializeCanvas
  };
};
