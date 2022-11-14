import {createPhotos} from './data.js';
import {showPictures} from './pictures.js';
import {showForm} from './upload-form.js';
import './validate.js';
showPictures(createPhotos());

showForm();
