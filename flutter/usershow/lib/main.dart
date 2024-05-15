import 'package:flutter/material.dart';
import 'package:usershow/Model/UserModel.dart';
import 'package:usershow/Service/Fetcher.dart';
import 'package:usershow/Widgets/UserCard.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: userListScreen(),
    );
  }
}

class userListScreen extends StatefulWidget {
  userListScreen({super.key});

  @override
  _userListScreenState createState() => _userListScreenState();
}

class _userListScreenState extends State<userListScreen> {
  List<User> users = [];

  @override
  void initState() {
    fetcher().fetchUsers().then((value) {
      setState(() {
        users = value;
      });
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('User List'),
      ),
      body: ListView.builder(
        // ListView.builder
        itemCount: users.length,
        itemBuilder: (context, index) {
          return Usercard(user: users[index]);
        },
      ),
    );
  }
}
