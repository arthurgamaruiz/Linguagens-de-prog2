// import 'dart:io';

// void main() {
//     //sound null safety --> proteção contra null em tempo de compilação
//     int idade = int.parse(stdin.readLineSync()!); // operador ! desativa a proteção contra manipulação de null

//     try{
//         String a = null;
//         a.indexOf("abc");
//     }
//     catch(NullPointerException e){

//     }
// }
// void main(){
//     // String a = "abc";       //não permite manipulação de null
//     // a = null;
//     String? b = "abc";
//     b = null;
//     stdout.writeln("Digite seu nome");
//     var nome = stdin.readLineSync();
//     stdout.write("Olá $nome\n");
//     String? idadeTextual = stdin.readLineSync();
//     while(idadeTextual==null)
//         idadeTextual = stdin.readLineSync();
//     int idade = int.parse(idadeTextual);
//     if (idadeTextual != null)
//         int idade = int.parse(idadeTextual);
//     //System.in e System.out
//     //stdin e stdout
// }