// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
"name": "Test",
"cardId": 1
};

test('Should return status 201 created when creating a kit', async () => {
  let responseStatus;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
  responseStatus = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(responseStatus).toBe(201);
});

test('Should return expected respon body when creating a new kit', async () => {
  let responseData;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    responseData = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(responseData["name"]).toBe("Test");
  expect(responseData["card"]["id"]).toBe(1);
  expect(responseData["productsList"]).toBeNull();
  expect(responseData["id"]).toBeGreaterThan(0);
  expect(responseData["productsCount"]).toBe(0);
});