import Products from './Products';

function App() {

  return (
    <div className='App'>
      <header>
          <h1>Old St eCommerce Products</h1>

          <div className='headerAd'>
            <p>But first, a word from our sponsors:</p>
            <img
              className='ad'
              src={`http://localhost:8000/ads/?r=${Math.floor(Math.random()*1000)}`}
              alt='ad'/>
          </div>
      </header>

      <Products />

      <p className='endMessage'>~ end of catalogue ~</p>
    </div>
  );
  
}

export default App;
