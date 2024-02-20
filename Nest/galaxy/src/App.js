import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import productService from './apiService';
import ProductCard from './Product';

function HomePage({ data }) {
  return (
    <div className="homePage">
      {
        data ?
        data.map((item, index) => {
          return (
            <div key={index} className="productCard">
              <ProductCard product={item}/>
            </div>
          )
        })
        : (
          <p>Loading...</p>
        )
      }
    </div>
  );
}


function FormPage() {
	const [product, setProduct] = useState({
	  id: '0',
	  name: '',
	  price: '',
	  description: '',
	  category: '',
	  quantity: '',
	  image: '',
	  createdAt: new Date(),
	  updatedAt: new Date()
	});

	const handleChange = (e) => {
	  setProduct({ ...product, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
	  e.preventDefault();
	  console.log(product);
	  productService.createProduct(product).then((data) => {
		console.log(data);
	  });
	};

	return (
	  <div>
		<h2>Page de formulaire</h2>
		<form onSubmit={handleSubmit} className='formulaire'>
		  <input type="text" name="name" placeholder="Nom du produit" value={product.name} onChange={handleChange} />
		  <input type="number" name="price" placeholder="Prix" value={product.price} onChange={handleChange} />
		  <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} />
		  <input type="text" name="category" placeholder="Catégorie" value={product.category} onChange={handleChange} />
		  <input type="number" name="quantity" placeholder="Quantité" value={product.quantity} onChange={handleChange} />
		  <input type="text" name="image" placeholder="URL de l'image" value={product.image} onChange={handleChange} />
		  <button type="submit">Soumettre</button>
		</form>
	  </div>
	);
  }

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    productService.getAllProducts()
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Galaxy</h1>
        <div style={navbar}>
          <Link to="/"><button>Home</button></Link>
          <Link to="/form"><button>Form</button></Link>
        </div>
        <div style={containerPage}>

          <Routes>
            <Route path="/" element={<HomePage data={data} />} />
            <Route path="/form" element={<FormPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const containeritem = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexWrap: 'wrap',
	gap: '20px',
	backgroundColor: '#f9f9f9',
	borderRadius: '8px',
	padding: '15px',
	marginBottom: '10px',
	boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
	height: '90vh',
	width: '70vw',
  };


  const containerPage = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexWrap: 'wrap',
	gap: '10px',
	minHeight: '100vh',
	width: '100vw',
  };

  const navbar = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	flexWrap: 'wrap',
	gap: '10px',
	height: '100px',
	width: '100vw',
  };

export default App;
