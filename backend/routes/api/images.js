// backend/routes/api/images.js
const express = require('express');
const { Photo } = require('../../db/models');
const { restoreUser } = require('../../utils/auth');
const asyncHandler = require('express-async-handler');
const { s3, multiplePublicFileUpload, multipleMulterUpload } = require('../../awsS3.js');

const router = express.Router();

router.post(
  '/',
  multipleMulterUpload('images'),
  asyncHandler(async (req, res) => {
    const { ownerId } = req.body;
    try {
      const urlArray = await multiplePublicFileUpload(req.files);

      await Promise.all(urlArray.map(photoUrl => {
        return Photo.create({ ownerId, photoUrl })
      }));
      res.status(200);
      res.json({ urlArray })

     } catch (error) {
      console.error(error)

     }
  })
)

router.get('/', restoreUser, asyncHandler(async (req, res) => {
  const { user } = req;
  const photos = await Photo.findAll({ where: { ownerId: user.id }});
  return res.json({ photos });
}))

module.exports = router;
