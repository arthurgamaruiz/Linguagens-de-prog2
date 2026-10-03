import 'package:flutter/material.dart';

class App extends StatelessWidget {
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
            print('Estou no arquivo app.dart');
            }
        ),  //botão flutuante
      )
    ); 
  }
}