import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Flutter Animation Demo'),
        ),
        body: ListView(
          children: [
            ScaleAnimation(),
            FadeAnimation(),
            RotateAnimation(),
            SlideAnimation(),
          ],
        ),
      ),
    );
  }
}

// Animation de mise à l'échelle
class ScaleAnimation extends StatefulWidget {
  @override
  _ScaleAnimationState createState() => _ScaleAnimationState();
}

class _ScaleAnimationState extends State<ScaleAnimation>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    // Initialisation de l'animation
    super.initState();
    _controller = AnimationController(
      duration: const Duration(seconds: 2),
      vsync: this,
    );

    // Tween pour animer la taille de l'objet
    _animation = Tween<double>(begin: 290, end: 300).animate(_controller)
      ..addListener(() {
        setState(() {});
      });

    // Lancer l'animation en boucle
    _controller.repeat(reverse: true);
  }

  @override
  void dispose() {
    // Arrêter l'animation
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        margin: EdgeInsets.all(20),
        width: _animation.value,
        height: _animation.value,
        color: Colors.blue,
      ),
    );
  }
}

// Animation de fondu
class FadeAnimation extends StatefulWidget {
  @override
  _FadeAnimationState createState() => _FadeAnimationState();
}

class _FadeAnimationState extends State<FadeAnimation>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(seconds: 2),
      vsync: this,
    );

    // Tween pour animer l'opacité de l'objet
    _animation = Tween<double>(begin: 0, end: 1).animate(_controller)
      ..addListener(() {
        setState(() {});
      });

    _controller.repeat(reverse: true);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        margin: EdgeInsets.all(20),
        width: 300,
        height: 300,
        color: Colors.red.withOpacity(_animation.value),
      ),
    );
  }
}

// Animation de rotation
class RotateAnimation extends StatefulWidget {
  @override
  _RotateAnimationState createState() => _RotateAnimationState();
}

class _RotateAnimationState extends State<RotateAnimation>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(seconds: 2),
      vsync: this,
    );

    // Tween pour animer la rotation de l'objet
    _animation = Tween<double>(begin: 0, end: 2 * 3.14159).animate(_controller)
      ..addListener(() {
        setState(() {});
      });

    _controller.repeat();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Transform.rotate(
        angle: _animation.value,
        child: Container(
          margin: EdgeInsets.all(20),
          width: 100,
          height: 100,
          color: Colors.green,
        ),
      ),
    );
  }
}

// Animation de glissement
class SlideAnimation extends StatefulWidget {
  @override
  _SlideAnimationState createState() => _SlideAnimationState();
}

class _SlideAnimationState extends State<SlideAnimation>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<Offset> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(seconds: 2),
      vsync: this,
    );

    // Tween pour animer la position de l'objet
    _animation = Tween<Offset>(begin: Offset.zero, end: Offset(1.5, 0))
        .animate(_controller)
      ..addListener(() {
        setState(() {});
      });

    _controller.repeat(reverse: true);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SlideTransition(
        position: _animation,
        child: Container(
          margin: EdgeInsets.all(20),
          width: 100,
          height: 100,
          color: Colors.orange,
        ),
      ),
    );
  }
}
