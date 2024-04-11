const printLog = (...items: any[]) => {
  console.log(JSON.stringify(items, null, 2));
};

export default printLog;
