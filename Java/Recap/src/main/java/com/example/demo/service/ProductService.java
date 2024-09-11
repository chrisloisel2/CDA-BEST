import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

package com.example.demo.service;



@Service
public class ProductService {

	@Autowired
	private ProductDAO productDAO;


	public List<Product> getAllProducts() {
		return productDAO.getAllProducts();
	}

	public Optional<Product> getProductById(Long id) {
		return productDAO.getProductById(id);
	}

	public Product createProduct(Product product) {
		return productDAO.saveProduct(product);
	}

	public Product updateProduct(Long id, Product updatedProduct) {
		Optional<Product> existingProduct = productRepository.findById(id);
		if (existingProduct.isPresent()) {
			Product product = existingProduct.get();
			product.setName(updatedProduct.getName());
			product.setPrice(updatedProduct.getPrice());
			// Set other properties as needed
			return productDAO.updatedProduct(product);
		} else {
			throw new IllegalArgumentException("Product not found with id: " + id);
		}
	}

	public void deleteProduct(Long id) {
		productDAO.deleteProduct(id);
	}
}
