import React, { Component } from 'react'; 
import SilverWare from '../SilverWare.js/SilverWare'

class DinnerSupplies extends Component{

render() {
    return(
        <div>
            <SilverWare name="Spoons" count={this.props.count} />
            <SilverWare name="Forks" count={this.props.count} />
            <SilverWare name="Knives" count={this.props.count} />
        </div>
        );
    }   
}

export default DinnerSupplies