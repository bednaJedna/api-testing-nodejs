const JsonPlaceHolderApi = require("../api/jsonplaceholder.api");
const expect = require("chai").expect;
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("GET tests", function () {
  context(`GET ${JsonPlaceHolderApi.resPosts}`, function () {
    it("response status is 200", function (done) {
      chai
        .request(JsonPlaceHolderApi.domain)
        .get(JsonPlaceHolderApi.resPosts)
        .end(function (err, res) {
          if (err) done(err);
          expect(res).to.have.status(200);
          done();
        });
    });

    it("response is json", function (done) {
      chai
        .request(JsonPlaceHolderApi.domain)
        .get(JsonPlaceHolderApi.resPosts)
        .end(function (err, res) {
          if (err) done(err);
          expect(res).to.be.json;
          done();
        });
    });

    it("response body is 100 item array", function (done) {
      chai
        .request(JsonPlaceHolderApi.domain)
        .get(JsonPlaceHolderApi.resPosts)
        .end(function (err, res) {
          if (err) done(err);
          expect(res.body).to.be.an("array");
          expect(res.body.length).equals(100);
          done();
        });
    });
  });
});
