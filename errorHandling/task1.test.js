const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'https://qauto.forstudy.space/api/',
  timeout: 1000,
  validateStatus: () => true,
});

const getUserCurrent = async () => {
  try {
    const response = axiosInstance.get('users/current');
    return response;
  } catch (error) {
    return error.message ? error.response.data : 'Error';
  }
};

test('Check response', async () => {
  const message = await getUserCurrent();
  expect(message.status).toEqual(401);
  expect(message.statusText).toEqual('Unauthorized');
});
