package com.example.myapplication.Service

import com.example.myapplication.Model.User
import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.POST

interface ApiService {

    @GET("users/connected")
    suspend fun getUsers(): Response<List<User>>

    @POST("users/login")
    suspend fun login(user: User): Response<User>

    @POST("users/register")
    suspend fun register(user: User): Response<User>
}