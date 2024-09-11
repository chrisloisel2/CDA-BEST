package com.example.demo;


public class Product {
	private int id;
	private String name;
	private double price;
	private int stockAmount;

	public Product(int id, String name, double price, int stockAmount) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.stockAmount = stockAmount;
	}

	public Product() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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
		return "Product{" +
				"id=" + id +
				", name='" + name + '\'' +
				", price=" + price +
				", stockAmount=" + stockAmount +
				'}';
	}
}
