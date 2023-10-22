import AbstractReportFormater from "./AbstractReportFormater.js";

/**
 * Classe FormaterCSV que extende AbstractReportFormater.
 * Esta classe é responsável por formatar relatórios em formato CSV.
 */
export default class FormaterCSV extends AbstractReportFormater {
  constructor() {
    // Chama o construtor da classe pai.
    super();
  }

  /**
   * Método para gerar um relatório no formato CSV a partir de uma lista de cidades.
   * @param {Array} cities - Um array de objetos de cidade com propriedades 'ID', 'Nome' e 'Estado'.
   * @returns {string} - O relatório no formato CSV.
   */
  outputReport(cities) {
    // Cria um cabeçalho para o CSV.
    const header = "id,name,state\n";
    // Mapeia as cidades para linhas no CSV.
    const rows = cities.map(
      (city) => `${city.ID},${city.Nome},${city.Estado}\n`
    );
    // Combina o cabeçalho e as linhas em uma única string CSV.
    return header + rows.join("");
  }
}
