import React, { useState } from 'react';
import productService from './apiService';

const ProductCard = ({ product }) => {
  const [modifie, setModifie] = useState(false);
  const [newproduct, setnewProduct] = useState(product);

  const handleChange = (e) => {
	setnewProduct({ ...newproduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
		e.preventDefault();
		productService.updateProduct(newproduct._id, newproduct).then((data) => {
			console.log(data);
		}
		);
	};

  const setSupprimer = () => {
	  productService.deleteProduct(newproduct._id).then((data) => {
		console.log(data);
	  });
	};

  if (!modifie) {
    return (
      <div style={cardStyle}>
        <img src={newproduct.image} alt={newproduct.name} style={{ width: '100px' }} />
        <h3>{newproduct.name}</h3>
        <p><strong>Prix:</strong> ${newproduct.price}</p>
        <p><strong>Description:</strong> {newproduct.description}</p>
        <p><strong>Catégorie:</strong> {newproduct.category}</p>
        <p><strong>Quantité:</strong> {newproduct.quantity}</p>
        <p><strong>Créé le:</strong> {new Date(newproduct.createdAt).toLocaleDateString()}</p>
        <p><strong>Mis à jour le:</strong> {new Date(newproduct.updatedAt).toLocaleDateString()}</p>
		<button onClick={() => setModifie(true)}>Modifier</button>
		<button onClick={()=> setSupprimer()} >Supprimer</button>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit} className='formulaire'>
        <input type="text" name="name" placeholder="Nom du produit" value={newproduct.name} onChange={handleChange} />
        <input type="number" name="price" placeholder="Prix" value={newproduct.price} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={newproduct.description} onChange={handleChange} />
        <input type="text" name="category" placeholder="Catégorie" value={newproduct.category} onChange={handleChange} />
        <input type="number" name="quantity" placeholder="Quantité" value={newproduct.quantity} onChange={handleChange} />
        <input type="text" name="image" placeholder="URL de l'image" value={newproduct.image} onChange={handleChange} />
        <button type="submit">Soumettre</button>
		<button onClick={() => setModifie(false)}>Modifier</button>
      </form>
    );
  }
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  marginBottom: '10px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

export default ProductCard;
