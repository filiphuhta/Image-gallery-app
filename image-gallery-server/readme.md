### Image Gallery applicaton

### Built With
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)
* [Superagent](https://github.com/visionmedia/superagent)


## Getting Started

1. Enter your API key and secret in `app.js`
   ```JS
    api_key = 'XXXXXX';
    secret = 'XXXXXX';

2. Check that you have node version v14.16.0.

3. run -npm install (You could need to delete package-lock.json before doing this command to get it to work)

4. run -npm test (To test that the api works)

5. run -npm start (To start the project to start making api calls)

## Usage

This project uses [flickr.photos.search](https://www.flickr.com/services/api/flickr.photos.search.html). To get started you need to request your key from [flickr api keys](https://www.flickr.com/services/api/misc.api_keys.html).

The api provides two different API requests which is:
"http://localhost:3000/api/images/tag"
"http://localhost:3000/api/images"
