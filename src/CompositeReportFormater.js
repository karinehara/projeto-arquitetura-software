import AbstractReportFormater from "./AbstractReportFormater.js";

/**
 * Classe CompositeReportFormater que extende AbstractReportFormater.
 * Esta classe permite compor múltiplos formatadores de relatórios.
 */
export default class CompositeReportFormater extends AbstractReportFormater {
  constructor() {
    // Chama o construtor da classe pai.
    super();

    // Inicializa uma lista de formatadores de relatórios.
    this.reportFormaterList = [];
  }

  /**
   * Método para gerar um relatório composto usando os formatadores de relatórios na lista.
   * @param {Array} cities - Um array de cidades ou dados de cidades.
   * @returns {string} - O relatório composto gerado pelos formatadores na lista.
   */
  outputReport(cities) {
    let output = "";
    // Itera sobre a lista de formatadores de relatórios e gera um relatório composto.
    this.reportFormaterList.forEach((reportFormater) => {
      output += reportFormater.outputReport(cities);
    });
    return output;
  }

  /**
   * Adiciona um formatador de relatórios à lista de formatadores.
   * @param {AbstractReportFormater} reportFormater - O formatador de relatórios a ser adicionado.
   */
  addReportFormater(reportFormater) {
    this.reportFormaterList.push(reportFormater);
  }

  /**
   * Remove um formatador de relatórios da lista de formatadores.
   * @param {AbstractReportFormater} reportFormater - O formatador de relatórios a ser removido.
   */
  removeReportFormater(reportFormater) {
    // Filtra a lista para remover o formatador especificado.
    this.reportFormaterList = this.reportFormaterList.filter((item) => {
      return item !== reportFormater;
    });
  }
}
