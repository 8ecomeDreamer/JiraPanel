// 判断是否有值
export const isFalsy = (value) => (value === 0 ? false : !value);

// 判断值是否为空
export const cleanObj = (obj) => {
  // 浅拷贝对象
  let result = { ...obj };
  // 遍历对象
  Object.keys(result).forEach((item) => {
    // 判断值
    const value = result[item];
    if (isFalsy(value)) {
      delete result[item];
    }
  });
  return result;
};
