import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

class Header extends React.Component {

    render() {
        return (
            <div>
                <Logo />
                <SearchBar />
                <h1>Teste</h1>
            </div>
        );
    }
}

export default Header;