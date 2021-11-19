module.exports = (req, res, next) => {
  console.log(req.method, req.path);
  if (req.mothod === "POST" && req.url === "/login") {
    console.log("LOGIN");
    res.status(200).json({
      user: {
        token: "123",
      },
    });
  }

  if (req.mothod === "POST" && req.path === "/register") {
    console.log("REGISTER");
    res.status(200).json({
      user: {
        id: "",
        name: "",
        token: "123",
      },
    });
  }

  res.status(200).json({
    user: {
      id: "9",
      name: "jira",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    },
  });
};
