package com.exampleDAO.exampleDAO.controller;

import org.springframework.web.bind.annotation.RestController;

import com.exampleDAO.exampleDAO.entity.AmmoEntity;
import com.exampleDAO.exampleDAO.service.AmmoService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/ammos")
public class AmmoController {
    @Autowired
	private AmmoService ammoService;

	@GetMapping
	public List<AmmoEntity> getAllAmmos() {
		return ammoService.getAllAmmos();
	}

	@GetMapping("/{id}")
	public ResponseEntity<AmmoEntity> getAmmoById(@PathVariable int id) {
		Optional<AmmoEntity> ammo = ammoService.getAmmoById(id);
		if (ammo.isPresent()) {
			return ResponseEntity.ok(ammo.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PostMapping
	public ResponseEntity<AmmoEntity> createAmmo(@RequestBody AmmoEntity ammo) {
		return ResponseEntity.ok(ammoService.createAmmo(ammo));
	}

	@PutMapping("/{id}")
	public ResponseEntity<AmmoEntity> updateAmmo(@PathVariable int id, @RequestBody AmmoEntity ammo) {
		return ResponseEntity.ok(ammoService.updateAmmo(id, ammo));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteAmmo(@PathVariable int id) {
		ammoService.deleteAmmo(id);
		return ResponseEntity.noContent().build();
	}
}
