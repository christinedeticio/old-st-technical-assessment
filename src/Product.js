import React from 'react';
import ReactDOM from 'react-dom';

class Product extends React.Component {
    constructor(props) {
        super(props)
    }

    formatDate() {
        
        let currDate = new Date()
        let productDate = new Date(this.props.date);

        let dayDiff = Math.floor((currDate.getTime() - productDate.getTime()) / (1000 * 60 * 60 * 24));

        if(dayDiff < 7) {
            return dayDiff + (dayDiff === 1 ? " day ago" : " days ago");
        }
        else {
            let dateString = productDate.toString().split(" ");
            return(dateString[1] + " " + dateString[2] + ", " + dateString[3])
        }
    }
    
    render() {
        return (
            <div>
                <div>
                    {this.props.face}
                </div>
                <div>
                    {this.formatDate()}
                </div>
                <div>
                    {this.props.size} pixels
                    ${this.props.price / 100}
                </div>
            </div>
        );
    }

}

export default Product;