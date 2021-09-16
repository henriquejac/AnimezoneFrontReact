import React from 'react';


class MenuItem extends React.Component {

   

    render() {
        return <button onClick={() => this.props.onAction(this.props.pageData)}>{this.props.itemData}</button>;
    }
}
export default MenuItem;