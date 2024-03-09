var PROTO_PATH = __dirname + "/../protos/fast/awg/v1/type/asset.proto";
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
exports.type_asset_v1_pb =
  grpc.loadPackageDefinition(packageDefinition).fast.awg.v1;

exports.createAsset = function createAsset(call, callback) {
  console.log(call);
  callback(null, { id: "1", name: "test" });
};

exports.getAllAssets = function getAllAssets(call, callback) {
  console.log(call);
  callback(null, { id: "1", name: "test" });
};

exports.getAsset = function getAsset(call, callback) {
  console.log(call);
  callback(null, { id: "1", name: "test" });
};

exports.updateAsset = function updateAsset(call, callback) {
  console.log(call);
  callback(null, { id: "1", name: "test" });
};

exports.deleteAsset = function deleteAsset(call, callback) {
  console.log(call);
  callback(null, { id: "1", name: "test" });
};
