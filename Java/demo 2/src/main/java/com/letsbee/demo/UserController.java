package com.letsbee.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api") // Définition de la route
public class UserController {

	@Autowired // permet l'injection de dépendance
	private  UserService userService; // <- utilisation de l'interface UserService

    @GetMapping("/users")
    public List<User> getUsers() {
        // Appeller une méthode du service pour repondre à la requête
		return userService.getUsers();
    }

	@GetMapping("/user/{id}")
	public User getUser(@PathVariable int id) {
		return userService.getUser(id);
	}

	// @RequestBody permet de récupérer le body de la requête
	// @PathVariable permet de récupérer un paramètre de l'url
	// @RequestParam permet de récupérer un paramètre de la requête
	@PostMapping("/user")
	public void addUser(@RequestBody User user) {
		user.id = userService.getUsers().size() + 1;
		userService.addUser(user);
	}
}
