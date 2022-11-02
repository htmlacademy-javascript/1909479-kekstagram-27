import { getRandomInteger, createRandomIdFromRangeGenerator, createArrayElement, createIdGenerator} from './util.js';

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

const PHOTOS_COUNT = 25;
const COMMENTS_COUNT = 5;
const generateCommentId = createIdGenerator();
const generatePhotoId = createRandomIdFromRangeGenerator (1, 25);
const generateUrlId = createRandomIdFromRangeGenerator (1, 25);

const createComment = () => ({
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
  comments: Array.from({length: getRandomInteger(1, COMMENTS_COUNT) }, (_ , id) => createComment(id + 1))
});

const createPhotos = () => {
  const simularPhotos = [];
  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    simularPhotos.push(createPhoto());
  }
  return simularPhotos;
};

export {createPhotos};

