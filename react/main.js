const miFunction = () => {
    console.log('arrow funtion')
}

 const main = document.querySelector('main');
 const div = document.querySelector('#root')


 const renderbutton = () => {
    const button = document.createElement('button')
    button.innerText = "click me "
   button.addEventListener('click', miFunction)
    div.appendChild(button)
 }
 renderbutton()