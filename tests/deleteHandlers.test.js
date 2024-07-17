// eslint-disable-next-line no-undef
const config = require('../config');
const requestBodyPost = {
    "name": "new Kit",
    "cardId": 1
  }
  test(`should return status 200 ok when deleting the kit`, async () => {
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
            method: 'DELETE',
        });
        responseStatus = response.status;
    } catch (error) {
        console.error(error);
    } 
    expect(responseStatus).toBe(200);
});
// Second test: Check that the response body contains the expected data
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
        method: 'DELETE'
      });
      responseBody = await response.json();
    } catch (error) {
      console.error(error);
    }
    expect(responseBody["ok"]).toBeTruthy(); // BOOLEAN FACTOR 
  });