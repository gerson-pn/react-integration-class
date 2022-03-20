export default interface Carregador {
    carregar(): Promise<any>
}