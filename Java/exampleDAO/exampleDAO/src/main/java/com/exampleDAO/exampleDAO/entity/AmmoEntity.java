package com.exampleDAO.exampleDAO.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AmmoEntity {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String caliberAmmo;
	private double price;
	private int stockAmount;

	public AmmoEntity(int id, String caliberAmmo, double price, int stockAmount) {
		this.id = id;
		this.caliberAmmo = caliberAmmo;
		this.stockAmount = stockAmount;
		this.price = price;
	}

	public AmmoEntity() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCaliberAmmo() {
		return caliberAmmo;
	}

	public void setCaliberAmmo(String caliberAmmo) {
		this.caliberAmmo = caliberAmmo;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getStockAmount() {
		return stockAmount;
	}

	public void setStockAmount(int stockAmount) {
		this.stockAmount = stockAmount;
	}

	@Override
	public String toString() {
		return "Ammo{" +
				"id=" + id +
				", caliberAmmo=" + caliberAmmo +
				", price=" + price +
				", stockAmount=" + stockAmount +
				'}';
	}
}
