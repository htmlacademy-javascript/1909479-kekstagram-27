
const getNumberInRange = function (min, max) {
  return min < 0 || min >= max ? NaN : Math.floor(Math.random() * (max - min + 1)) + min;
};
getNumberInRange(5,8);


const checkStringLangth = (string, maxLength) => string.length <= maxLength;
checkStringLangth('1sting', 11);



