const btn = document.querySelector("#mode-change")
const span = document.querySelector("#mode-span")
const x = document.querySelector(".Experiances")
const y = document.querySelector("nav")
const z = document.querySelector(".one")
const body = document.querySelector('body')
const con = document.querySelector("li")
const lick = document.querySelector('.header')
const lich = document.querySelector('.descryption')
const mspan = document.querySelector('span')

btn.onclick = function light_mode(){
    x.style.color = 'black';  
    body.style.backgroundColor = 'white'; 
    y.style.backgroundColor = 'white';
    con.style.color = 'black';
    lick.style.color = 'black';
    lich.style.color = 'black';
    z.style.color = 'black';
    mspan.style.color = 'black';
}