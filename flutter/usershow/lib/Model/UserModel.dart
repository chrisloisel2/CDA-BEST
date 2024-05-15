class AttractionPreferences {
  String gender;
  int minAge;
  int maxAge;
  List<dynamic> sharedInterests;
  int maxDistance;
  String id;

  AttractionPreferences({
    required this.gender,
    required this.minAge,
    required this.maxAge,
    required this.sharedInterests,
    required this.maxDistance,
    required this.id,
  });

  factory AttractionPreferences.fromJson(Map<String, dynamic> json) {
    return AttractionPreferences(
      gender: json['gender'],
      minAge: json['minAge'],
      maxAge: json['maxAge'],
      sharedInterests: List<dynamic>.from(json['sharedInterests']),
      maxDistance: json['maxDistance'],
      id: json['_id'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'gender': gender,
      'minAge': minAge,
      'maxAge': maxAge,
      'sharedInterests': sharedInterests,
      'maxDistance': maxDistance,
      '_id': id,
    };
  }
}

class FamilyStructure {
  int numberOfChildren;
  List<dynamic> ages;
  String id;

  FamilyStructure({
    required this.numberOfChildren,
    required this.ages,
    required this.id,
  });

  factory FamilyStructure.fromJson(Map<String, dynamic> json) {
    return FamilyStructure(
      numberOfChildren: json['numberOfChildren'],
      ages: List<dynamic>.from(json['ages']),
      id: json['_id'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'numberOfChildren': numberOfChildren,
      'ages': ages,
      '_id': id,
    };
  }
}

class User {
  String id;
  String email;
  String password;
  List<dynamic> interests;
  DateTime createdAt;
  DateTime updatedAt;
  int version;
  AttractionPreferences attractionPreferences;
  String bio;
  FamilyStructure familyStructure;
  String location;
  List<String> profilePhoto;
  String pseudo;

  User({
    required this.id,
    required this.email,
    required this.password,
    required this.interests,
    required this.createdAt,
    required this.updatedAt,
    required this.version,
    required this.attractionPreferences,
    required this.bio,
    required this.familyStructure,
    required this.location,
    required this.profilePhoto,
    required this.pseudo,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['_id'],
      email: json['email'],
      password: json['password'],
      interests: List<dynamic>.from(json['interests']),
      createdAt: DateTime.parse(json['createdAt']),
      updatedAt: DateTime.parse(json['updatedAt']),
      version: json['__v'],
      attractionPreferences:
          AttractionPreferences.fromJson(json['attractionPreferences']),
      bio: json['bio'],
      familyStructure: FamilyStructure.fromJson(json['familyStructure']),
      location: json['location'],
      profilePhoto: List<String>.from(json['profilePhoto']),
      pseudo: json['pseudo'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      '_id': id,
      'email': email,
      'password': password,
      'interests': interests,
      'createdAt': createdAt.toIso8601String(),
      'updatedAt': updatedAt.toIso8601String(),
      '__v': version,
      'attractionPreferences': attractionPreferences.toJson(),
      'bio': bio,
      'familyStructure': familyStructure.toJson(),
      'location': location,
      'profilePhoto': profilePhoto,
      'pseudo': pseudo,
    };
  }
}
