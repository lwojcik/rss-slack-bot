const FeedList = require('./actions/FeedList');

const runAction = (action, params) => {
  switch (action) {
    case 'update':
      FeedList.update(params);
      break;
    case 'list':
      FeedList.list(params);
      break;
    case 'reset':
      FeedList.reset(params);  
      break;
    default:
      console.log('wrong or missing parameter. No action taken!');
  }
  process.exit();
};

const startTheMagic = () => {
  const action = process.argv[2];
  const params = process.argv.slice(3);
  runAction(action, params);
};

startTheMagic();
