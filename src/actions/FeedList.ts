/* tslint:disable */
export default class FeedList {
  public update(params: any[]) {
    console.log("params: " + params);
    console.log("1 updating feeds...");
    return 0;
  }
  public list(params: any[]) {
    console.log("params: " + params);
    console.log("2 listing feeds...");
    return 0;
  }
  public reset(params: any[]) {
    console.log("params: " + params);
    console.log("3 resetting feeds...");
    return 0;
  }
  public default() {
    console.log("4 default...");
    return 0;
  }
}
/* tslint:enable */
