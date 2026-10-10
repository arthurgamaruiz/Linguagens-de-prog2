import 'package:mysql_dart/mysql_client.dart';
import 'app_config.dart';

//cria pool de conexões
//criado uma única vez, no boot e compartilhado por todas as requisiçõe
//Ele não abre conexões imediatamente
MySQLConnectionPool criarPool(AppConfig config){
  return MySQLConnectionPool(
    host: config.dbHost, 
    port: config.dbPort, 
    userName: config.dbUser, 
    password: config.dbPassword, 
    databaseName: config.dbName,
    maxConnections: config.dbPoolSize,
    secure: false,
    allowPublicKeyRetrieval: true
    );
}

/// Aguarda o banco ficar disponível.
///
/// Em um ambiente com Docker Compose o contêiner da API pode iniciar antes
/// de o MySQL terminar de subir. Em vez de falhar, a aplicação tenta se
/// conectar algumas vezes com intervalo entre as tentativas.
Future<void> aguardarBanco(
  MySQLConnectionPool pool, {
    int tentativas = 30,
    Duration intervalo = const Duration(seconds: 2)
    }) async {
      for(var tentativa = 1; tentativa<=tentativa; tentativa++){
        try {
          await pool.execute("SELECT 1");
          return;   //encerra função e laço for
        } catch (_) {
          if(tentativa == tentativas) rethrow;  //relança a exceção capturada pelo catch. Encerra função
          await Future<void>.delayed(intervalo);
        }
      }
}