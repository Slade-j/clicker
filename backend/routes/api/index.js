const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const imagesRouter = require('./images.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/images', imagesRouter);


// ****** Routes to test User Auth Middleware ******************
// const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// const asyncHandler = require('express-async-handler');

// // GET /api/set-token-cookie - to test setTokenCookie
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//           username: 'Demo-lition'
//         },
//       })
//     setTokenCookie(res, user);
//     return res.json({ user });
//   }));

// // GET /api/restore-user - to test restoreUser
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => res.json(req.user)
//   );

// // GET /api/require-aut - to test requireAuth
// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => res.json(req.user)
//     );
// **************************************************************

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });

module.exports = router;
