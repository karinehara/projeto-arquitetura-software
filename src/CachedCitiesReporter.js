import ICitiesReporter from "./ICitiesReporter.js";

/**
 * Classe CachedCitiesReporter que extende ICitiesReporter.
 * Esta classe atua como um wrapper para o CitiesReporter, adicionando funcionalidade de cache.
 */
export default class CachedCitiesReporter extends ICitiesReporter {
  #cache = {};

  /**
   * Construtor da classe CachedCitiesReporter.
   * @param {ICitiesReporter} citiesReporter - A instância do CitiesReporter que será usada.
   */
  constructor(citiesReporter) {
    // Chama o construtor da classe pai.
    super();
    // Armazena a instância do CitiesReporter.
    this._citiesReporter = citiesReporter;
  }

  /**
   * Adiciona ou atualiza a instância do CitiesReporter.
   * @param {ICitiesReporter} citiesReporter - A instância do CitiesReporter a ser adicionada ou atualizada.
   */
  addCitiesReporter(citiesReporter) {
    // Atualiza a instância do CitiesReporter.
    this._citiesReporter = citiesReporter;
  }

  /**
   * Realiza a leitura de um arquivo com funcionalidade de cache.
   * @param {string} filename - O nome do arquivo a ser lido.
   * @returns {string} - O relatório formatado.
   */
  _read(filename) {
    // Verifica se o arquivo já está em cache.
    if (!this.#cache[filename]) {
      console.log("Não tem cache");

      // Se o arquivo não estiver em cache, lê o arquivo usando a instância do CitiesReporter e o armazena em cache.
      this.#cache[filename] = this._citiesReporter._read(filename);
    }

    // Retorna o relatório usando o arquivo em cache.
    return this._citiesReporter.report(this.#cache[filename]);
  }
}
