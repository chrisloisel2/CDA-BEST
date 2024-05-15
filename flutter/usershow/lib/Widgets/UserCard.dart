import 'package:flutter/material.dart';
import 'package:usershow/Model/UserModel.dart';

class Usercard extends StatelessWidget {
  final User user;

  Usercard({required this.user}); // constructor

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.all(10),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        user.pseudo,
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      Text(user.email),
                    ],
                  ),
                ),
                Container(
                  width: 50,
                  height: 50,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    image: DecorationImage(
                      image: NetworkImage(user.profilePhoto.isNotEmpty
                          ? user.profilePhoto[0]
                          : 'https://via.placeholder.com/150'),
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ],
            ),
            SizedBox(height: 10),
            Text(
              'Bio: ${user.bio}',
              style: TextStyle(fontSize: 16),
            ),
            SizedBox(height: 10),
            Text(
              'Location: ${user.location}',
              style: TextStyle(fontSize: 16),
            ),
            SizedBox(height: 10),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Family Structure:',
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
                Text(
                    'Number of Children: ${user.familyStructure.numberOfChildren}'),
                Text('Children Ages: ${user.familyStructure.ages.join(', ')}'),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
