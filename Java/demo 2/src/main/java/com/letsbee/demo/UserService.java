package com.letsbee.demo;

import org.springframework.stereotype.Service;
import java.util.ArrayList;


import java.util.Arrays;
import java.util.List;

@Service
public class UserService {

	// mémoire

    private List<User> users = new ArrayList<>();
	public User getUser(int id) {
		return users.stream().filter(user -> user.id == id).findFirst().orElse(null);
	}

	public List<User> getUsers() {
        return users;
	}

	public void addUser(User user) {
		users.add(user);
	}
}
