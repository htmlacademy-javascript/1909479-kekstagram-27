import {checkStringLength} from './util.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadText = document.querySelector('.img-upload__text');
const uploadTextArea = uploadText.querySelector('.text__description');
const hashtagField = uploadText.querySelector('.text__hashtags');

const HASHTAG_CORRECT = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_COUNT = 5;
const MAX_COMMENT_LENGTH = 140;

const pristine = new Pristine(
  uploadForm, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper__error',
  });

function isValidTag (tag) {
  return HASHTAG_CORRECT.test(tag);
}

function isValidCountTags (tags) {
  return tags.length <= MAX_HASHTAG_COUNT;
}

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return isValidCountTags(tags) && hasUniqueTags && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  validateTags,
  'Неправильно заполнены хэштеги'
);

const validateArea = (value) => checkStringLength(value, MAX_COMMENT_LENGTH);

pristine.addValidator(
  uploadTextArea,
  validateArea,
  'Превышено количество символов'
);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isFormValid = pristine.validate();
  if (isFormValid) {
    uploadForm.submit();
  }
});

export { pristine };
export { hashtagField };
export { uploadTextArea };
export { uploadForm };
