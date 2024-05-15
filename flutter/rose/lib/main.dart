import 'package:flutter/material.dart';

void main() {
// Fonction main() qui est le point d'entrée de l'application
// runApp() est une fonction qui permet de démarrer l'application et de lancer le widget racine
// Ici, le widget racine est MyApp()
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  // MyApp est un widget Stateless qui hérite de StatelessWidget

  // un widget Stateless est un widget qui ne peut pas être modifié après sa création
  const MyApp({super.key});

  // La méthode build() est une méthode obligatoire pour les widgets
  // Elle permet de construire l'interface graphique de mon widget pour l'afficher à l'écran
  @override
  Widget build(BuildContext context) {
    // <- ici la logique de construction de l'interface graphique

    // return la partie graphique de mon widget
    // MaterialApp() est un widget qui permet de définir les paramètres de l'application
    return MaterialApp(
      title: 'Flutter Demo', // titre de l'application
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ), // theme de l'application (couleurs, polices, etc.)
      home: const MyHomePage(
          title: 'Flutter Demo Home Page'), // page d'accueil de l'application
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  final List<String> _list = [
    'assets/1.png',
    'assets/2.png',
    'assets/3.png',
    'assets/4.png'
  ];

  void _incrementCounter() {
    setState(() {
      _counter++;
      if (_counter == _list.length) {
        _counter = 0;
      }
    });
    print('$_counter');
  }

  @override
  Widget build(BuildContext context) {
    // représentation graphique de la page d'accueil
    return Scaffold(
      // Utilisation du widget Scaffold pour définir la structure de la page
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Image.asset(_list[_counter], width: 400, height: 400),
            ElevatedButton(
              onPressed: _incrementCounter,
              child: const Text('Click me!'),
            ),
          ],
        ),
      ),
    );
  }
}
