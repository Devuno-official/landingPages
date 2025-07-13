   let body = document.querySelector("#body");
   let button = document.querySelector(".btn");

const color =[
  '#F0F8FF',
  '#FAEBD7',
  '#00FFFF',
  '#7FFFD4',
  '#F0FFFF',
  '#F5F5DC',
  '#FFE4C4',
  '#000000',
  '#FFEBCD',
  '#0000FF',
  '#8A2BE2',
  '#A52A2A',
  '#DEB887',
  '#5F9EA0',
  '#F08080',
  '#E0FFFF',
  '#FAFAD2',
  '#D3D3D3',
  '#90EE90',
  '#FFB6C1',
  '#FFA07A',
  '#20B2AA',
  '#87CEFA',
  '#778899',
  '#B0C4DE',
  '#FFFFE0',
  '#00FF00',
  '#32CD32',
  '#FAF0E6',
  '#FF00FF',
  '#800000',
  '#66CDAA',
  '#0000CD',
  '#BA55D3',
  '#9370DB',
  '#3CB371',
  '#7B68EE',
  '#00FA9A',
  '#48D1CC',
  '#C71585',
  '#191970',
  '#F5FFFA',
  '#FFE4E1',
  '#FFE4B5',
  '#FFDEAD',
  '#000080',
  '#FDF5E6',
  '#808000',
  '#6B8E23',
  '#FFA500',
  '#FF4500',
  '#DA70D6',
  '#EEE8AA',

]

function randomColor(colors) {
     let randomindex = Math.floor(Math.random()*color.length);
     return   colors[randomindex];
}



 button.addEventListener("click",()=>{
   body.style.backgroundColor = randomColor(color);
   body.firstElementChild.lastElementChild.children[0].innerText = randomColor(color)
 })
