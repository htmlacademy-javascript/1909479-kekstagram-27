
import {showPictures} from './pictures.js';
import { getData } from './api.js';
import { showErrorAlert, debounce } from './util.js';
import { setFilterClick } from './filters.js';
import './upload-form.js';
import './scale.js';
import './effects.js';

const RERENDER_DELAY = 500;

getData((data) => {
  showPictures(data);
  setFilterClick(data, debounce(showPictures, RERENDER_DELAY));
},

() => {
  showErrorAlert('Не удалось загрузить изображения.');
}
);
