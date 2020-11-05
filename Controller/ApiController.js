
//AWS config 
const AWS = require('aws-sdk');
var awsconfig = {
    "region" : "ap-southeast-1",
    "accessKeyId" : "",
    "secretAccessKey" : ""
}

AWS.config.update(awsconfig);
const Dynamodb = new AWS.DynamoDB.DocumentClient();

var table = 'LinhKien';
const GetALL = function(req,res){
    console.log("GetALL...");
    Dynamodb.scan({TableName: table}).promise().then(data => res.send(data.Items)).catch(console.err);
}


const Add = (req,res)=>{
    console.log("ADD...");
    let item = {
        TableName: table,
        Item: {
            "id": req.body.id,
            "ten": req.body.ten,
            "gia": req.body.gia,
            "dvt": req.body.dvt,
            "chitiet": req.body.chitiet

        }
    };
    Dynamodb.put(item).promise().then(res.end("Created!")).catch(console.err);
}


module.exports={
    GetALL,Add
}


