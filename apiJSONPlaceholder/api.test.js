const api = require('./api.js');
describe('my api tests', () => {
  test('Get all posts list and check response', async () => {
    const response = await api.getPosts();
    expect(response.status).toEqual(200);
    expect(response.data.length).toBe(100);
    expect(Array.isArray(response.data)).toBe(true);
    for (let i = 0; i < response.data.length; i++) {
      expect(response.data[i]).toHaveProperty('userId');
      expect(typeof response.data[i].userId).toBe('number');

      expect(response.data[i]).toHaveProperty('id');
      expect(typeof response.data[i].id).toBe('number');

      expect(response.data[i]).toHaveProperty('title');
      expect(typeof response.data[i].title).toBe('string');

      expect(response.data[i]).toHaveProperty('body');
      expect(typeof response.data[i].body).toBe('string');
    }
  });

  test('Create new post', async () => {
    const response = await api.postPost({
      userId: 1,
      title: 'bla',
      body: 'blabla',
    });
    expect(response.status).toEqual(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('title', 'bla');
    expect(response.data).toHaveProperty('body', 'blabla');
    expect(response.data).toHaveProperty('userId', 1);
  });

  test('Get all users list and check response', async () => {
    const response = await api.getUsers();
    expect(response.status).toEqual(200);
    expect(response.data.length).toEqual(10);
    expect(Array.isArray(response.data)).toBe(true);
    for (let i = 0; i < response.data.length; i++) {
      expect(response.data[i]).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
        username: expect.any(String),
        email: expect.any(String),
        address: expect.any(Object),
        phone: expect.any(String),
        website: expect.any(String),
        company: expect.any(Object),
      });
    }
  });

  test('Get first user', async () => {
    const firstUser = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    };
    const response = await api.getUser(1);
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(firstUser);
  });

  test('Create new user', async () => {
    const newUser = {
      name: 'NewUser',
      username: 'username@NewUser',
      email: 'NewUser@NewUser.com',
    };
    const response = await api.postUser(newUser);
    expect(response.status).toEqual(201);
    expect(response.data).toEqual(expect.objectContaining(newUser));
  });
});
