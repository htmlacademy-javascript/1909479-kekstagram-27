const ALERT_SHOW_TIME = 5000;
const getRandomInteger = function (min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (string, maxLength) => string.length <= maxLength;


const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const createArrayElement = (elements) => (
  elements[getRandomInteger(0, elements.length - 1)]
);

const isEscapeKey = (evt) => evt.key === 'Escape';

const showErrorAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.position = 'absolute';
  alertContainer.style.width = '100%';
  alertContainer.style.top = '0';
  alertContainer.style.padding = '10px 5px';
  alertContainer.style.fontSize = '22px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'Crimson';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {
  getRandomInteger,
  createRandomIdFromRangeGenerator,
  createIdGenerator,
  createArrayElement,
  checkStringLength,
  isEscapeKey,
  showErrorAlert
};
