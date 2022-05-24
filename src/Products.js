import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';

class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {products: [], prevAd: -1}
    }

    componentDidMount() {
        this.getProducts();
    }
    
    getProducts() {
        fetch('http://localhost:8000/products').then(res => res.json()).then((result) => {
            
            let currAd;
            let productsList = [];

            for(let i=0; i < result.length; i++) {
              
                if(i != 0 && i % 20 == 0) {
                    
                    do {
                        currAd = Math.floor(Math.random()*1000)
                        console.log(currAd)
                        console.log(this.state.prevAd)
                    }while(currAd === this.state.prevAd)
                        
                    this.setState({prevAd: currAd});

                    productsList.push(<img
                        className='ad productBox'
                        src={`http://localhost:8000/ads/?r=${currAd}`}
                        alt='ad'/>)
                }
              
                let product = result[i];
                productsList.push((<Product className='product' id={product.id} face={product.face} size={product.size} date={product.date} price={product.price}/>))
            }
            
            this.setState({products: productsList})
            
          }).catch((error) => {
            console.log(error)
          })
    }
    
    render() {
        return (
            <div id='products'>
                <div id='productGrid'>
                    {this.state.products}
                </div>
            </div>
        );
    }

}

export default Products;