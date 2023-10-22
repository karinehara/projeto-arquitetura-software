import AbstractReportFormater from "./AbstractReportFormater.js";

/**
 * Classe FormaterXML que extende AbstractReportFormater.
 * Esta classe é responsável por formatar relatórios em formato XML.
 */
export default class FormaterXML extends AbstractReportFormater {
  constructor() {
    // Chama o construtor da classe pai.
    super();
  }

  /**
   * Método para gerar um relatório no formato XML a partir de uma lista de cidades.
   * @param {Array} cities - Um array de objetos de cidade com propriedades 'ID', 'Nome' e 'Estado'.
   * @returns {string} - O relatório no formato XML.
   */
  outputReport(cities) {
    // Cria a tag de abertura para o documento XML.
    const header = "<cities>\n";

    // Mapeia as cidades para elementos XML individuais
    const rows = cities.map(
      (city) =>
        `  <city>\n    <id>${city.ID}</id>\n    <name>${city.Nome}</name>\n    <state>${city.Estado}</state>\n  </city>\n`
    );

    // Cria a tag de fechamento para o documento XML.
    const footer = "</cities>";

    // Combina a tag de abertura, os elementos XML e a tag de fechamento em um único documento XML.
    return header + rows.join("") + footer;
  }
}
