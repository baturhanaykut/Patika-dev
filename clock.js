let userName = prompt("Lütfen İsminizi Giriniz");

let isim = document.getElementById("myName");
isim.innerHTML = userName;

let tarih = document.getElementById("myClock");
tarih.innerHTML=Date();