import 'package:ap004_dart_backend_terrario/src/config/app_config.dart';
import 'dart:io';
import 'package:shelf/shelf_io.dart' as shelf_io;
import 'package:shelf/shelf.dart';

//promisses
//then/catch ou async/await

//futures equivalente a promises
//then/catch ou async/await
Future<void> main(List<String> arguments) async {
  final config = AppConfig.fromEnv();
  Response handler(Request request){
    return Response.ok('API de Terrarios funcionando...');
  }

  //listen
  final servidor = await shelf_io.serve(
    handler,
    InternetAddress.anyIPv4,
    config.serverPort
  );

  stdout.writeln("Servidor ouvindo em http://localhost:${servidor.port}");
  stdout.writeln(config);
  
}