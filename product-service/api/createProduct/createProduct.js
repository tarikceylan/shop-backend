'use strict';

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const putProduct = async (item) => {
  const newProduct = await dynamoDB
    .put({
      TableName: 'Products',
      Item: item
    })
    .promise();
  return newProduct;
};

module.exports.handler = async (event) => {
  const item = {};
  const putResult = await putProduct(item);
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }
  };
};
