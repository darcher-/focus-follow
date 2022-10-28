export const random = () => Math.round(Math.round() * 999);

export const romanYear = (num = new Date().getFullYear()) =>
  Object.entries({
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }).reduce((acc, [key, value]) => {
    const multiplier = Math.floor(num / value);
    num -= multiplier * value;
    return `${acc + key.repeat(multiplier)}`;
  }, "");

export default { random, romanYear };
