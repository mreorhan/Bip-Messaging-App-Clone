class Logger {
  static log = (indication) => {
    console.warn(JSON.stringify(indication, 2, 2));
  };
}

export default Logger;
