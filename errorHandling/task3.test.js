const axios = require('axios');
jest.mock('axios');

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error in fetch data:', error);
    throw error;
  }
}

describe('fetch data', () => {
  it('success request', async () => {
    const data = { text: 'new text' };
    axios.get.mockResolvedValue({ data });
    const result = await fetchData('http://localhost:8080');
    expect(result).toEqual(data);
  });

  it('failed request', async () => {
    axios.get.mockRejectedValue(
      new Error('Request failed with status code 500')
    );
    const result = fetchData('http://localhost:8080');
    await expect(result).rejects.toThrow('Request failed with status code 500');
  });
});
