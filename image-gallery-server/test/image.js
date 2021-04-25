let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app')

chai.should();
chai.use(chaiHttp);

describe('Image API', () => {
    /**
     * Test Get images
     */
    describe('GET /api/images', () => {
        it('should get all the images', (done) => {
            chai.request(server)
                .get('/api/images')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.should.be.json;
                    done();
                })
        })

        /**
     * Test Get images with wrong path
     */
        it('It should not GET all the images', (done) => {
            chai.request(server)
                .get('/api/image')
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                })
        })
    })

    /**
     * Test Get images by tag 
     */
    it('should get all the images of specific tag', (done) => {
        const imageTag = "dogs";
        chai.request(server)
            .get('/api/images/' + imageTag)
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.json;
                done();
            })
    })
})
