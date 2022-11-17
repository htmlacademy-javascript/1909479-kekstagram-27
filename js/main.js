import {createPhotos} from './data.js';
import {showPictures} from './pictures.js';
import {showForm} from './upload-form.js';
import './validate.js';
import './scale.js';
import './effects.js';

showPictures(createPhotos());

showForm();


