import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';

class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {products: [], prevAd: -1, sort: 'size', sortBySize: true, sortByPrice: false, sortById: false}

        this.getProducts = this.getProducts.bind(this)
        this.sortProducts = this.sortProducts.bind(this)
    }

    componentDidMount() {
        this.getProducts('size');
    }

    componentWillUpdate() {

    }

    sortProducts(sortBy) {

        // Updates button UI
        if(sortBy === 'size') {
            this.setState({sortBySize: true, sortByPrice: false, sortById: false})
        }
        else if(sortBy === 'price') {
            this.setState({sortBySize: false, sortByPrice: true, sortById: false})
        }
        else if(sortBy === 'id') {
            this.setState({sortBySize: false, sortByPrice: false, sortById: true})
        }

        this.getProducts(sortBy);
    }
    
    getProducts(sort) {
        fetch(`http://localhost:8000/products?_sort=${sort}`).then(res => res.json()).then((result) => {
            console.log(sort)
            let currAd;
            let productsList = [];

            for(let i=0; i < result.length; i++) {
              
                if(i != 0 && i % 20 == 0) {
                    
                    do {
                        currAd = Math.floor(Math.random()*1000)
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
            <div>
                <div className='sortButtons'>
                    <p>Sort by:</p>
                    <button className={this.state.sortBySize ? 'activeSortButton' : 'inactiveSortButton'} onClick={() => {this.sortProducts('size')}}>Size</button>
                    <button className={this.state.sortByPrice ? 'activeSortButton' : 'inactiveSortButton'} onClick={() => {this.sortProducts('price')}}>Price</button>
                    <button className={this.state.sortById ? 'activeSortButton' : 'inactiveSortButton'} onClick={() => {this.sortProducts('id')}}>ID</button>
                </div>
                <div id='products'>
                    <div id='productGrid'>
                        {this.state.products}
                    </div>
                </div>
            </div>
        );
    }

}

export default Products;