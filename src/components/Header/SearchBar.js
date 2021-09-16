import React from "react";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search : "sssss"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            search: event.target.value});
    }

    handleSubmit(event) {
        alert('teste ' + this.state.search);
        event.preventDefault();
    }

    render() {

        return (
            <div>
                <h1>{this.state.search}</h1>
                <form onSubmit={this.handleSubmit} method="GET">
                    <input id="teste" name="testando" type="text" value={this.state.search} onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default SearchBar;