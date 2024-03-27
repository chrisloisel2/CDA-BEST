package com.example.users

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            UserListScreen()
        }
    }
}

@Composable
fun UserListScreen(apiService: ApiService = RetrofitInstance.api) {
    var users by remember { mutableStateOf<List<User>?>(null) }

    // Utilisation de LaunchedEffect pour déclencher le chargement des données au lancement du composant
    LaunchedEffect(key1 = true) {
        CoroutineScope(Dispatchers.IO).launch {
            val response = apiService.getUsers()
            if (response.isSuccessful) {
                users = response.body()
            }
        }
    }

    Column(modifier = Modifier.padding(16.dp)) {
        if (users == null) {
            Text("Chargement des utilisateurs...")
        } else {
            LazyColumn {
                items(users!!) { user ->
                    UserItem(user)
                }
            }
        }
    }
}

@Composable
fun UserItem(user: User) {
    Column(modifier = Modifier
        .fillMaxWidth()
        .padding(8.dp)) {
        Text(text = "Name: ${user.name}", style = MaterialTheme.typography.headlineLarge)
        Text(text = "Email: ${user.email}", style = MaterialTheme.typography.headlineMedium)
        Text(text = "Role: ${user.role}", style = MaterialTheme.typography.headlineMedium)
    }
}
