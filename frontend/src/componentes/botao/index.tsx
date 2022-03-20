/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

type props = {
    nome: string,
    icon: string
}

class Botao extends Component<props> {
    render() {
        return (
            <li>
                <a href="" className="btn-floating teal accent-3">
                    <i className="material-icons">{this.props.icon}</i>
                </a>
            </li>
        )
    }
}
export default Botao