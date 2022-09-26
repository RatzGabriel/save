const request = require('express');
const { Genre, genreSchema } = require('../../../../models/genre');
const { User } = require('../../../../models/user');
let server;

describe('/api/genres', () => {
  beforeEach(() => {
    server = require('../../../../index');
  });
  afterEach(async () => {
    server.close();
    await Genre.remove({});
  });

  describe('GET /', () => {
    it('should return all genres', async () => {
      await Genre.collection.insertMany([
        { name: 'genre1' },
        { name: 'genre2' },
      ]);
      const res = await request(server).get('/api/genres');
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some((g) => g.name === 'genre1'));
      expect(res.body.some((g) => g.name === 'genre2'));
    });
  });
  describe('GET /:id', () => {
    it('should return specific genre if valid id is passed', async () => {
      const gerne = new Genre({ name: 'genre1' });
      await genreSchema.save();

      const res = request(server).get('/api/genres/' + genreSchema._id);

      expect(res.status).toBe(200);
      expect(res.body).toHabePropery('name', genre.name);
    });
    it('should return 404 if invalid id is passed', async () => {
      const res = request(server).get('/api/genres/' + genreSchema._id);

      expect(res.status).toBe(404);
    });
  });

  describe('POST /', () => {
    //Define the Happy path, and then in each test, we change
    //one parameter that clearly aligns with the name of the test.
    let token;
    let name;

    const exec = async () => {
      return await request(server)
        .post('/api/genres')
        .set('x-auth-token', token)
        .send({ name });
    };

    beforeEach(() => {
      token = new User().generateAuthToken();
      name = 'genre1';
    });

    it('should return 401 if client is not logged in', async () => {
      token = '';
      const res = await exec();

      expect(res.status).toBe(401);
    });

    it('should return 400 if genre is less than 5 characters', async () => {
      name = '1234';
      const res = await exec();

      expect(res.status).toBe(400);
    });

    it('should return 400 if genre is more than 50 characters', async () => {
      name = new Array(52).join('a');
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it('should save genre if it is valid', async () => {
      await exec();
      const genre = await Genre.find({ name: 'genre1' });
      expect(genre).not.toBeNull();
    });

    it('should return genre if it is valid', async () => {
      const res = await exec();

      expect(res.body).toHaveProperty('_id');
      expect(res.body).toHaveProperty('name', 'genre1');
    });
  });
});
