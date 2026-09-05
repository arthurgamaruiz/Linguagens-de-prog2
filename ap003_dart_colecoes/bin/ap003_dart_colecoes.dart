import 'package:ap003_dart_colecoes/ap003_dart_colecoes.dart' as ap003_dart_colecoes;
import 'dart:io';

void menu(){
  print("******** MENU ********");
  print("1 - Criar");
  print("2 - Ler");
  print("3 - Atualizar");
  print("4 - Deletar");
  print("5 - Sair");
  print("Escolha uma opção (1-5): ");
}
void main(List<String> arguments){
  //mapas
//   - Contatos possuem um nome e um número de telefone
// - Deve ser possível realizar as quatro operações básicas de um CRUD
// - O armazenamento deve ser feito em um mapa
// - Deve haver um menu: 1-C 2-R 3-U 4-D 5-Sair.
// - Um par chave/valor tem como chave o nome do contato e seu valor associado é o seu
//    número.

  Map<String, String> contatos = {};

  int opcao=0;
  do {
    menu();
    opcao = int.parse(stdin.readLineSync()!);
    switch (opcao) {
      case 1:
        //adicionar
        print("Digite o nome: ");
        String chave = stdin.readLineSync()!.toLowerCase();

        print("Digite o telefone: ");
        String tel = stdin.readLineSync()!;

        contatos[chave] = tel;
        break;
      case 2:
        //listar
        print("******** LISTA DE CONTATOS ********");
        for(final contato in contatos.entries){
          print("Nome: ${contato.key} e Telefone ${contato.value}");
        }
        print("");
        break;

      case 3:
        //atualização
        print("Digite o nome da pessoa para atualizar o telefone: ");
        String nome = stdin.readLineSync()!.toLowerCase();
        print("Digite o novo telefone: ");
        String novo_tel = stdin.readLineSync()!;
        contatos[nome] = novo_tel;
        break;

      case 4:
        //remoção
        print("Digite um nome para remover: ");
        String nome = stdin.readLineSync()!;
        contatos.remove(nome);
        break;

      case 5:
        print("Saindo..");
        break;

      default:
        print("Opção inválida! Digite um valor de 1 a 5");
    }
  } while (opcao != 5);
  // var pessoa = <String, dynamic>{
  //   'nome': 'Ana', 
  //   'idade': 19
  // };
  // //keys 
  // //values
  // //entries
  // for(String key in pessoa.keys){
  //   print(key);
  //   print(pessoa[key]);
  // }
  // for(dynamic value in pessoa.values){
  //   print(value);
  // }

  // for(final entry in pessoa.entries){
  //   print(entry);
  //   print(entry.key);
  //   print(entry.value);
  //   //exibir valor sem escrever value
  //   print(pessoa[entry.key]);
  // }
  //casting 
  // var nome = pessoa['nome'] as String;
  // print(nome.toUpperCase());
  // // print(pessoa['nome']);
  // var a = {
  //   1: 'a',
  //   1: 'b'
  // };
  // print(a);
  // var pessoa = {
  //   'nome': 'Ana',
  //   'idade': 18,
  //   'altura': 1.8
  // };
  // var lembretes = {
  //   1: 'comprar café'
  // };
// - Todos os países em que se fala português e todos os países da Europa. 
//Brasil, Portugal, Alemanha, Espanha 
// - Todos os países em que se fala português e que são europeus.
//Portugal
// - Todos os países em que se fala português e que não são europeus.
//Brasil
// - Todos os países exceto aqueles em que se fala português e que são europeus (simultaneamente).
//Alemanha, Espanha, Brasil
  // var portugues = {'Brasil', 'Portugal'};
  // var europa = {'Alemanha', 'Portugal', 'Espanha'};
  // print(portugues.union(europa).difference(portugues.intersection(europa)));

  //união, intersecção, diferença
  // var A = {1, 2, 3, 4, 5, 6};
  // var B = {1, 3, 7};
  // print(A.union(B));
  // print(B.union(A));
  // print(A.intersection(B));
  // print(B.intersection(A));
  // print(A.difference(B));
  // print(B.difference(A));

  //set: conjunto: sem elementos duplicados e sem ordem
  // final numeros = {1,2};
  // //for each
  // for(final numero in numeros){
  //   print(numero);
  // }
  //{}: set e map
  // var a = <String, int> {};
  // var nomes = {'Ana', 'João'};            //set de String
  // var paises = {'Brasil', 'Brasil'};      
  // print(paises);
  // var a = {};       //por definição é Map <dynamic, dynamic>
  //tuplas
  // /*ou (String, int, bool) tupla = ('Ana', 18, true)*/var tupla = ('Ana', 18, true);         //reconhecida em tempo de compilação
  
  // print(tupla.$1);
  // print(tupla.$2);
  // print(tupla.$3);
  // print(tupla.runtimeType);
  // var l5 = [1, 1.1, true, "A"];       //lista de object 
  // var l6 = [];                        //lista de dynamic
  // Object a = 1;                       //sistema de tipos estático
  // // a.falar()                        //erro em tempo de compilação
  // dynamic b = 1;                      //sistema de tipos dinâmico (em tempo de execução)
  // b.falar();                          //compila e retorna um erro em tempo de execução
  // var l4 = [1,null];    //lista de int opcional
  //type annotation
  // var l3 =  <int> [];
  //sound null safety
  // List<String?>? l2 = ["A"];
  // l2.add(null);
  // l2 = null;
  // String? a = null;
  // l2.add(a);
  // var l1 = [];
  // final letras = ['A', 'B'];    //operador de inferência de tipos 
  // letras[0] = 'C';
  // letras.add('J');
  // print(letras);
  // letras = ['X'];    
  // var letras = ['A', 'B'];
  // print(letras[0]);
  // print(letras[-1]); //erro em tempo de execução
  // print(arguments);
  // ap003_dart_colecoes.testes();
}
