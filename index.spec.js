const app = require('./index');
const supertest = require('supertest');
const request = supertest(app);

describe('API', () => {
    it('Sum request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 1,
                    secondArg: 2,
                    operation: "+"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(3);
            });
    });

    it('Sub request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 1,
                    secondArg: 2,
                    operation: "-"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(-1);
            });
    });

    it('Division request numbers', () => {
        return request
            .post('/two-args')
            .send( 
                {
                    firstArg: 10,
                    secondArg: 2,
                    operation: "/"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(5);
        });
    });

    it('Division request special error', () => {
        return request
            .post('/two-args')
            .send( 
                {
                    firstArg: 1,
                    secondArg: 0,
                    operation: "/"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe("Divider can't be zero");
        });
    });

    it('Multiplication request numbers', () => {
        return request
            .post('/two-args')
            .send( 
                {
                    firstArg: 2,
                    secondArg: 3,
                    operation: "*"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(6);
        });
    });

    it('Power request numbers', () => {
        return request
            .post('/two-args')
            .send( 
                {
                    firstArg: 1,
                    secondArg: 1,
                    operation: "**"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(1);
        });
    });

    it('Percent request numbers', () => {
        return request
            .post('/two-args')
            .send( 
                {
                    firstArg: 1,
                    secondArg: 100,
                    operation: "%"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(1);
        });
    });

    it('Sine request numbers', () => {
        return request
            .post('/one-arg')
            .send( 
                {
                    firstArg: 0,
                    operation: "sin"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0);
        });
    });

    it('Cosine request numbers', () => {
        return request
            .post('/one-arg')
            .send( 
                {
                    firstArg: 0,
                    operation: "cos"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(1);
        });
    });

    it('Tangent request numbers', () => {
        return request
            .post('/one-arg')
            .send( 
                {
                    firstArg: 0,
                    operation: "tg"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0);
        });
    });

    it('Tangent request special error', () => {
        return request
            .post('/one-arg')
            .send( 
                {
                    firstArg: Math.PI / 2,
                    operation: "tg"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe("Tan can't be found");
        });
    });
    it('Tangent request special error', () => {
        return request
            .post('/one-arg')
            .send( 
                {
                    firstArg: 3 * Math.PI / 2,
                    operation: "tg"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe("Tan can't be found");
        });
    });

    it('Cotangent request numbers', () => {
        return request
            .post('/one-arg')
            .send( 
                {
                    firstArg: 45,
                    operation: "ctg"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0.6173696237835551);
        });
    });

    it('Cotangent request special error', () => {
        return request
            .post('/one-arg')
            .send( 
                {
                    firstArg: 0,
                    operation: "ctg"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe("Ctg can't be found");
        });
    });
    it('Cotangent request special error', () => {
        return request
            .post('/one-arg')
            .send( 
                {
                    firstArg: 2 * Math.PI,
                    operation: "ctg"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe("Ctg can't be found");
        });
    });
    it('Cotangent request special error', () => {
        return request
            .post('/one-arg')
            .send( 
                {
                    firstArg: Math.PI,
                    operation: "ctg"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe("Ctg can't be found");
        });
    });
});
