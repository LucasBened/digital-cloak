const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

let timer = false



document.getElementById('start-btn').addEventListener(
  'click', () =>{
    timer = true
  }
)

document.getElementById('stop-btn').addEventListener('click', () =>{
  timer = false
  horas.textContent = '00'
  minutos.textContent = '00'
  segundos.textContent = '00'

})


const relogio = setInterval((date) => {
    
    //let dateToday = new Date();
    date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let s = date.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;


    if(timer === true){
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    }

})

