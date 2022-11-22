import {showBigPicture} from './big-picture.js';

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const imageFilters = document.querySelector('.img-filters');

const clearPictures = () => {
  const pictures = document.querySelectorAll('.picture');
  if (pictures.length > 0) {
    pictures.forEach((picture) => picture.remove());
  }
};

const createPicture = ({url, description, comments, likes}) => {
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;

  picture.addEventListener('click', () => {
    showBigPicture({url, description, comments, likes});
  });

  return picture;
};

const container = document.querySelector('.pictures');

const showPictures = (pictures) => {
  clearPictures();
  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    container.append(pictureElement);
    imageFilters.classList.remove('img-filters--inactive');
  });
};

export {showPictures};
