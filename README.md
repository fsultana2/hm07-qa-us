# Sprint 7 project
# project name: hm07-qa-us
# Project description: 
This project is a test automation framework for the HM07-qa-us project. This project involves writing  tests for the Urban Grocers API using Jest. The goal is to ensure the API endpoints function correctly by validating the response status codes and response bodies for GET, POST, PUT, and DELETE requests. The project is structured around five key tasks, each focusing on a different type of HTTP request.
Task 1: Tests for GET Requests (getHandlers.test.js)
Task 2: Tests for POST Requests(PostHandlers.test.js)
Task 3: Tests for PUT Requests(putHandlers.test.js)
Task 4: Tests for DELETE Requests (deleteHandlers.test.js)
Task 5: Write README.md

# Linking GitHub Account and Setting Up Local Repository
To begin working on Project 7, follow these steps to link your GitHub account and clone the repository to your local computer.
Step 1: Link Your GitHub Account
    Navigate to the Project 7 description page on TripleTen.
    Click the "Link GitHub account" button in the the top of the page.
Step 2: Clone the Repository Locally
    Open  Terminal (On macOS  use the terminal application.)
    Create a Directory for Projects_
        Navigate to the home directory:   
        cd ~
Step 3:Create a new directory named projects and navigate into it: 
        mkdir projects 
        cd projects

Step 4: Clone the Repository:
    For SSH authentication users, enter the following command, replacing username with GitHub username:

	git clone git@github.com:fsultana2/hm07-qa-us.git

    Or, For HTTPS authentication users, enter:

    https://github.com/fsultana2/hm07-qa-us.git

Step 5: Navigate into your project directory:
	cd hm07-qa-us

Step 6: Install the necessary dependencies:
	npm install

# Setting the API URL:

    1. Start the Project:
        Go to the TripleTen Project 7 description page and click the "Start" button.

    2. Copy the API URL:
        Once you click "Start," a URL will be generated. Copy this URL.
# Update config.js:
    Open the config.js file located within your project folder.
    Paste the copied URL between the double quotation marks after the API_URL variable. 
        E.g: const config = { API_URL:"your-copied-url-here" };
# Accessing Documentation:
    1. Navigate to apiDoc:
        Copy the URL from the TripleTen Project 7 description page as mentioned above.
    2. Open Documentation in Browser:
        Paste the copied URL into your browser's address bar.
        Append /docs/ to the end of the URL. The full address should look something like this:
            e.g. https://cnt-f079ac06-a8b3-4029-9858-45e562d585e0.containerhub.tripleten-services.com/docs/ 
    3. Press Enter to navigate to the apiDoc documentation page.
        Running the Test Suite
    To properly run the test suite, ensure you have already written tests within the respective files for each method.
# Running Tests Individually by File
        1. Open the Debug Terminal in VSCode:
            Click the fourth button down in the file explorer (symbolized by a play button with an insect in 
            the bottom left).
            Alternatively, drag the bottom bar up to reveal the terminal, or select "JavaScript Debug Terminal."
        2. Run the Test:
         In the terminal, enter the following command:
         npx jest ./tests/filename.js
    This command calls the Jest framework and specifies the directory and filename to run only the individual 
    test file.
# Running the Entire Test Suite
    1. Open the Debug Terminal in VSCode:
        Follow the same steps as mentioned above to open the terminal.

    2. Run All Tests:  
        In the terminal, enter the following command:
	    npx jest
    This command calls the Jest framework to run the entire test suite at once.
