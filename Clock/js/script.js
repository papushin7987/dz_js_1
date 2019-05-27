var a = prompt('Введите время в формате ЧЧ:ММ')
var interval = setInterval(function(){
    var date = new Date();
    var time = date.toLocaleTimeString().split(':').slice(0, 1) + ':' + date.toLocaleTimeString().split(':').slice(1, 2);
    if(a == time) alert("Wake up!");
}, 1000)














