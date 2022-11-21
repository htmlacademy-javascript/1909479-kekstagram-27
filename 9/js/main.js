
import {showPictures} from './pictures.js';
import { getData } from './api.js';
import { showErrorAlert } from './util.js';
import './upload-form.js';
import './scale.js';
import './effects.js';

getData((data) => {
  showPictures(data);
},

() => {
  showErrorAlert('Не удалось загрузить изображения.');
}
);
