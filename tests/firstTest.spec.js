const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;

const app = express();

app.get('/first',(err,res) => {
    res.status(200).json({"ok": "response"})
});

describe('First test', () => {
    it ('OK response', () => {
        request(app)
        .get('/first')
        .end((err,res) => {
            expect(res.statusCode).to.be.equal(200);
        });
    });
    it('Mocky OK response', (done) => {
        request('http://www.mocky.io')
        .get('/v3/dacc616e-6082-4261-b29d-682c48d7c010')
        .expect(200,done);

    });
});