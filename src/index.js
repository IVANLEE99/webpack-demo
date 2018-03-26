import _ from 'lodash';
import  './style.css';
import printMe from './print.js';
  function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpa222222ck---2-223watch----'], ' ');
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
let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js',function () {  
    console.log('acception the updated printMe module!');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
    printMe();
    
  })
}