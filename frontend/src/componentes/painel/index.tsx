import { Component } from "react";
import CarregadorClientes from "../../carregadores/carregadorClientes";
import RemovedorCliente from "../../removedores/removedorCliente";
import Barra from "../barra";
import Clientes from "../clientes";
import FormularioCliente from "../formulario";
import Menu from "../menu";

type props = {
    textoApp: string
}
type state = {
    clientes: [],
    botao: string
}
class Painel extends Component<props, state> {
    constructor(props) {
        super(props)
        this.state = {
            clientes: [],
            botao: 'clientes'
        }
        this.excluirCliente = this.excluirCliente.bind(this)
        this.carregarClientes = this.carregarClientes.bind(this)
        this.selecionarBotao = this.selecionarBotao.bind(this)
    }

    public carregarClientes() {
        let carregadorClientes = new CarregadorClientes()
        const clientesJson = carregadorClientes.carregar()
        clientesJson.then(clientes => {
            this.setState({
                clientes
            })
        })
    }

    public excluirCliente(idCliente: string) {
        let removedor = new RemovedorCliente()
        removedor.remover({ id: idCliente })
        this.carregarClientes()
        this.carregarClientes()
    }

    public selecionarBotao(clique: string) {
        this.setState({
            botao: clique
        })
    }

    componentDidMount() {
        this.carregarClientes()
    }

    render() {
        let botao = this.state.botao
        if (botao === 'clientes') {
            return (
                <>
                    <Barra textoApp={this.props.textoApp} />
                    <Clientes clientes={this.state.clientes} exclusao={this.excluirCliente} />
                    <Menu selecionarBotao={this.selecionarBotao} />
                </>
            )
        } else {
            return (
                <>
                    <Barra textoApp={this.props.textoApp} />
                    <FormularioCliente />
                    <Menu selecionarBotao={this.selecionarBotao} />
                </>
            )
        }

    }

}
export default Painel