package com.example.myapplication

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.tooling.preview.Preview

class LoginActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyApplicationTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    LoginScreen()
                }
            }
        }
    }


    @OptIn(ExperimentalMaterial3Api::class)
    @Composable
    fun LoginScreen() {
        var username  by remember { mutableStateOf("") }
        var password  by remember { mutableStateOf("") }
        Column {
            Text(text = "Loup Garou", modifier = Modifier.fillMaxSize(), style = MaterialTheme.typography.titleLarge)
            TextField(value = username, onValueChange = { username = it }, label = { Text("Nom d'utilisateur") })
            TextField(value = password, onValueChange = { password = it }, label = { Text("password") }, visualTransformation = PasswordVisualTransformation())
            Row {
                Button(onClick = { /*TODO*/ }) {
                    Text(text ="Se connecter")
                }
                Button(onClick = { /*TODO*/ }) {
                    Text(text ="S'inscrire")
                }
            }
        }
    }
}


}
