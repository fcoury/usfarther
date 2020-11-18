/* eslint-disable no-console */
require('dotenv').config();


// main().then(_ => {
//   console.log('All done!');
// }).catch(err => {
//   console.error('Error running main', err);
// });

const server = require('./server');
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`API running on port ${port}`));
