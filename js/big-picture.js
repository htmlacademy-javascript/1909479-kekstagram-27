import { isEscapeKey } from './util.js';

const MAX_COUNT_COMMENT = 5;
const bigPicture = document.querySelector('.big-picture');
const commentCount = document.querySelector('.social__comment-count');
const commentList = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const closeButton = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
let count = 0;

const createComment = (commentator) => {
  const comment = document.createElement('li');
  comment.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
  comment.classList.add('social__comment');
  comment.querySelector('.social__picture').src = commentator.avatar;
  comment.querySelector('.social__picture').alt = commentator.name;
  comment.querySelector('.social__text').textContent = commentator.message;

  return comment;
};

const showBigPicture = (info) => {

  const showComments = () => {
    commentList.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const commentsVisible = info.comments.slice(0, count + MAX_COUNT_COMMENT);
    commentsVisible.forEach((comment) => {
      const commentElement = createComment(comment);
      fragment.append(commentElement);
    });
    commentList.append(fragment);
    commentsLoader.classList.toggle('hidden', info.comments.length === commentsVisible.length);
    commentCount.innerHTML = `${commentsVisible.length} из <span class="comments-count">${info.comments.length}</span> комментариев`;
  };

  const commentsLoaderOnClick = () => {
    count += MAX_COUNT_COMMENT;
    showComments();
  };

  bigPicture.querySelector('.big-picture__img img').src = info.url;
  bigPicture.querySelector('.big-picture__img img').alt = info.description;
  bigPicture.querySelector('.likes-count').textContent = info.likes;
  bigPicture.querySelector('.social__caption').textContent = info.description;

  const hiddenBigPicture = () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    commentsLoader.removeEventListener('click', commentsLoaderOnClick);
    document.removeEventListener('keydown', onEscKeydown);
    count = 0;
  };
  const onCloseButtonClick = () => hiddenBigPicture();
  function onEscKeydown (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      hiddenBigPicture();
    }
  }
  const addListeners = () => {
    closeButton.addEventListener('click', onCloseButtonClick);
    document.addEventListener('keydown', onEscKeydown);
    // count = 0;
  };

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  showComments(info.comments);
  addListeners();
  commentsLoader.addEventListener('click', commentsLoaderOnClick);
};

export {showBigPicture};
