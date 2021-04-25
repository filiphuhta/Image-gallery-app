### Image Gallery applicaton

### Built With
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)
* [Superagent](https://github.com/visionmedia/superagent)


<!-- GETTING STARTED -->
## Getting Started
1. Check that you have node version v14.16.0.

2. run -npm install

3. run -npm test (To test that the api works)

4. run -npm start (To start the project to start making api calls)

### Installation

Before getting started:

Enter your API key and secret in `app.js`
   ```JS
    api_key = 'XXXXXX';
    secret = 'XXXXXX';

   ```

## Usage

This project uses [flickr.photos.search](https://www.flickr.com/services/api/flickr.photos.search.html). To get started you need to request your key from [flickr api keys](https://www.flickr.com/services/api/misc.api_keys.html).

The api provides two different API requests which is:
"http://localhost:3000/api/images/skiing"
"http://localhost:3000/api/images"
