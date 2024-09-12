package com.exampleDAO.exampleDAO.dao;

import java.util.List;

import org.springframework.stereotype.Repository;
import java.util.Optional;

import com.exampleDAO.exampleDAO.entity.AmmoEntity;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Repository
@Transactional
public class AmmoDAO {
    @PersistenceContext
	private EntityManager entityManager;

	public AmmoEntity saveAmmo(AmmoEntity ammo) {
		entityManager.persist(ammo);
		return ammo;
	}

	public AmmoEntity updateAmmo(AmmoEntity ammo) {
		return entityManager.merge(ammo);
	}

	public void deleteAmmo(int ammoId) {
		entityManager.remove(getAmmoById(ammoId));
		return;
	}

	public Optional<AmmoEntity> getAmmoById(int ammoId) {
		return Optional.ofNullable(entityManager.find(AmmoEntity.class, ammoId));
	}

	public List<AmmoEntity> getAllAmmos() {
		return entityManager.createQuery("SELECT a FROM AmmoEntity a").getResultList();
	}
}
