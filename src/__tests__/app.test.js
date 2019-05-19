import supertest from 'supertest';
import app from "../app";

describe('test',  () => {
  const request = supertest(app);
  it('passes', (done)=>{
    request.get('/home')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.name).toEqual('koech');
        done();
      })
  });
});
