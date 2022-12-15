'use strict';

const mockData = require('./data/mock');

module.exports.getProductList = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(mockData)
  };
};
