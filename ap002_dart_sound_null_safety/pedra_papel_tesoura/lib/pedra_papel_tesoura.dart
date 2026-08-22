import 'dart:io';
import 'dart:math';

enum OPCAO {pedra, papel, tesoura, sair}    //objetos do tipo OPCAO
void jogo(){
  int opcaoUsuario;

  int rodadas = 0;                  //contador de rodadas
  int vitoriaUsuario = 0;           //contador de vitórias do cusuário
  int vitoriaComp = 0;              //contador de vitórias do computador 
  int empates = 0;                  //contador de empates 

  do{
    //exibir menu
    //capturar opção do usuário, validando
    //se o usuário digitar 4, sair 
    //senão
    //sortear a escolha do computador
    //mapear opção do usuário de irt para enum
    //mapear a opção do computador de int para enum
    //exibir as opções de cada um 
    //decidir quem venceu ou se houve empate
    //exibir resultado
    //ajustar para que o jogo tenha 5 rodadas e indique o vencedor no final 

    menu();

    //inteiro que indica a opção jogada pelo usuário
    opcaoUsuario = int.parse(stdin.readLineSync()!);

    //opção do usuário
    OPCAO usuario = OPCAO.values[opcaoUsuario-1];
    
    switch(opcaoUsuario){
      case 1: 
        //pedra 
        //sorteia um inteiro aleatório entre 0 e 2
        int computadorInt = Random().nextInt(3);

        //mapeia a opção do computador de int para enum
        OPCAO escolhaComputador = OPCAO.values[computadorInt];
        if(usuario == escolhaComputador){
          print("Empate!");
          print("Você escolheu $usuario e o computador escolheu $escolhaComputador");
          empates++;
        }
        else if(escolhaComputador==OPCAO.papel){
          print("O compuatdor venceu!!");
          print("Você escolheu $usuario e o computador escolheu $escolhaComputador");
          vitoriaComp++;
        }
        else if(escolhaComputador == OPCAO.tesoura){
          print("Você venceu!!");
          print("Você escolheu $usuario e o computador escolheu $escolhaComputador");
          vitoriaUsuario++;
        }
        break;
      case 2:
        //papel
        int computadorInt = Random().nextInt(3);
        OPCAO escolhaComputador = OPCAO.values[computadorInt];
        if(usuario == escolhaComputador){
          print("Empate!");
          print("Você escolheu $usuario e o computador escolheu $escolhaComputador");
          empates++;
        }
        else if(escolhaComputador==OPCAO.papel){
          print("O compuatdor venceu!!");
          print("Você escolheu $usuario e o computador escolheu $escolhaComputador");
          vitoriaComp++;
        }
        else if(escolhaComputador == OPCAO.tesoura){
          print("Você venceu!!");
          print("Você escolheu $usuario e o computador escolheu $escolhaComputador");
          vitoriaUsuario++;
        }
        break;
      case 3: 
        //tesoura
        int computadorInt = Random().nextInt(3);
        OPCAO escolhaComputador = OPCAO.values[computadorInt];
        if(usuario == escolhaComputador){
          print("Empate!");
          print("Você escolheu $usuario e o computador escolheu $escolhaComputador");
          empates++;
        }
        else if(escolhaComputador==OPCAO.papel){
          print("O compuatdor venceu!!");
          print("Você escolheu $usuario e o computador escolheu $escolhaComputador");
          vitoriaComp++;
        }
        else if(escolhaComputador == OPCAO.tesoura){
          print("Você venceu!!");
          print("Você escolheu $usuario e o computador escolheu $escolhaComputador");
          vitoriaUsuario++;
        }
        break;
      case 4:
        print("Saindo...");
        break;
      default:
        //opção inválida
        print("Opção inválida! Digite um valor entre 1 e 4.");
    }
    rodadas++;
  }while(rodadas <= 5);
  
print("Você venceu $vitoriaUsuario jogos");
print("Computador venceu $vitoriaComp jogos");
print("Houve $empates jogos empatados");

}
void menu(){
  print("******** MENU ********");
  print("1 - pedra");
  print("2 - papel");
  print("3 - tesoura");
  print("4 - sair");
  print("Escolha uma opção (1-4): ");
}
