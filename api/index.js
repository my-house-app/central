//       .                    |~~             .
//                   .     ___|___      .
//                        ((((())))
//           .           (((((()))))         .
//                     |-------------|
//               +    I_I_I_I_I_I_I_I_I    +
//              (()   |---------------|   (()
//             |---|  ||-| |-| |-| |-||  |---|
//   _________|-----|_|---------------|_|-----|_________
//   I_I_I_I_I_I_I_I|I_I_I_I_I_I_I_I_I_I|I_I_I_I_I_I_I_|
//   |-------|------|-------------------|------|-------|
//   ||-| |-||  |-| ||-| |-| |-| |-| |-|| |-|  ||-| |-||
// ((|-------|------|-------------------|------|-------|))
// ()|  |_|  |  |_| |::::: ------- :::::| |_|  |  |_|  |()
// ))|  |_|  |  |_| | |_| |_.-"-._| |_| | |_|  |  |_|  |((
// ()|-------|------| |_| | | | | | |_| |------|-------|()
// @@@@@@@@@@@@@@@@@|-----|_|_|_|_|-----|@@@@@@@@@@@@@@@@@
//                 @@@@/=============\@@@@
//                        /       \
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {
  User, Post, Comment, VisitDate, Image,
} = require('./src/db.js');
const users = require('./src/loaders/users');
const posts = require('./src/loaders/posts');
const comments = require('./src/loaders/comments');
const visitDates = require('./src/loaders/visitDates');
const images = require('./src/loaders/images');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  User.bulkCreate(users);
  Post.bulkCreate(posts);
  Comment.bulkCreate(comments);
  VisitDate.bulkCreate(visitDates);
  Image.bulkCreate(images);
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
