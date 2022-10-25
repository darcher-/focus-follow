import "@testing-library/jest-dom";
import "@testing-library/dom";

const logErr = globa.console.error;

global.console.error = ({ msg, ...props } = {}) => {
  const { msg } = args;
  logErr({ ...props, msg });
  throw msg instanceof Error ? msg : new Error(msg);
};
