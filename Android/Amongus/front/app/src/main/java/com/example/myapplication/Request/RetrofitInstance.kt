package com.example.myapplication.Request

import com.example.myapplication.Service.ApiService
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class RetrofitInstance {
    val apiService: ApiService by lazy {
        Retrofit.Builder()
            .baseUrl("http://82.165.127.44/") // Assurez-vous que cette URL est accessible depuis votre émulateur ou appareil.
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(ApiService::class.java)
    }
}