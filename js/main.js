// 1. Obtener el elemento <canvas> del documento HTML
var canvas = document.getElementById("canvas");
/* 
   - document.getElementById("canvas") busca un elemento en el DOM con el ID "canvas".
   - La variable `canvas` almacena una referencia a este elemento.
   - Este elemento <canvas> actúa como un lienzo en el cual se pueden dibujar gráficos.
*/

// 2. Obtener el contexto de dibujo en 2D
var ctx = canvas.getContext("2d");
/* 
   - canvas.getContext("2d") devuelve un objeto de contexto que permite dibujar en el canvas.
   - La variable `ctx` almacena este contexto y proporciona métodos y propiedades para dibujar.
   - El contexto "2d" permite trabajar con gráficos bidimensionales como líneas, rectángulos, círculos, etc.
*/

// 3. Establecer el color de relleno a "green" (verde)
ctx.fillStyle = "rgb(206, 84, 213)";
/*
   - ctx.fillStyle define el color que se usará para rellenar las formas que se dibujen.
   - En este caso, se establece a "green", lo que significa que cualquier forma rellena será verde.
*/

// 4. Dibujar un rectángulo relleno en el canvas
ctx.fillRect(50, 50, 100, 100);
/*
   - ctx.fillRect(x, y, width, height) dibuja un rectángulo relleno con el color actual de `fillStyle`.
   - Parámetros:
       - `x = 50`: Posición horizontal del rectángulo en el canvas.
       - `y = 50`: Posición vertical del rectángulo en el canvas.
       - `width = 100`: Ancho del rectángulo en píxeles.
       - `height = 100`: Altura del rectángulo en píxeles.
   - Resultado:
       - Se dibuja un rectángulo verde en la posición `(50, 50)`, con un tamaño de `100x100` píxeles.
*/

// 📌 Nota:
// Para que este código funcione, debe haber un elemento <canvas> en el HTML con el ID "canvas":
// <canvas id="canvas" width="500" height="500"></canvas>
