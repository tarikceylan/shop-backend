'use strict';

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const queryDB = async (id) => {
  const query = dynamoDB
    .query({
      TableName: process.env.TABLE_NAME,
      KeyConditionExpression: 'id = :id',
      ExpressionAttributeValues: { ':id': id }
    })
    .promise();
  return query;
};

module.exports.handler = async (event) => {
  const { id } = event.pathParameters;
  const queryResults = await queryDB(id);
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(queryResults)
  };
};
