const cities = require("../../data/cities.json");

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(cities),
  };
};
