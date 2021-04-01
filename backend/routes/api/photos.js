// backend/routes/api/photos.js
const express = require('express');
const { Photo } = require('../../db/models');
const { s3, singlePublicFileUpload, singleMulterUpload } = require('../../awsS3.js');

const router = express.Router();

module.exports = router;
