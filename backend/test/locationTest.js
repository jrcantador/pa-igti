const chai = require('chai');
const assert = chai.assert;
var location = require('./lib/locationLib');
var id = 0;

var info = JSON.stringify({
    "name": "BARRA BONITA",
    "uf": "SP",
    "cep": "17340000"
});

describe("Test in location", function () {
    // POST    
    it('Test method post', function (done) {
        location.post(info, function (response) {
            id = JSON.parse(response)._id;

            var resp = JSON.stringify({
                "name": JSON.parse(response).name,
                "uf": JSON.parse(response).uf,
                "cep": JSON.parse(response).cep,
            });            
            assert.equal(info, resp);
            done();
        });
    });

    // GET
    it('Test method get', function (done) {
        location.get(function (response) {

            var resp = JSON.stringify({
                "name": JSON.parse(response)[0].name,
                "uf": JSON.parse(response)[0].uf,
                "cep": JSON.parse(response)[0].cep,
            });

            assert.equal(info, resp);
            done();
        });
    });

    // COUNT
    it('test method count', function (done) {
        location.count(function (response) {
            assert.equal(1, JSON.parse(response).value);
            done();
        });
    });

    // PUT
    it('Test method put', function (done) {
        info = JSON.stringify({
            "name": "SÃO PAULO",
            "uf": "SP",
            "cep": "00000000"
        });

        location.put(id, info, function (response) {
            var resp = JSON.stringify({
                "name": JSON.parse(response).name,
                "uf": JSON.parse(response).uf,
                "cep": JSON.parse(response).cep,
            });
            assert.equal(info, resp);
            done();
        });
    });

    // DELETE
    it('Test method delete', function (done) {
        location.del(id, function (response) {
            assert.equal(204, response.statusCode);
            done();
        });
    });

    // COUNT
    it('test method count after delete', function (done) {
        location.count(function (response) {
            assert.equal(0, JSON.parse(response).value);
            done();
        });
    });
});
