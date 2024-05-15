import 'dart:convert';

import 'package:usershow/Model/UserModel.dart';
import 'package:http/http.dart' as http;

String token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNocmlzLmxvaXNlbDk0QGdtYWlsLmNvbSIsInN1YiI6IjY2M2Y1MjNjZTA0ODYxMzE5MjA2YTFlMSIsInBhc3MiOiIkMmIkMTAkZFdGb3RxaVc5ZTNlUFlqNW1iMmpudUp5RlVNWHI5Tnowbi9WU2JsR1c4Q05Qaml2andCY0ciLCJpYXQiOjE3MTU3NzQ4ODIsImV4cCI6MTcxNTc3Njk4Mn0.426tHc4SfjFRh4W57qvP0fq8PrjSN1dyR_jf0wj7dHw";

class fetcher {
  Future<List<User>> fetchUsers() async {
    final reponse = await http.get(
        Uri.parse(
            "http://maible-env.eba-egmcbgbn.eu-north-1.elasticbeanstalk.com/api/users/MatchProfile"),
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer $token",
        });

    if (reponse.statusCode == 200) {
      List<User> users = [];
      for (var user in jsonDecode(reponse.body)) {
        users.add(User.fromJson(user));
      }
      return users;
    } else {
      throw Exception("Failed to load users");
    }
  }
}
