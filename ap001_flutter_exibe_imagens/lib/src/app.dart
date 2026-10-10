import 'package:flutter/material.dart';

class AppState extends State<App> {
  int numeroImagens = 0;
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
            // numeroImagens++;
            setState(() => numeroImagens++);
            print('Estou no arquivo app.dart');
          }
        ),  //botão flutuante
        body: Center(child:Text('$numeroImagens')),
      )
    ); 
  }
}

class App extends StatefulWidget{
  State<App> createState(){
    return AppState();
  }
}