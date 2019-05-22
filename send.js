const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-central-1',
  credentials: {
    accessKeyId: process.env.DYNAMO_KEY_ID,
    secretAccessKey: process.env.DYNAMO_KEY_SECRET,
  }
});

const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
module.exports = () => {
  let params = {
    TableName: 'now-test-case',
    Item: {
      'id': { N: Date.now() },
      'message': { S: 'hello World' },
    }
  };
  console.log('hello'); //we get here

  try {
  console.log('try'); //we get here
    const data = ddb.putItem(params).promise();
    console.log(data); //this is pending promise now
    data
      .then((data) => {console.log(data)})
      .catch((error) => {console.log(error)});
    // and it never gets resolved or rejected
  } catch(e) {
    console.log(e); //and now error catched here either
  }
};
