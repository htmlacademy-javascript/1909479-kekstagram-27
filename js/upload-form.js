import {pristine, hashtagField, uploadTextArea, uploadForm} from './validate.js';
import { getDefaultValue } from './scale.js';
import { resetEffects } from './effects.js';
import { isEscapeKey } from './util.js';

const uploadFile = document.querySelector('#upload-file');
const body = document.querySelector('body');
const uploadBox = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');

const isTextFieldFocused = () => document.activeElement === hashtagField || document.activeElement === uploadTextArea;

const hiddenForm = () => {
  uploadBox.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
};

function onEscKeydown (evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    hiddenForm();
  }
}

const onCloseButtonClick = () => hiddenForm();

const addListeners = () => {
  cancelButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onEscKeydown);
};

const showForm = () => {
  uploadFile.addEventListener('change', () => {
    uploadForm.reset();
    pristine.reset();
    uploadBox.classList.remove('hidden');
    body.classList.add('modal-open');
    addListeners();
    getDefaultValue();
    resetEffects();
  });
};

export{showForm};
