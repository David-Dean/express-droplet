let express = require('express');
let app = express();
app.get('/foobar', function(req, res){
    res.send("Hello World version 2")
})
app.listen(3040, function(){console.log('donzo on port 3040')})