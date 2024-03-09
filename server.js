var grpc = require("@grpc/grpc-js");
const assetController = require("./controllers/asset.controller.js");
const userController = require("./controllers/user.controller.js");

function main() {
  var server = new grpc.Server();
  server.addService(assetController.type_asset_v1_pb.AssetService.service, {
    createAsset: assetController.createAsset,
    getAllAssets: assetController.getAllAssets,
    getAsset: assetController.getAsset,
    updateAsset: assetController.updateAsset,
    deleteAsset: assetController.deleteAsset,
  });
  server.addService(userController.type_user_v1_pb.UserService.service, {
    createUser: userController.createUser,
    getAllUsers: userController.getAllUsers,
    getUser: userController.getUser,
    updateUser: userController.updateUser,
    deleteUser: userController.deleteUser,
  })
  server.bindAsync(
    "0.0.0.0:50052",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
      console.log("Server running at http://127.0.0.1:50051");
    }
  );

  console.log(server);
}

main();
