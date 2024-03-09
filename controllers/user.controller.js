var PROTO_PATH = __dirname + "/../protos/fast/awg/v1/type/user.proto";
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

exports.type_user_v1_pb  = grpc.loadPackageDefinition(packageDefinition).fast.awg.v1;

exports.getUser = function (call, callback){
    console.log(call.request);
}

exports.getUsers = function (call, callback){
    console.log(call.request);
}

exports.createUser = function (call, callback){
    console.log(call.request);
}

exports.updateUser = function (call, callback){
    console.log(call.request);
}

exports.deleteUser = function (call, callback){
    console.log(call.request);
}