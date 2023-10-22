import fs from "node:fs";
import ICitiesReporter from "./ICitiesReporter.js";

/**
 * Classe CitiesReporter que extende ICitiesReporter.
 * Responsável por relatar informações das cidades.
 */
export default class CitiesReporter extends ICitiesReporter {

  /**
   * Construtor da classe CitiesReporter.
   * @param {object} options - Opções para a classe, incluindo 'formart'.
   */
  constructor({ formart }) {

    // Chama o construtor da classe pai.
    super();
    
    // Inicializa a propriedade _formart com o formato passado nas opções.
    this._formart = formart;
  }

  /**
   * Realiza a leitura de um arquivo JSON.
   * @param {string} filename - O nome do arquivo a ser lido.
   * @returns {string} - O conteúdo do arquivo lido.
   */
  _read(filename) {
    // Realiza a leitura síncrona do arquivo e armazena o conteúdo em this._cities_json.
    this._cities_json = fs.readFileSync(filename);

    return this._cities_json;
  }

  /**
   * Analisa um JSON e armazena as cidades em this._cities.
   * @param {string} cities - O JSON contendo informações das cidades.
   */
  _parseJSON(cities) {
    // Analisa o JSON e armazena as cidades em this._cities.
    this._cities = JSON.parse(cities);
  }

  /**
   * Relata informações sobre as cidades.
   * @param {string} cities - O JSON contendo informações das cidades.
   * @returns {string} - O relatório formatado.
   */
  report(cities) {
    // this._read(filename);

    // Analisa o JSON de cidades.
    this._parseJSON(cities);

    // Gera o relatório usando o formato específico definido em this._formart.
    return this._formart.outputReport(this._cities);
  }
}
