let bars = document.querySelector('header .get i');
let l_list = document.querySelector('header .links');
let home = document.querySelector('li.home')
let s_list = document.querySelector('.hid-ul')

bars.onclick = function(){
    l_list.classList.toggle('hid');
}
home.onclick = function(){
    s_list.classList.toggle('hiddy');
}