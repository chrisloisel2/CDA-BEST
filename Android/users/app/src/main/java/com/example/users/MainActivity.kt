package com.example.users

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.users.websocket.WebSocketClient
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {
    private val webSocketClient = WebSocketClient("ws://82.165.127.44/")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            UserListScreen()
        }
    }

    @Composable
    fun UserListScreen(apiService: ApiService = RetrofitInstance.api) {
        var users by remember { mutableStateOf<List<User>?>(null) }



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
            Button(onClick = {

                var message = """"
                    {
                        "event": "connectPlayer",
                        "data": { userId: "1"}
                    }
                """.trimIndent()
                this@MainActivity.webSocketClient.send(message)
            }) {
                Text("PLAY", style = MaterialTheme.typography.titleLarge, color = MaterialTheme.colorScheme.primary, modifier = Modifier.padding(16.dp),)
            }
        }
    }

    @Composable
    fun UserItem(user: User) {
        Column(modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp)) {
            Text(text = "Name: ${user.name}", style = MaterialTheme.typography.headlineLarge)
            Text(text = "Role: ${user.role}", style = MaterialTheme.typography.headlineMedium)
        }
    }
}

