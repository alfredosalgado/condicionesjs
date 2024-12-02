/*PARTE 1*/

const imagen = document.querySelector('.prueba')

imagen.addEventListener('click' , () => {
  if (imagen.style.border == '3px solid red') {imagen.style.border = 'none'}
  else {imagen.style.border = '3px solid red'}
})

/* PARTE 2 */

const i1 = document.querySelector('#in1')
const i2 = document.querySelector('#in2')
const i3 = document.querySelector('#in3')
const btn1 = document.querySelector('#button1')
const resp1 = document.querySelector('#respuesta1')

btn1.addEventListener('click' , () => {

  const suma = Number(i1.value) + Number(i2.value) + Number(i3.value)

  if (Number(i1.value) < 0 || Number(i2.value) < 0 || Number(i3.value) < 0){
        resp1.innerHTML = 'Por favor ingrese números validos'}
  else if (suma <= 10){resp1.innerHTML = `Llevas ${suma} Stickers`;}
  else {resp1.innerHTML = 'Llevas demasiados';}
})



/* PARTE 3 */

const uno = document.querySelector('#uno')
const dos = document.querySelector('#dos')
const tres = document.querySelector('#tres')
const btn2 = document.querySelector('#button2')
const resp2 = document.querySelector('#respuesta2')

btn2.addEventListener('click' , () => {
  if (uno.value == 9 && dos.value == 1 && tres.value == 1) {
    resp2.innerHTML = 'Password 1 correcto'}
    else if (uno.value == 7 && dos.value == 1 && tres.value == 4) {
      resp2.innerHTML = 'Password 2 correcto'
    }
    else {
      resp2.innerHTML = 'Password incorrecto'
    }
})


