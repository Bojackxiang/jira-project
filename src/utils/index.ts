const isFalsy = (value: any) =>
  value === false || value === null || value === undefined || value === "";

export const cleanObject = (targetObj: object) => {
  const newObj = { ...targetObj };
  console.log(newObj);
  Object.keys(newObj).forEach((key) => {
    // @ts-ignore
    const value = targetObj[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete newObj[key];
    }
  });

  return newObj;
};
