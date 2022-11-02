import {createPhotos} from './data.js';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const simularPictures = createPhotos();
const simularListFragment = document.createDocumentFragment();

simularPictures.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  simularListFragment.appendChild(pictureElement);
});
picturesList.appendChild(simularListFragment);
