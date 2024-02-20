import axios from 'axios';

const BASE_URL = 'http://localhost:3050/products';

const productService = {
  createProduct: async (product) => {
    try {
      const response = await axios.post(BASE_URL, product);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création du produit', error);
    }
  },

  getAllProducts: async () => {
    try {
      const response = await axios.get(BASE_URL);
	  console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des produits', error);
    }
  },

  getProductById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération du produit', error);
    }
  },

  updateProduct: async (id, product) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, product);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du produit', error);
    }
  },

  deleteProduct: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la suppression du produit', error);
    }
  }
};

export default productService;
