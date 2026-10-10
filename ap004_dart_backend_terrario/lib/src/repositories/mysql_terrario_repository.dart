import 'package:mysql_dart/mysql_dart.dart';
import 'package:ap004_dart_backend_terrario/src/repositories/terrario_repository.dart';
import '../models/terrario.dart';

class MysqlTerrarioRepository implements TerrarioRepository{
  final MySQLConnectionPool _pool;

  MysqlTerrarioRepository(this._pool);

  /// Colunas listadas explicitamente em vez de SELECT *: assim a ordem e o
  /// conjunto de campos não mudam quando alguém alterar a tabela.
  static const String _colunas = 'id, apelido, bioma, umidade_alvo, volume_litros, data_montagem, criado_em, atualizado_em';

  /// Converte uma linha do resultado em uma entidade.
  ///
  /// O driver devolve colunas DECIMAL como texto justamente para preservar
  /// a precisão, então a conversão para double é feita aqui, no único ponto
  /// do sistema que conhece o formato do banco.
  Terrario _mapear(ResultSetRow linha){
    // assoc() devolve Map<String, dynamic>. Como o analysis_options.yaml
    // ativa strict-casts, o Dart recusa converter dynamic em String sem
    // que a intenção esteja escrita: o cast declara que toda coluna deste
    // SELECT chega como texto.
    final dados = linha.assoc().cast<String,String?>();
    return Terrario(
      id: int.parse(dados['id']!),
      apelido: dados['apelido']!,
      bioma: Bioma.porNome(dados['bioma'])!,
      umidadeAlvo: int.parse(dados['umidade_alvo']!),
      volumeLitros: double.parse(dados['volume_litros']!),
      dataMontagem: DateTime.parse(dados['data_montagem']!),
      criadoEm: DateTime.tryParse(dados['criado_em'] ?? ''),
      atualizadoEm: DateTime.tryParse(dados['atualizado_em'] ?? ''),
    );
  }

}