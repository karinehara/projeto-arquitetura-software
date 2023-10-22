import AbstractReportFormater from "./AbstractReportFormater.js";

/**
 * Classe FormaterJSON que extende AbstractReportFormater.
 * Esta classe é responsável por formatar relatórios em formato JSON.
 */
export default class FormaterJSON extends AbstractReportFormater {
  constructor() {
    // Chama o construtor da classe pai.
    super();
  }

  /**
   * Método para gerar um relatório no formato JSON a partir de uma lista de cidades.
   * @param {Array} cities - Um array de objetos de cidade a ser convertido em JSON.
   * @returns {string} - O relatório no formato JSON.
   */
  outputReport(cities) {
    // Converte a lista de cidades em uma string JSON.
    return JSON.stringify(cities);
  }
}
