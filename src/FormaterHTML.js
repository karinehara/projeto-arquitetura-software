import AbstractReportFormater from "./AbstractReportFormater.js";

/**
 * Classe FormaterHTML que extende AbstractReportFormater.
 * Esta classe é responsável por formatar relatórios em formato HTML.
 */
export default class FormaterHTML extends AbstractReportFormater {
  constructor() {
    // Chama o construtor da classe pai.
    super();
  }

  /**
   * Método para gerar um relatório no formato HTML a partir de uma lista de cidades.
   * @param {Array} cities - Um array de objetos de cidade com propriedades 'Nome'.
   * @returns {string} - O relatório no formato HTML.
   */
  outputReport(cities) {
    // Cria um documento HTML básico com um título e uma lista de cidades.
    let html = `
  <!DOCTYPE HTML>
  <html>
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <title>Relatório de Nomes de Cidades</title>
    </head>
    <body>
      <h1>Relatório de Nomes de Cidades</h1>
      <ul>
  `;

    // Itera sobre a lista de cidades e cria um item de lista HTML para cada cidade.
    for (let i = 0; i < cities.length; i++) {
      html += `     <li>${cities[i]["Nome"]}</li>\n`;
    }
    // Completa o documento HTML.
    html += `
      </ul>
    </body>
  </html>`;

    // Retorna o relatório formatado em formato HTML.
    return html;
  }
}
