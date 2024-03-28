package com.example.users


data class User(
    val _id: String,
    val name: String,
    val password: String,
    val connected: Boolean,
    val role: String?,
    val votes: List<String>,
    val isAlive: Boolean
)
