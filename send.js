const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-central-1',
  credentials: {
    accessKeyId: process.env.DYNAMO_KEY_ID,
    secretAccessKey: process.env.DYNAMO_KEY_SECRET,
  }
});

const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
module.exports = async () => {
  let params = {
    TableName: 'now-test-case',
    Item: {
      'id': { N: String(Date.now()) },
      'message': { S: 'hello World' },
    }
  };
  console.log('hello'); //we get here

  try {
    const data = await ddb.putItem(params).promise();
    console.log(data); // this does not get logged, guess we are pending
    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
