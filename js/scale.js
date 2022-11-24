const MIN_SIZE = 25;
const MAX_SIZE = 100;
const SIZE_STEP = 25;

const btnScaleSmaller = document.querySelector('.scale__control--smaller');
const btnScaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const pictureSize = document.querySelector('.img-upload__preview img');

let scale;

const changePictureSize = () => {
  pictureSize.style.transform = `scale(${scale / 100})`;
  scaleValue.value = `${scale}%`;
};

const getDefaultValue = () => {
  scale = MAX_SIZE;
  changePictureSize();
};

btnScaleSmaller.addEventListener('click', () => {
  if (scale > MIN_SIZE) {
    scale -= SIZE_STEP;
  }
  changePictureSize();
});

btnScaleBigger.addEventListener('click', () => {
  if (scale < MAX_SIZE) {
    scale += SIZE_STEP;
  }
  changePictureSize();
});

export {getDefaultValue};
