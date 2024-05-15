// import 'package:flutter/material.dart';

// void main() { // La fonction main est le point d'entrée de l'application
//   runApp(const MyApp()); // runApp permet de lancer l'application
// }

// class MyApp extends StatelessWidget { // La classe MyApp est un widget Stateless
//   // Widget Stateless : un widget qui ne peut pas être modifié une fois qu'il a été créé
//   const MyApp({super.key}); // Constructeur de la classe MyApp
//   // super.key : clé de widget qui permet de distinguer un widget d'un autre

//   // Widget build : méthode qui permet de construire l'interface graphique
//   // renvoie un Scaffold qui est un widget qui permet de créer une page
//   // avec un appBar, un body et un floatingActionButton
//   // appBar : barre d'application
//   // body : corps de l'application
//   // floatingActionButton : bouton flottant
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp( // MaterialApp est un widget qui permet de définir le thème de l'application
//       title: 'Flutter Demo', // titre de l'application
//       theme: ThemeData( // ThemeData est un widget qui permet de définir le thème de l'application
//         colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
//         useMaterial3: true,
//       ),
//       home: const MyHomePage(title: 'Flutter Demo Home Page'), // home : page d'accueil de l'application
//     );
//   }
// }

// class MyHomePage extends StatefulWidget { // La classe MyHomePage est un widget Stateful
//   // Widget Stateful : un widget qui peut être modifié une fois qu'il a été créé
//   const MyHomePage({super.key, required this.title}); // Constructeur de la classe MyHomePage

//   final String title;

//   @override
//   State<MyHomePage> createState() => _MyHomePageState();
// }

// class _MyHomePageState extends State<MyHomePage> {
//   int _counter = 0;

//   void _incrementCounter() {
//     setState(() {
//       // This call to setState tells the Flutter framework that something has
//       // changed in this State, which causes it to rerun the build method below
//       // so that the display can reflect the updated values. If we changed
//       // _counter without calling setState(), then the build method would not be
//       // called again, and so nothing would appear to happen.
//       _counter++;
//     });
//   }

//   @override
//   Widget build(BuildContext context) {
//     // This method is rerun every time setState is called, for instance as done
//     // by the _incrementCounter method above.
//     //
//     // The Flutter framework has been optimized to make rerunning build methods
//     // fast, so that you can just rebuild anything that needs updating rather
//     // than having to individually change instances of widgets.
//     return Scaffold(
//       appBar: AppBar(
//         // TRY THIS: Try changing the color here to a specific color (to
//         // Colors.amber, perhaps?) and trigger a hot reload to see the AppBar
//         // change color while the other colors stay the same.
//         backgroundColor: Theme.of(context).colorScheme.inversePrimary,
//         // Here we take the value from the MyHomePage object that was created by
//         // the App.build method, and use it to set our appbar title.
//         title: Text(widget.title),
//       ),
//       body: Center(
//         // Center is a layout widget. It takes a single child and positions it
//         // in the middle of the parent.
//         child: Column(
//           // Column is also a layout widget. It takes a list of children and
//           // arranges them vertically. By default, it sizes itself to fit its
//           // children horizontally, and tries to be as tall as its parent.
//           //
//           // Column has various properties to control how it sizes itself and
//           // how it positions its children. Here we use mainAxisAlignment to
//           // center the children vertically; the main axis here is the vertical
//           // axis because Columns are vertical (the cross axis would be
//           // horizontal).
//           //
//           // TRY THIS: Invoke "debug painting" (choose the "Toggle Debug Paint"
//           // action in the IDE, or press "p" in the console), to see the
//           // wireframe for each widget.
//           mainAxisAlignment: MainAxisAlignment.center,
//           children: <Widget>[
//             const Text(
//               'You have pushed the button this many times:',
//             ),
//             Text(
//               '$_counter',
//               style: Theme.of(context).textTheme.headlineMedium,
//             ),
//           ],
//         ),
//       ),
//       floatingActionButton: FloatingActionButton(
//         onPressed: _incrementCounter,
//         tooltip: 'Increment',
//         child: const Icon(Icons.add),
//       ), // This trailing comma makes auto-formatting nicer for build methods.
//     );
//   }
// }
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Screen'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'Hello, Flutter!',
              style: TextStyle(fontSize: 24),
            ),
            Image.network('https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/71652c8cd921bce5a30f2f4f6b848ec8.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp'),
            ElevatedButton(
              onPressed: () {
                // Action when button is pressed
              },
              child: Text('Press Me'),
            ),
          ],
        ),
      ),
    );
  }
}
