import "@testing-library/jest-dom";
import "@testing-library/dom";

const logErr = global.console.error;

global.console.error = ({ msg, ...props } = {}) => {
  logErr({ ...props, msg });
  throw msg instanceof Error ? msg : new Error(msg);
};
