import 'package:ap001_flutter_exibe_imagens/src/models/image_model.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class AppState extends State<App> {
  int numeroImagens = 0;

  //requisição http
  void obterImagem(){
    //construção do objeto url
    //parâmetros: host pexels, recurso, mapa com parâmetros query (page, per_page e people)
    var url = Uri.https(
      'api.pexels.com',
      '/v1/search',
      {'query': 'people', 'per_page': '1', 'page': '1'}
    );  // apenas uma imagem por página
    //requisição: operação assíncrona
    //parâmetros: nome do método e url
    var req = http.Request('get',url);

    //adiciona chave de API pexels
    req.headers.addAll({'Authorization': '20FuZCakXzRS4AtCezvajraxB0F0dWzcjFN1OSJSaOUPseS3EzPrdtcf'});
    
    //envia a requisição
    //send retorna uma Future
    //resultado é um 'StreamedRespondeV2'
    //devemos tratá-la
    req.send().then((result){
      if(result.statusCode == 200){
        //a partir do fluxo de bytes recebido
        //vamos gerar o json a partir disso por meio de fromStream()
        http.Response.fromStream(result).then((response){
          print(response.body);
        });
      }
      else{
        print("Falhou...");
      }
    });
  }
  @override
  Widget build(BuildContext context){  //passagem via 'props' do react
     //objeto imutável
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Minhas imagens')
        ),
        floatingActionButton: FloatingActionButton(
          child: Icon(Icons.add),
          onPressed: (){
            obterImagem();
          }
        ),  //botão flutuante
        body: Center(child:Text('$numeroImagens')),
      )
    ); 
  }
}

class App extends StatefulWidget{
  @override
  State<App> createState(){
    return AppState();
  }
}