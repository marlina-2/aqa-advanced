const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'https://qauto.forstudy.space/api/',
  timeout: 1000,
  validateStatus: () => true,
});

const postAuthSignin = (email, password) =>
  axiosInstance.post('auth/signin', {
    email: email,
    password: password,
    remember: false,
  });

const getExpenses = (params, headers) =>
  axiosInstance.get('expenses', {
    params: params,
    headers: headers,
  });

describe('Check params and headers', () => {
  let sid;
  beforeAll(async () => {
    const response = await postAuthSignin('testtestt2@test.com', 'Qwerty12345');
    sid = response.headers['set-cookie'][0].split(';')[0];
  });

  test('test params and headers', async () => {
    const params = { carId: 197259 };
    const headers = { Cookie: sid };
    const response = await getExpenses(params, headers);
    expect(response.status).toEqual(200);
    expect(response.config.params).toEqual(params);
    expect(response.config.headers.Cookie).toEqual(sid);
  });
});
