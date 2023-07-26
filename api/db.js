const mongoose = require('mongoose');
const db_user = process.env.DB_USER ? `${process.env.DB_USER}:${process.env.DB_PASS}@` :""
mongoose.connect(`mongodb://${db_user}${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
                            useNewUrlParser: true,
                            useUnifiedTopology: true,
                            useFindAndModify: false,
                            useCreateIndex: true
                          });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("MongoDB Connected...");
});

module.exports = db
