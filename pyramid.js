function makePyramid() {
 const height = prompt('Height: ');

 draw(height);
}

function draw(height) {
 let hash = '';

 for (let i = 0; i < height; i++) {
  for (let j = 0; j < i + 1; j++) {
   hash += '#';
  }
  hash += '\n';
 }
 console.log(hash);
}

makePyramid();
