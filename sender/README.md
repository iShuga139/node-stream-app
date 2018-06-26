# RECEIVED

Application that streams data through POST request to a server

## Table of Contents

- [Development Installation](#Development%20Installation)
- [Testing](#Testing)
- [Authors / Contributors](#authors-contributors)

<a name="Development Installation"></a>
## Development Installation

1. Clone the repository:

  ```bash
  $ git clone git@github.com:iShuga139/node-stream-app.git
  $ cd node-stream-app/sender
  ```

2. Install dependencies:

  ```bash
  $ npm install
  ```

3. Run the application:

  ```bash
  $ npm start
  ```

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