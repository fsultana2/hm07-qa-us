const config = require('../config');

// Define the request body for the empty kit update
const requestBody = {
  "name": "Updated Empty Kit"
};
const requestBodyPost = {
  "name": "new Kit",
  "cardId": 1
}
test(`should return status 200 ok when modifying the kit`, async () => {
  let responseStatus;
  try {
    const responsePost = await fetch(`${config.API_URL}/api/v1/kits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBodyPost)
    });
    const responseBodyPost = await responsePost.json();
    const kitId = responseBodyPost["id"];
    const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    responseStatus = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(responseStatus).toBe(200);
});
test('response should contain expected data', async () => {
  let responseBody;
  try {
    const responsePost = await fetch(`${config.API_URL}/api/v1/kits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBodyPost)
    });
    const responseBodyPost = await responsePost.json();
    const kitId = responseBodyPost["id"];
    const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    responseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(responseBody["ok"]).toBeTruthy(); // BOOLEAN FACTOR 
});