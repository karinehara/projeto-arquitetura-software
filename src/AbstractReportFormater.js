/**
 * Classe abstrata AbstractReportFormater.
 * Esta classe serve como um esqueleto para formatadores de relatórios e define um método abstrato 'outputReport'.
 */
export default class AbstractReportFormater {
  /**
   * Construtor da classe AbstractReportFormater.
   * Este construtor impede a criação de instâncias diretamente.
   * Classes derivadas devem implementar o método 'outputReport'.
   * @throws {Error} - Lança um erro se alguém tentar instanciar esta classe diretamente.
   */
  constructor() {
    // Verifica se alguém está tentando instanciar a classe diretamente.
    if (this.constructor === AbstractReportFormater) {
      throw new Error("Cannot instantiate abstract class");
    }
  }

  /**
   * Método abstrato para gerar um relatório de cidades.
   * Este método deve ser implementado nas classes derivadas.
   * @param {Array} cities - Um array de cidades ou dados de cidades.
   * @throws {Error} - Deve lançar um erro informando que o método deve ser implementado.
   */
  outputReport(cities) {
    // Lança um erro informando que o método 'outputReport()' deve ser implementado.
    throw new Error("Method 'outputReport()' must be implemented.");
  }
}
