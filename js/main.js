const DESCRIPTIONS_PHOTO = [
  'Не ждите идеального момента. Берите каждый момент и делайте его идеальным.',
  'Жизнь — это всего лишь серия крошечных чудес, поэтому обратите внимание на них.',
  'Это просто моя жизнь в моем неповторимом стиле.',
  'Лучшее еще впереди', 'В простоте есть удивительная красота.' ,
  'Всегда будьте лучшим вариантом для себя.', 'Оставьте немного искорок, куда бы вы ни пошли.'
];

const MESSAGES = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Лука',
  'Глаша',
  'Марина',
  'Роман',
  'Павел',
  'Игорь',
  'Ольга',
  'Анна',
  'Степан',
  'Елена',
  'Матвей',
  'Саша'
];

const numberOfPhotos = 25;

const getRandomInteger = function (min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLangth = (string, maxLength) => string.length <= maxLength;
checkStringLangth('1sting', 11);

const createArrayElement = (elements) => (
  elements[getRandomInteger(0, elements.length - 1)]
);

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
const generatePhotoId = createRandomIdFromRangeGenerator (1, 25);
const generateUrlId = createRandomIdFromRangeGenerator (1, 25);

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}
const generateCommentId = createIdGenerator();

const getComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createArrayElement(MESSAGES),
  name: createArrayElement(NAMES)
});

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generateUrlId()}.jpg`,
  description: createArrayElement(DESCRIPTIONS_PHOTO),
  likes: getRandomInteger(15, 200),
  comments: getComment()
});

const createPhotos = () => {
  const simularPhotos = [];
  for (let i = 1; i <= numberOfPhotos; i++) {
    simularPhotos.push(createPhoto());
  }
  return simularPhotos;
};

createPhotos();
