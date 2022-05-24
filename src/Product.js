import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props)
    }

    formatDate() {
        
        let currDate = new Date()
        let productDate = new Date(this.props.date);

        let dayDiff = Math.floor((currDate.getTime() - productDate.getTime()) / (1000 * 60 * 60 * 24));

        // checks if the difference is less than 1 week
        if(dayDiff < 7) {
            return dayDiff + (dayDiff === 1 ? " day ago" : " days ago");
        }
        else { // formats the date if it has been more than a week
            let dateString = productDate.toString().split(" ");
            return(dateString[1] + " " + dateString[2] + ", " + dateString[3])
        }
    }
    
    render() {

        let productSize = {fontSize: this.props.size};

        return (
            <div className='productBox'>
                <div className='ascii' style={productSize}>
                    {this.props.face}
                </div>
                <div className='size'>
                    {this.props.size}px
                </div>
                <div className='datePriceBox'>
                    <div className='date'>
                        {this.formatDate()}
                    </div>
                    <div className='price'>
                        ${(this.props.price / 100).toFixed(2)}
                    </div>
                </div>
            </div>
        );
    }

}

export default Product;