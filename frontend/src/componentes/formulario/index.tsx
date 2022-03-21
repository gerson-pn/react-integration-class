import { Component } from "react";

class FormularioCliente extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="nome" type="text" className="validate active" />
                                <label htmlFor="nome">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="nomeSocial" type="text" className="validate" />
                                <label htmlFor="nomeSocial">Nome social</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className="btn waves-effect waves-light teal accent-3" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default FormularioCliente