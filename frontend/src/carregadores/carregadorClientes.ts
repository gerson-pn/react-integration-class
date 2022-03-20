import { URI } from "../enuns/uri";
import Carregador from "./carregador";

export default class CarregadorClientes implements Carregador {
    public carregar() {
        let requisicao = fetch(URI.CLIENTES);
        let json = requisicao.then(resposta => resposta.json())
        return json
    }
}