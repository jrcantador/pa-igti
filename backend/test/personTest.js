const chai = require('chai');
const assert = chai.assert;
var person = require('./lib/personLib');

var id = 0;

var info = JSON.stringify({
    "name": 'Test',
    "age": 30,
    "birthDate": new Date,
    "genre": "male",
    "Address": "address",
    "cellPhone": "00000000",
    "email": "test@test.com",
    "linkedin": "www.linkedin.com",
    "Facebook": "facebook.com",
    "location": "1"
});

describe("Test in person", function () {
    // POST    
    it('Test method post', function (done) {
        person.post(info, function (response) {
            id = JSON.parse(response)._id;        
            assert.equal('Test', JSON.parse(response).name);
            done();
        });
    });

    // GET
    it('Test method get', function (done) {
        person.get(function (response) {
            
            var resp = JSON.stringify({
                "name": JSON.parse(response)[0].name,
                "age": JSON.parse(response)[0].age,
                "birthDate": JSON.parse(response)[0].birthDate,
                "genre": JSON.parse(response)[0].genre,
                "Address": JSON.parse(response)[0].Address,
                "cellPhone": JSON.parse(response)[0].cellPhone,
                "email": JSON.parse(response)[0].email,
                "linkedin": JSON.parse(response)[0].linkedin,
                "Facebook": JSON.parse(response)[0].Facebook,
                "location": JSON.parse(response)[0].location
            });                 
            assert.equal(info, resp);
            done();
        });
    });

    // COUNT
    it('test method count', function (done) {
        person.count(function (response) {
            assert.equal(1, JSON.parse(response).value);
            done();
        });
    });

    // PUT
    it('Test method put', function (done) {
        var birthDate = new Date;
        info = JSON.stringify({
            "name": 'Test 2',
            "age": 40,
            "birthDate": birthDate,
            "genre": "female",
            "Address": "address 2",
            "cellPhone": "11111111",
            "email": "test2@test2.com",
            "linkedin": "www.linkedin.com2",
            "Facebook": "facebook.com2",
            "location": "2"
        });

        person.put(id, info, function (response) {
            assert.equal('Test 2', JSON.parse(response).name);
            done();
        });
    });

    // GET
    it('Test method get', function (done) {
        person.get(function (response) {
            var resp = JSON.stringify({
                "name": JSON.parse(response)[0].name,
                "age": JSON.parse(response)[0].age,
                "birthDate": JSON.parse(response)[0].birthDate,
                "genre": JSON.parse(response)[0].genre,
                "Address": JSON.parse(response)[0].Address,
                "cellPhone": JSON.parse(response)[0].cellPhone,
                "email": JSON.parse(response)[0].email,
                "linkedin": JSON.parse(response)[0].linkedin,
                "Facebook": JSON.parse(response)[0].Facebook,
                "location": JSON.parse(response)[0].location
            });
            assert.equal(info, resp);
            done();
        });
    });

    // DELETE
    it('Test method delete', function (done) {
        person.del(id, function (response) {
            assert.equal(204, response.statusCode);
            done();
        });
    });
    
    // COUNT
    it('test method count after delete', function (done) {
        person.count(function (response) {
            assert.equal(0, JSON.parse(response).value);
            done();
        });
    });
});
