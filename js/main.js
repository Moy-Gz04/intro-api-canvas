window.onload = function() {
   console.log("🚀 Dibujando todos los Canvas...");
   drawOriginalCanvas();
   drawSmileyFace();
   drawTriangle();
   drawMixedTriangles();
   drawArcGrid();
   drawBezierCurves();
   drawPacManScene();
};

// Función para obtener el contexto del `canvas`
function getCanvasContext(id) {
   const canvas = document.getElementById(id);
   if (!canvas) {
       console.error(`❌ No se encontró el canvas con id "${id}"`);
       return null;
   }
   return canvas.getContext("2d");
}

// Canvas 1: Cuadrado Morado
function drawOriginalCanvas() {
   const ctx = getCanvasContext("canvas1");
   if (!ctx) return;
   ctx.fillStyle = "purple";
   ctx.fillRect(50, 50, 100, 100);
}

// Canvas 2: Carita Sonriente
function drawTriangleCanvas2() {
   const canvas = document.getElementById("canvas2");
   if (canvas.getContext) {
     const ctx = canvas.getContext("2d");
 
     ctx.fillStyle = "gray";
     ctx.beginPath();
     ctx.moveTo(75, 50);
     ctx.lineTo(100, 75);
     ctx.lineTo(100, 25);
     ctx.fill();
     
   }
 }
 

// Canvas 3: Triángulo Azul
function drawTriangle() {
   const ctx = getCanvasContext("canvas3");
   if (!ctx) return;

   ctx.beginPath();
   ctx.moveTo(75, 50);
   ctx.lineTo(100, 75);
   ctx.lineTo(100, 25);
   ctx.fill();
}

// Canvas 4: Triángulos Mixtos
function drawMixedTriangles() {
   const ctx = getCanvasContext("canvas4");
   if (!ctx) return;

   ctx.fillStyle = "black";
   ctx.strokeStyle = "black";
   ctx.lineWidth = 2;

   ctx.beginPath();
   ctx.moveTo(25, 25);
   ctx.lineTo(105, 25);
   ctx.lineTo(25, 105);
   ctx.closePath();
   ctx.fill();

   ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
}

// Canvas 5: Cuadrícula de Arcos
function drawArcGrid() {
   const ctx = getCanvasContext("canvas5");
   if (!ctx) return;

   for (let i = 0; i < 4; i++) {
       for (let j = 0; j < 3; j++) {
           ctx.beginPath();
           const x = 25 + j * 50;
           const y = 25 + i * 50;
           const radius = 20;
           const startAngle = 0;
           const endAngle = Math.PI + (Math.PI * j) / 2;
           const counterclockwise = i % 2 !== 0;

           ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

           if (i > 1) {
               ctx.fill();
           } else {
               ctx.stroke();
           }
       }
   }
}

// Canvas 6: Curvas Bézier
function drawBezierCurves() {
   const ctx = getCanvasContext("canvas6");
   if (!ctx) return;

   ctx.fillStyle = "red";
   ctx.beginPath();
   ctx.moveTo(75, 40);
   ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
   ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
   ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
   ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
   ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
   ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
   ctx.fill();
}

// Canvas 7: Pac-Man
function drawPacManScene() {
   const ctx = getCanvasContext("canvas7");
   if (!ctx) return;

   roundedRect(ctx, 12, 12, 150, 150, 15);
   roundedRect(ctx, 19, 19, 150, 150, 9);
   roundedRect(ctx, 53, 53, 49, 33, 10);
   roundedRect(ctx, 53, 119, 49, 16, 6);
   roundedRect(ctx, 135, 53, 49, 33, 10);
   roundedRect(ctx, 135, 119, 25, 49, 10);

   ctx.beginPath();
   ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
   ctx.lineTo(31, 37);
   ctx.fill();

   for (let i = 0; i < 8; i++) {
       ctx.fillRect(51 + i * 16, 35, 4, 4);
   }

   for (let i = 0; i < 6; i++) {
       ctx.fillRect(115, 51 + i * 16, 4, 4);
   }

   for (let i = 0; i < 8; i++) {
       ctx.fillRect(51 + i * 16, 99, 4, 4);
   }

   ctx.beginPath();
   ctx.moveTo(83, 116);
   ctx.lineTo(83, 102);
   ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
   ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
   ctx.lineTo(111, 116);
   ctx.lineTo(106.333, 111.333);
   ctx.lineTo(101.666, 116);
   ctx.lineTo(97, 111.333);
   ctx.lineTo(92.333, 116);
   ctx.lineTo(87.666, 111.333);
   ctx.lineTo(83, 116);
   ctx.fill();

   ctx.fillStyle = "white";
   ctx.beginPath();
   ctx.moveTo(91, 96);
   ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
   ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
   ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
   ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
   ctx.moveTo(103, 96);
   ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
   ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
   ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
   ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
   ctx.fill();

   ctx.fillStyle = "black";
   ctx.beginPath();
   ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
   ctx.fill();

   ctx.beginPath();
   ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
   ctx.fill();
}

// Función auxiliar para dibujar rectángulos redondeados
function roundedRect(ctx, x, y, width, height, radius) {
   ctx.beginPath();
   ctx.moveTo(x, y + radius);
   ctx.arcTo(x, y + height, x + radius, y + height, radius);
   ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
   ctx.arcTo(x + width, y, x + width - radius, y, radius);
   ctx.arcTo(x, y, x, y + radius, radius);
   ctx.stroke();
}

document.addEventListener("DOMContentLoaded", function() {
   drawShapesCanvas8();
});

function drawShapesCanvas8() {
   const canvas = document.getElementById("canvas8");
   if (!canvas) {
       console.error("❌ Canvas con ID 'canvas8' no encontrado.");
       return;
   }
   
   const ctx = canvas.getContext("2d");
   if (!ctx) return;

   const rectangle = new Path2D();
   rectangle.rect(10, 10, 50, 50);

   const circle = new Path2D();
   circle.arc(100, 35, 25, 0, 2 * Math.PI);

   ctx.strokeStyle = "black"; // Asegurar que el color de las líneas es visible
   ctx.fillStyle = "black"; // Color de relleno del círculo
   ctx.stroke(rectangle);
   ctx.fill(circle);
}

function drawSmileyFace() {
   const canvas = document.getElementById("canvas9");
   if (canvas.getContext) {
     const ctx = canvas.getContext("2d");
 
     ctx.beginPath();
     ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
     ctx.moveTo(110, 75);
     ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (en el sentido de las agujas del reloj)
     ctx.moveTo(65, 65);
     ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
     ctx.moveTo(95, 65);
     ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
     ctx.stroke();
   }
 }
 