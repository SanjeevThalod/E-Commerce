var bar = document.getElementById('bar');
var navbar = document.getElementById('navbar');
var x = document.getElementById('cr');

bar.addEventListener('click',function(){
    navbar.style.right = '0px';
});
cr.addEventListener('click',function(){
    navbar.style.right = '-300px';
});