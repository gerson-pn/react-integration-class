/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

class FormularioCliente extends Component {
    
    render() {
        return (
            <>
                <div className="col s12 m7">
                    <div className="card horizontal">
                        <div className="card-stacked">
                            <form className="col s12">
                                <div className="card-content">
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
                                </div>
                                <div className="card-action">
                                    <button className="btn waves-effect waves-light teal accent-3" type="submit" name="action">Cadastrar
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default FormularioCliente