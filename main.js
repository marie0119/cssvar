const box=document.querySelector('.box');
const boxStyle=getComputedStyle(box);
// console.log(boxStyle);
const boxBorderColor=boxStyle.getPropertyValue('--box-border-color');
console.log(boxBorderColor);
const header=document.querySelector('#main-header');
header.style.setProperty('--header-bg-color',boxBorderColor);