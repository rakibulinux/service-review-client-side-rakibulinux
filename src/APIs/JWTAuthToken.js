const JWTAuthToken = (user, navigate, from) => {
  const currentUser = {
    email: user.email,
  };
  fetch("https://service-review-gamma.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("service-token", data.token);
      navigate(from, { replace: true });
    });
};

export default JWTAuthToken;
