
const app = require('./route');
let port = 3000;



// Start server
app.listen(port, () => {
  console.log(`Server berhasil berjalan di port ${port} . . . \n`);
});

