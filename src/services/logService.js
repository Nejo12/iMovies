// import Raven from "raven-js";

function init() {
  // Raven.config(
  //   "https://21ee2a59643843eaab44cc985f70e32c@sentry.io/1464828"
  // ).install();
}

function log(error) {
  console.log(error);
  // Raven.captureException(error);
}

export default { init, log };
