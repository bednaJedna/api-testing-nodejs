const JsonPlaceHolderApi = require("../api/jsonplaceholder.api");
const expect = require("chai").expect;
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

let response;

describe("GET tests", function () {
  JsonPlaceHolderApi.resAll.forEach(function (resource) {
    context(`GET ${resource}`, function () {
      before(function () {
        response = chai.request(JsonPlaceHolderApi.domain).get(resource);
      });

      it("response status is 200", function (done) {
        response
          .then(function (res) {
            expect(res).to.have.status(200);
            done();
          })
          .catch(function (err) {
            done(err);
          });
      });

      it("response is json", function (done) {
        response
          .then(function (res) {
            expect(res).to.be.json;
            done();
          })
          .catch(function (err) {
            done(err);
          });
      });

      it("response body is non-empty item array", function (done) {
        response
          .then(function (res) {
            expect(res.body).to.be.an("array");
            expect(res.body).not.empty;
            done();
          })
          .catch(function (err) {
            done(err);
          });
      });
    });
  });
});
