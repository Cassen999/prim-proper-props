import React, { Component } from 'react'; 

class SilverWare extends Component{
    render() {
        return(
            <div>
                <h2>Dinner Supplies</h2>
                {this.props.name}: {this.props.count * 2}
            </div>
        )
    }
}

export default SilverWare