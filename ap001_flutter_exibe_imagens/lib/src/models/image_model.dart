class ImageModel {
  //late --> diz que a variável não foi inicalizada
  //e que não faz sentido usá-la sem inicializar
  //somente será usada após inicializada
  late String url;
  late String alt;

  //construtor
  ImageModel(this.url, this.alt);
  
  //construtor de ImageModel a partir de um JSON
  ImageModel.fromJSON(Map <String, dynamic> decodedJSON){
    //o resultado tem uma coleção de fotos
    //vamos pegar sempre a primeira
    //por isso, posição zero
    //dela, pegamos o tamanho médio (propriedade do objeto src)
    //para saber a estrutura do JSON, deve-se 
    //consultar a resposta da API da pexels
    url = decodedJSON['photos'][0]['src']['medium'];
    alt = decodedJSON['photos'][0]['alt'];
  }
}