const axios = require('axios');

test('Get all posts list', async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
	expect(response.status).toEqual(200);
});