# node-stream-app
Streaming data from client to server using HTTP POST request


## This project contains two applications

# Receiver
Is an express application that expose and endpoint to receive data from the client.

Check the receiver/README.md file to check how it works.

#### Additional notes
-  A default config file was added.
  - This could be populated when it is deployed; with a mechanism to retrieve that kind of information like zookeeper or other.
- Please assume all errors will be handle by express.
- The aplications uses Node 6.
- ESlint was added to check the code style.
- Mocha is the selected test framework.
- NYC is the selected module to check code coverage.

# Sender
Is the client application that sends data to the server.

#### Additional notes
-  A default config file was added.
  - This could be populated when it is deployed; with a mechanism to retrieve that kind of information like zookeeper or other.
- Exclusion added in .gitignore file to track the sample_event_stream.log to keep the test integrity.
- The index.js file was excluded for ESlint to avoid offending some rules.
- I did not use destructuring mode to keep the same standard code programming.
- The aplications uses Node 6.
- ESlint was added to check the code style.
- Mocha is the selected test framework.
- NYC is the selected module to check code coverage.
