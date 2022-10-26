/*global global */
import "@testing-library/jest-dom";
import "@testing-library/dom";

const logErr = global.console.error;

global.console.error = ({ msg, ...etc } = {}) => {
  logErr({ ...etc, msg });
  throw msg instanceof Error ? msg : new Error(msg);
};
