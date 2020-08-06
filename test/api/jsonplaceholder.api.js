class JsonPlaceholderApi {
  constructor() {
    this.domain = "https://jsonplaceholder.typicode.com";
    this.resPosts = "/posts";
    this.resComments = "/comments";
    this.resAlbumns = "/albums";
    this.resPhotos = "/photos";
    this.resTodos = "/todos";
    this.resUsers = "/users";
  }

  /**
   * Returns full resource sub URL
   * @method
   * @param  {...any} args strings to concat with domain url to assemble
   * full sub URL
   * @returns {string} URL if ok, else undefined, if error is caught
   * @example "/posts/1" = getFullResourceItemURL("/posts","/1")
   */
  getResourceItemURL(...args) {
    try {
      return args[0].concat(...args.slice(1));
    } catch (error) {
      console.log(`Error cought in 'getFullResourceItemURL': ${error}`);
      console.log(
        "Are you shure, you have provided at least two arguments to the method?"
      );
      return undefined;
    }
  }
}
module.exports = new JsonPlaceholderApi();
