import React from "react";
import MainMenu from "./Menu/MainMenu";
import Header from "./Header/Header";


const MENU_ITENS = [
    {'home': 'Home'},
    {'about': 'Sobre'},
    {'anime': 'Temporada atual'},
];
    
class MainPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          page: 'home'
        };
        this.handlePageChange = this.handlePageChange.bind(this);

    }


    handlePageChange(newPage) {
        if(!(newPage === this.state.page)) {
            this.setState({page: newPage});
        }
        console.log(this.state.page);
    }

    render() {
        return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="mainPanel">
                <h1>Olá mundo! Você está na página {this.state.page}</h1>
                <MainMenu className="menu" menuItens={MENU_ITENS} page={this.state.page} changePage={this.handlePageChange}/>
            </div>
        </div>
        ); 
        
    }

}

export default MainPanel;