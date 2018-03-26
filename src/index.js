import _ from 'lodash';
// import  './style.css';
// import Icon from './icon.png';
// import Data from './data.xml';
import printMe from './print.js';
  function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack--------'], ' ');
    element.classList.add('hello');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

  // // Add the image to our existing div.
  //  var myIcon = new Image();
  // //  myIcon.src = Icon;

  //  element.appendChild(myIcon);
  //   console.log(Data, 'data-----');
  //   console.log(Icon,'Icon-----');
  //   alert(Icon)
  //  alert(Data.body)
  //  console.log('223333333333');
   
   
    return element;
  }

document.body.appendChild(component());