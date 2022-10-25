// on.cypress.io/plugins-guide
export default (on, config) => {
  const args = {...on, ...config};

  return args.toString();
};
