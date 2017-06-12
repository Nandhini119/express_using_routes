let express = require('express'),
    app = express();

app.use(express.static('public/html'));
app.use(express.static('public/js'));

var number=require('./routes/number');
console.log("in app.js");
app.use('/number',number);

app.listen(3000,function () {
  console.log("listen on port 3000");
});
