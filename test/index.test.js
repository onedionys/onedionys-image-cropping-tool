// test/imageCroppingTool.test.js

const assert = require('assert');
const { cropImage } = require('../src/imageCroppingTool');

describe('Image Cropping Tool', function() {
    it('should crop the image correctly', async function() {
        const imagePath = 'path/to/original/image.jpg';
        const croppedImagePath = await cropImage(imagePath, 10, 20, 100, 150);
        assert.strictEqual(typeof croppedImagePath, 'string');
        // Add more assertions as needed
    });
});
