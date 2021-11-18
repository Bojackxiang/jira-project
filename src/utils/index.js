const isFalsy = (value) =>
  value === false || value === null || value === undefined || value === "";

export const cleanObject = (targetObj) => {
  const newObj = { ...targetObj };
  console.log(newObj);
  Object.keys(newObj).forEach((key) => {
    const value = targetObj[key];
    if (isFalsy(value)) {
      delete newObj[key];
    }
  });

  return newObj;
};
