import React from 'react';
import MenuItem from './MenuItem';

class MainMenu extends React.Component {

   
   
    render() {
        let itens = this.props.menuItens.map((item) => {
            let page = Object.keys(item);
            let itemTitle = item[page];
            return <MenuItem pageData= {page} itemData={itemTitle} onAction={this.props.changePage}/>;    
        });

        return (
            <div>
                {itens}
                
                {/* <MenuItem pageData='About' itemData='Sobre' onAction={this.props.changePage}/>
                <MenuItem pageData='Home' itemData='Home' onAction={this.props.changePage}/> */}
            </div>
        );
    }
}

export default MainMenu;