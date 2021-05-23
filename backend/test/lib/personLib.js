var http = require('http');
const api = 'http://localhost:3003/api/';

count = function (callback) {
    http.request(api + 'people/count', function (response) {
        var resposta = '';
        response.on('data', function (data) {
            resposta += data;
        });

        response.on('end', function () {
            callback(resposta);
        })
    }).end();
};

get = function (callback) {
    http.request(api + 'people', function (response) {
        var resposta = '';
        response.on('data', function (data) {
            resposta += data;
        });

        response.on('end', function () {
            callback(resposta);
        })
    }).end();
};

post = function (json, callback) {
    const options = {
        hostname: 'localhost',
        port: '3003',
        path: '/api/people',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    var req = http.request(options, function (response) {
        var resposta = '';
        response.on('data', function (data) {
            resposta += data;
        });
        response.on('end', function () {
            callback(resposta);
        })
    });

    req.write(json);
    req.end();
};

put = function (id, json, callback) {
    const options = {
        hostname: 'localhost',
        port: '3003',
        path: '/api/people/' + id,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    var req = http.request(options, function (response) {
        var resposta = '';
        response.on('data', function (data) {
            resposta += data;
        });

        response.on('end', function () {
            callback(resposta);
        })
    });

    req.write(json);
    req.end();
};

del = function (id, callback) {
    const options = {
        hostname: 'localhost',
        port: '3003',
        path: '/api/people/' + id,
        method: 'DELETE'
    };

    var req = http.request(options, function (response) {
        var resposta = '';
        response.on('data', function (data) {
            resposta += data;
        });

        response.on('end', function () {
            callback(response);
        })
    });

    req.end();
};

module.exports = { count, get, post, put, del }