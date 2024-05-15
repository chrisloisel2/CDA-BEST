import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Chuck Norris Jokes',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: JokePage(),
    );
  }
}

class JokePage extends StatefulWidget {
  @override
  _JokePageState createState() => _JokePageState();
}

class _JokePageState extends State<JokePage> {
  String _joke = 'Tap the button to get a joke!';

  void _fetchJoke() async {
    final response =
        await http.get(Uri.parse('https://api.chucknorris.io/jokes/random'));

    if (response.statusCode == 200) {
      setState(() {
        _joke = jsonDecode(response.body)['value'];
      });
    } else {
      setState(() {
        _joke = 'Failed to load joke';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Chuck Norris Jokes'),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Text(_joke,
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _fetchJoke,
        tooltip: 'Fetch Joke',
        child: Icon(Icons.refresh),
      ),
    );
  }
}
