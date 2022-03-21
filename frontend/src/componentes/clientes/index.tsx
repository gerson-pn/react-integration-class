/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

type props = {
    clientes: [],
    exclusao: Function
}
class Clientes extends Component<props> {
    constructor(props){
        super(props)
        this.excluir = this.excluir.bind(this)
    }
    public excluir(id: string, e: any) {
        e.preventDefault()
        this.props.exclusao(id)
    }
    render() {
        let quantidadeClientes = this.props.clientes.length
        if (quantidadeClientes >= 0) {
            let lista = this.props.clientes.map(cliente =>
                <li className="collection-item avatar" key={cliente['id']}>
                    <i className="material-icons circle">person</i>
                    <span className="title">{cliente['nome']}</span>
                    <p>{cliente['nomeSocial']}</p>
                    <a href="" target={"_self"} onClick={(e) => this.excluir(cliente['id'],e)} className="secondary-content">
                        <i className="material-icons">block</i>
                    </a>
                </li>
            )
            return (
                <div>
                    <ul className="collection with-header">
                        <li className="collection-header"><h4>Clientes</h4></li>
                        {lista}
                    </ul>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}
export default Clientes