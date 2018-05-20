import FeedList from "./actions/FeedList";

function runAction(action: string, params: any[])  : number {
  const feedList = new FeedList();

  switch (action) {
    case "update":
      feedList.update(params);
      break;
    case "list":
      feedList.list(params);
      break;
    case "reset":
      feedList.reset(params);
      break;
    default:
      feedList.default();
  }

  return 0;
}

function startTheMagic() : number {
  const action = global.process.argv[2];
  const params = global.process.argv.slice(3);
  runAction(action, params);
  return 0;
}

startTheMagic();