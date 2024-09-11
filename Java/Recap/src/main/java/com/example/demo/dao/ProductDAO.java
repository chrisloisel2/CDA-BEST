
import com.example.demo.models.Product;
import java.util.List;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import org.springframework.stereotype.Repository;
import javax.persistence.PersistenceContext;

package com.example.demo.DAO;


@Repository
@Transactional
public class ProductDAO {

	@PersistenceContext
	private EntityManager entityManager;

	public void saveProduct(Product product) {
		return entityManager.persist(product);
	}

	public void updateProduct(Product product) {
		return entityManager.merge(product);
	}

	public void deleteProduct(int productId) {
		return entityManager.remove(getProductById(productId));
	}

	public Product getProductById(int productId) {
		return entityManager.find(Product.class, productId);
	}

	public List<Product> getAllProducts() {
		return entityManager.createQuery("SELECT p FROM Product p").getResultList();
	}
}
