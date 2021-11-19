export const fakeLogin = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        user: {
          token: "123",
        },
      });
    }, 1500);
  });
};
