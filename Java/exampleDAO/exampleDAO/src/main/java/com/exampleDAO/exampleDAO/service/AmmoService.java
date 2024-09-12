package com.exampleDAO.exampleDAO.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exampleDAO.exampleDAO.dao.AmmoDAO;
import com.exampleDAO.exampleDAO.entity.AmmoEntity;


@Service
public class AmmoService {
    @Autowired
	private AmmoDAO ammoDAO;


	public List<AmmoEntity> getAllAmmos() {
		return ammoDAO.getAllAmmos();
	}

	public Optional<AmmoEntity> getAmmoById(int id) {
		return ammoDAO.getAmmoById(id);
	}

	public AmmoEntity createAmmo(AmmoEntity ammo) {
		return ammoDAO.saveAmmo(ammo);
	}

	public AmmoEntity updateAmmo(int id, AmmoEntity updatedAmmo) {
		Optional<AmmoEntity> existingAmmo = ammoDAO.getAmmoById(id);
		if (existingAmmo.isPresent()) {
			AmmoEntity ammo = existingAmmo.get();
			ammo.setCaliberAmmo(updatedAmmo.getCaliberAmmo());
			ammo.setPrice(updatedAmmo.getPrice());
			ammo.setStockAmount(updatedAmmo.getStockAmount());
			// Set other properties as needed
			return ammoDAO.updateAmmo(ammo);
		} else {
			throw new IllegalArgumentException("Ammo not found with id: " + id);
		}
	}

	public void deleteAmmo(int id) {
		ammoDAO.deleteAmmo(id);
	}
}
