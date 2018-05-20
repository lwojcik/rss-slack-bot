const updateFeeds = (params) => {
  console.log('params: ' + params);
  console.log('1 updating feeds...');
};

const listFeeds = (params) => {
  console.log('params: ' + params);
  console.log('2 listing feeds...');
};

const resetFeeds = (params) => {
  console.log('params: ' + params);
  console.log('3 resetting feeds status...');
};

module.exports = {
  update: updateFeeds,
  list: listFeeds,
  reset: resetFeeds,
};
