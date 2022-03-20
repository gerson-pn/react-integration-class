import { URI } from "../enuns/uri";
import Removedor from "./removedor";

export default class RemovedorCliente implements Removedor {
    public remover(objeto: Object): void {
        let json = { id: objeto['id'] }
        fetch(URI.DELETAR_CLIENTE, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        })
    }
}