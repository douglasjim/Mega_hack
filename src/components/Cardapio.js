import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import img from "./imagens/whats.png"

class Cardapio extends Component{
    render(){
        return(
            <div className="container">
                <div class="row ">
                    
			        <a href="https://wa.me/5511973998515?text=Olá,%20Quero%20obter%20mais%20informacoes%20dos%20lanches"> Para mais informacoes chama no whats <img class=" " style={{marginLeft:"10px"}} src={img}></img></a>
                    
		        </div>
            </div>
        );
    }
}

export default Cardapio;