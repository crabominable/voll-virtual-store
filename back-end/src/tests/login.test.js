const chai = require('chai');
const chaiHttp = require('chai-http');
const shell = require('shelljs');

const server = require('../api/app');

const {
  validUser,
  invalidUserEmail,
  invalidUserBody,
  invalidUserPasswod,
} = require('./mocks/loginMock');

chai.use(chaiHttp);

const { expect } = chai;

before(() => {
  shell.exec('npm run db:reset');
})

describe('Login Route - ENDPOINT: /login', () => {
  let response = {};

  describe('1) - Quando houver sucesso', async () => {
    before(async () => {
      response = await chai
        .request(server)
        .post('/login')
        .send(validUser);
    });

    it('1-a) - Deve retornar o respectivo status code', () => {
    expect(response).to.have.status(200);
    });

    it('1-b) - Deve retornar um objeto', async () => {
      expect(response.body).to.be.a('object');
    });

    it('1-c) - O retorno precisa ter uma propriedade token do respectivo tipo', async () => {
      expect(response.body).to.have.property('token');
      expect(response.body.token).to.be.a('string');
    });
  });

  describe('2) - Quando houver falha', async () => {
    describe('2-1) - Se o usuário não existir', () => {
      before(async () => {
        response = await chai
          .request(server)
          .post('/login')
          .send(invalidUserEmail);
      })

      it('2-1-a) - Deve retornar o respectivo status code', () => {
        expect(response).to.have.status(404);
      });

      it('2-1-b) - Deve retornar um objeto', async () => {
        expect(response.body).to.be.a('object');
      });

      it('2-1-c) - Deve retornar um objeto com a mensagem de erro', async () => {
        expect(response.body).to.have.property('error');
        expect(response.body.error).to.equal('User not exists');
      });
    });

    describe('2-2) - Se o usuário existir mas a senha estiver errada', () => {
      before(async () => {
        response = await chai
          .request(server)
          .post('/login')
          .send(invalidUserPasswod);
      })

      it('2-2-a) - Deve retornar o respectivo status code', () => {
        expect(response).to.have.status(401);
      });

      it('2-2-b) - Deve retornar um objeto', async () => {
        expect(response.body).to.be.a('object');
      });

      it('2-2-c) - Deve retornar um objeto com a mensagem de erro', async () => {
        expect(response.body).to.have.property('error');
        expect(response.body.error).to.equal('Incorrect email or password');
      });
    })

    describe('2-3) - Se o body possuir dados inválidos', () => {
      before(async () => {
        response = await chai
          .request(server)
          .post('/login')
          .send(invalidUserBody);
      })

      it('2-3-a) - Deve retornar o respectivo status code', () => {
        expect(response).to.have.status(400);
      });

      it('2-3-b) - Deve retornar um objeto', async () => {
        expect(response.body).to.be.a('object');
      });

      it('2-3-c) - Deve retornar um objeto com a mensagem de erro', async () => {
        expect(response.body).to.have.property('error');
        expect(response.body.error).to.equal('"email" must be a string');
      });
    })
  });
});