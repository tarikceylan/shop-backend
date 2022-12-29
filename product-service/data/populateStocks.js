'use strict';

const AWS = require('aws-sdk');
const { mockStocks } = require('../data/mock');

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: 'eu-central-1',
  accessKeyId: AWS.config.credentials.accessKeyId,
  secretAccessKey: AWS.config.credentials.secretAccessKey
});

mockStocks.forEach((productStock) => {
  let params = {
    Item: {
      product_id: productStock.product_id,
      count: productStock.count
    },
    TableName: 'Stocks'
  };
  populateStocks(params);
});

async function populateStocks(item) {
  try {
    await dynamoDb.put(item).promise();
    console.log(item);
  } catch (err) {
    console.log(err);
  }
}
