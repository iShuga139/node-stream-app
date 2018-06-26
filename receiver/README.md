# RECEIVED

Express app to receive post request from client in stream mode

## Table of Contents

- [Development Installation](#Development%20Installation)
- [Exposed Resources](#Exposed%20Resources)
- [Testing](#Testing)
- [Authors / Contributors](#authors-contributors)

<a name="Development Installation"></a>
## Development Installation

1. Clone the repository:

  ```bash
  $ git clone git@github.com:iShuga139/node-stream-app.git
  $ cd node-stream-app
  ```

2. Install dependencies:

  ```bash
  $ npm install
  ```

3. Run the application:

  ```bash
  $ npm start
  ```

The App will be accessible from your computer on http://localhost:[port] with the port defined in defaults.json

<a name="Exposed Resources"></a>
## Endpoints

- POST /event
  that receive a JSON object in the body

<a name="Testing"></a>
## Testing

The App uses Mocha as testing framework, Supertest and Sinon for the external systems simulation.
Tests should be written on the tests directory.

To test the App run from the root of the project:

```bash
$ npm test
```

You can get a coverage report using:

```bash
$ npm run coverage
```

When done, you can see the coverage results; executing the following command:

```bash
$ npm run coverage:open
```

<a name="authors-contributors"></a>
## Authors / Contributors

- **Author:** Jonathan Estrada - <jeaworks@gmail.com>
- **Contributors:**