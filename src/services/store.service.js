const { Store } = require("../models");

const createStore = async (body) => {
  return Store.create(body);
};
const getStoreByID = async (id) => {
  return Store.findById(id);
};
module.exports = {
  createStore,
  getStoreByID,
};
