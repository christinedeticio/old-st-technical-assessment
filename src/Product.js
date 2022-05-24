import React from 'react';
import ReactDOM from 'react-dom';

class Product extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.face}
                </div>
                <div>
                    {this.props.size}
                    {this.props.date}
                </div>
                <div>
                    {this.props.price}
                </div>
            </div>
        );
    }

}

export default Product;