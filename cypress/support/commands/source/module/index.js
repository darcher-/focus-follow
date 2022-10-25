const endpoints = {
  dev: "dev.domain.com",
  stg: "stg.domain.com",
};

export default function createSomeObject({ env, user, token }) {
  const url = endpoings[env];
  const epoch = Date.now();

  return cy
    .request({
      method: "POST",
      url,
      headers: {
        Authorization: `${Bearer} ${token}`,
        "Content-Type": "application/json",
        "x-submitter-id": user.id,
        "x-request-id": epoch,
      },
      body: { data: {} },
    })
    .then((res) => ({ ...res.body }))
    .catch((err) => console.error(err));
}
