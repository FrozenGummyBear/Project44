const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { storeService } = require("../services");

const createStore = catchAsync(async (req, res) => {
  const newstore = await storeService.createStore(req.body);
  res.send(newstore);
});
const getStoreByID = catchAsync(async (req, res) => {
  const store = await storeService.getStoreByID(req.query.id);
  res.send(store);
});
module.exports = {
  createStore,
  getStoreByID,
};
