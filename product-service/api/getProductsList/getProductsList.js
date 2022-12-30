'use strict';
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const scanDB = async () => {
  const scan = await dynamoDB
    .scan({
      TableName: process.env.TABLE_NAME
    })
    .promise();
  return scan;
};

module.exports.handler = async (event) => {
  const scanResults = await scanDB();
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(scanResults.Items)
  };
};
