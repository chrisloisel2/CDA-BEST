import 'package:flutter/material.dart';

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
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: CouterProvider(
        counter: 56,
        child: CounterScreen(),
      ),
    );
  }
}

// Le widget InheritedWidget qui contient la valeur du compteur

class CouterProvider extends InheritedWidget {
  final int counter;

  const CouterProvider({
    Key? key,
    required this.counter,
    required Widget child,
  }) : super(key: key, child: child);

  // of
  static CouterProvider? of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<CouterProvider>();
  }

  @override
  bool updateShouldNotify(covariant CouterProvider oldWidget) {
    return counter != oldWidget.counter;
  }
}

class CounterScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final counterProvider = CouterProvider.of(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Counter'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Counter: ${counterProvider?.counter}',
            ),
            const SizedBox(height: 20),
          ],
        ),
      ),
    );
  }
}
