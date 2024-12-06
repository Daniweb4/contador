const texto=document.querySelector('#text')
const btnau =document.querySelector('#btn')
const btnmen=document.querySelector('#btn-')

btnau.addEventListener('click',()=>{
    texto.textContent++;
})
btnmen.addEventListener('click',()=>{
    texto.textContent--;
})