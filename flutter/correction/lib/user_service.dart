import 'dart:convert';
import 'package:http/http.dart' as http;
import 'user_model.dart';

String token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlvbG9zIiwic3ViIjoiNjY0NDk0ZDllMjE5Nzk1OTczMDhjNGI0IiwicGFzcyI6IiQyYSQxMCRKRC9Qbk9VMmhXRGhseExVMFdFUDFPVW8wLjEyVkt0UFlIL2RCYnVTaFRMbS9qQVRKaVpvTyIsImlhdCI6MTcxNTc3MDU4NSwiZXhwIjoxNzE1NzcyNjg1fQ.uOhfyRkmnvGlAeaHQO9FgUuLREXNIO43949EKHG2hYI";

class UserService {
  Future<List<User>> fetchUsers() async {
    const url =
        'http://maible-env.eba-egmcbgbn.eu-north-1.elasticbeanstalk.com/api/users/MatchProfile';
    final response = await http.get(Uri.parse(url), headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer $token'
    });
    if (response.statusCode == 200) {
      List<dynamic> jsonResponse = json.decode(response.body);
      return jsonResponse.map((user) => User.fromJson(user)).toList();
    } else {
      throw Exception('Failed to load users');
    }
  }
}