# Urban Grocers API Test# Suite
    Send a GET POST:
        Test 1: Verify Status Code for Requesting a Kit
        Objective: Ensure that requesting a kit provides a 200 status code.
        Steps:
            1. Declare Variables: Begin by declaring a variable actualStatusCode to store the HTTP status code.
            2. Send GET Request: Send a GET request to retrieve a list of warehouses 
            using ${config.API_URL}/api/v1/warehouses.
            3. Retrieve Status Code: Capture the HTTP status code from the GET response and assign it 
            to actualStatusCode.
            4. Handle Errors: Log any errors that may occur during the request.
            5. Assertion: Use Jest's expect function to verify that actualStatusCode equals 200, indicating 
            a successful request.

        Test 2: Verify Response Body for List of Warehouses
        Objective: Ensure that the response body contains appropriate data when requesting a list of warehouses.
        Steps:
            1. Declare Variables: Begin by declaring a variable data to store the parsed JSON response data.
            2. Send GET Request: Send a GET request to retrieve a list of warehouses 
            using ${config.API_URL}/api/v1/warehouses.
            3. Parse Response: Parse the JSON response body and assign it to data.
            4. Handle Errors: Log any errors that may occur during the request.
            5. Assertion: Use Jest's expect function to verify that the name of the first warehouse 
            (data[0]["name"])   equals "Everything You Need", confirming the expected data structure.



    Send a POST Request:
        Test 1: Verify Status Code for Creating a Kit
        Objective: Ensure that creating a new kit via a POST request returns a 201 status code.
        Steps:
            1. Declare Variables: Begin by declaring variables for responseStatus and requestBody.
            2. Send POST Request: Send a POST request to create a new kit using requestBody.
            3. Retrieve Status Code: Capture the HTTP status code from the POST response and assign it 
            to responseStatus.
            4. Handle Errors: Log any errors that may occur during the request.
            5. Assertion: Use Jest's expect function to verify that responseStatus equals 201, indicating the kit 
            was successfully created.
        Test 2: Verify Response Body for Created Kit
        Objective: Ensure that the response body of the POST request confirms the creation of a new kit 
        with expected details.
        Steps:
            1. Declare Variables: Begin by declaring variables for responseData and requestBody.
            2. Send POST Request: Send a POST request to create a new kit using requestBody.
            3. Parse Response: Parse the response body of the POST request and assign it to responseData.
            4. Handle Errors: Log any errors that may occur during the request.
            5. Assertions: Use Jest's expect function to verify various properties of responseData such as name, 
            card.id,productsList, id, and productsCount

    Send PUT Requests
        Test 1: Verify Status Code for Modifying a Kit
        Objective: Ensure that modifying a kit via a PUT request returns a 200 status code.
        Steps:
            1. Declare Variables: Begin by declaring variables for responseStatus, responsePost, responseBodyPost, 
            and kitId.
            2. Send POST Request: Send a POST request to create a new kit using requestBodyPost.
            3. Extract Kit ID: Extract the id of the newly created kit from the POST response body (responseBodyPost).
            4. Send PUT Request: Use the extracted kitId to send a PUT request to modify the kit, using requestBody 
            to update its name.
            5. Retrieve Status Code: Capture the HTTP status code from the PUT response and assign it 
            to responseStatus.
            6. Handle Errors: Log any errors that may occur during the requests.
            7. Assertion: Use Jest's expect function to verify that responseStatus equals 200, indicating the kit 
            was successfully modified.

        Test 2: Verify Response Body for Modified Kit
        Objective: Ensure that the response body contains expected data after modifying a kit.
        Steps:
            1. Declare Variables: Begin by declaring variables for responseBody, responsePost, responseBodyPost, 
            and kitId.
            2. Send POST Request: Send a POST request to create a new kit using requestBodyPost.
            3. Extract Kit ID: Extract the id of the newly created kit from the POST response body (responseBodyPost).
            4. Send PUT Request: Use the extracted kitId to send a PUT request to modify the kit, using requestBody 
            to update its name.
            5. Parse Response: Parse the response body of the PUT request and assign it to responseBody.
            6. Handle Errors: Log any errors that may occur during the requests.
            7. Assertion: Use Jest's expect function to verify that responseBody["ok"] is true, confirming the kit
             was successfully modified.
    DELETE Requests
        Test 1: Verify Status Code for Deleting a Kit
        Objective: Ensure that deleting a kit via a DELETE request returns a 200 status code.
        Steps:
            1. Declare Variables: Begin by declaring variables for responseStatus, responsePost, responseBodyPost, 
            and kitId.
            2. Send POST Request: Send a POST request to create a new kit using requestBodyPost.
            3. Extract Kit ID: Extract the id of the newly created kit from the POST response body (responseBodyPost).
            4. Send DELETE Request: Use the extracted kitId to send a DELETE request to delete the kit.
            5. Retrieve Status Code: Capture the HTTP status code from the DELETE response and assign it 
            to responseStatus.
            6. Handle Errors: Log any errors that may occur during the requests.
            7. Assertion: Use Jest's expect function to verify that responseStatus equals 200, indicating the kit 
            was successfully deleted.
        Test 2: Verify Response Body for Deleted Kit
        Objective: Ensure that the response body confirms successful deletion of a kit.
        Steps:
            1. Declare Variables: Begin by declaring variables for responseBody, responsePost, responseBodyPost, 
            and kitId.
            2. Send POST Request: Send a POST request to create a new kit using requestBodyPost.
            3. Extract Kit ID: Extract the id of the newly created kit from the POST response body (responseBodyPost).
            4. Send DELETE Request: Use the extracted kitId to send a DELETE request to delete the kit.
            5. Parse Response: Parse the response body of the DELETE request and assign it to responseBody.
            6. Handle Errors: Log any errors that may occur during the requests.
            7. Assertion: Use Jest's expect function to verify that responseBody["ok"] is true, confirming the kit 
            was successfully deleted.




  

