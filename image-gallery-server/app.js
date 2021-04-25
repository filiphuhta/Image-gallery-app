const express = require('express');
const app = express();
const superagent = require('superagent');
const cors = require('cors')

app.use(cors())
app.use(express.json());

var options = {
    method: 'flickr.photos.search',
    api_key: 'XXXXXXXXXXXX',
    secret: 'XXXXXXXXXX',
    tags: 'cat',
    format: 'json',
    nojsoncallback: 1,
};

//GET Images (This is CORS-enabled for all origins)
app.get("/api/images", (request, response) => {
    superagent.get('https://www.flickr.com/services/rest')
        .query(options)
        .end((err, res) => {
            if (res.body) {
                response.status(200).send(res.body);
            }
            if (err) { return console.log(err); }
            console.log(res.body);
        });
});

//GET Images BY tag (This is CORS-enabled for all origins)
app.get("/api/images/:tag", (request, response) => {
    options.tags = request.params.tag;
    console.log(options);
    superagent.get('https://www.flickr.com/services/rest')
        .query(options)
        .end((err, res) => {
            if (res.body) {
                response.status(200).send(res.body);
            }
            if (err) { return response.status(404).send("There exist no images with that tag."); }
        });
});

// Listen on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`imageGallery application is running on port ${port}...`));
module.exports = app;
