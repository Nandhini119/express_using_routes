let express = require('express'),
    bodyParser = require('body-parser'),
    router      =express.Router(),
    parseUrlencoded = bodyParser.urlencoded({extended:false});
    app = express();
    var result_obj={};
//router.route('/')
console.log("in number.js");
router.post('/Even',function (request,response) {
          console.log("in number.js even");
  var number = request.body;
  console.log(number);
  var data = number.Data;
  var result;
  for(var counter=0;counter<data.length;counter++){
    var num=parseInt(data[counter]);
    if(num%2===0)
    {
      result = num+",";
    }
  }
  result_obj.operation = "Even";
  result_obj.result = result;
  response.status(200).json(result_obj);

//  response.send("Hello Even");
});
router.route('/Odd')
.post(parseUrlencoded,function (request,response) {
  var number = request.body;
 console.log(number);
  var data = number.Data;
  var result;
  for(var counter=0;counter<data.length;counter++){
    var num=parseInt(data[counter]);
    if(num%2!=0)
    {
      result = num+",";
    }
  }
  result_obj.operation = "Odd";
  result_obj.result = result;
  response.status(200).json(result_obj);

//  response.send("Hello Even");
});
module.exports=router;
