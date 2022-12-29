'use strict';

const AWS = require('aws-sdk');
const { mockProducts } = require('../data/mock');

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: 'eu-central-1',
  accessKeyId: AWS.config.credentials.accessKeyId,
  secretAccessKey: AWS.config.credentials.secretAccessKey
});

mockProducts.forEach((product) => {
  let params = {
    Item: {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price
    },
    TableName: 'Products'
  };
  populateProducts(params);
});

async function populateProducts(item) {
  try {
    await dynamoDb.put(item).promise();
    console.log(item);
  } catch (err) {
    console.log(err);
  }
}
