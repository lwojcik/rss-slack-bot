import FeedList from "./actions/FeedList";

function runAction(action: string, params: any[]) {
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
}

function startTheMagic() {
  const action = process.argv[2];
  const params = process.argv.slice(3);
  runAction(action, params);
}

startTheMagic();