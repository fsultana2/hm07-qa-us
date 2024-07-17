// eslint-disable-next-line no-undef
const config = require('../config');

test('Should return the status code 200 ok when requesting a list of warehouses', async () => {
  let actualStatusCode;
    try {
     const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
      actualStatusCode = response.status;
    } catch (error) {
      console.error(error);
    }
    expect(actualStatusCode).toBe(200);
  });
  
  test('Should return a apropiate response body when requesting a list of warehouses', async () => {
    let data;
    try {
      const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
      data = await response.json(); 
    } catch (error) {
      console.error(error); 
    }
    expect(data[0]["name"]).toBe("Everything You Need"); 
  });