var itemCmp = document.querySelector('.item-content');
var imgItem = document.querySelector('.img-item');
var titleItem = document.querySelector('.title-item');
var valorItem = document.querySelector('.valor-item');
var pacelaItem = document.querySelector('.pacela-item');
var descricaoItem = document.querySelector('.descricao-item');
var bxX = document.querySelector('.bx-x');
var cdp = document.querySelector('.cdp');
var body = document.querySelector('body');
var item1 = document.querySelector('.item-1');
var item2 = document.querySelector('.item-2');

item1.addEventListener('click', function(){
  itemCmp.style.display = "block"
  body.style.overflow = "hidden"
  bxX.addEventListener('click', function(){
    itemCmp.style.display = "none"
    body.style.overflow = "visible"
  });
  imgItem.src = "https://i.postimg.cc/qMThJLMh/Whats-App-Image-2022-01-27-at-18-13-01-3-removebg-preview.png"
  titleItem.innerHTML = "Capa para botijão com estampa natalina branca"
  valorItem.innerHTML = "R$18,90"
  pacelaItem.innerHTML = "Parcela: 1x sem juros"
  descricaoItem.innerHTML = "Capa para botijão com estampa natalina branca para embelezar sua cozinha."
  cdp.value = "OCIH"
});

item2.addEventListener('click', function(){
  itemCmp.style.display = "block"
  body.style.overflow = "hidden"
  bxX.addEventListener('click', function(){
    itemCmp.style.display = "none"
    body.style.overflow = "visible"
  });
  imgItem.src = "https://i.postimg.cc/nr4MwmwR/Whats-App-Image-2022-01-27-at-18-13-01-2-removebg-preview.png"
  titleItem.innerHTML = "Pano de fogão com estampa natalina branca e vermelha"
  valorItem.innerHTML = "R$18,90"
  pacelaItem.innerHTML = "Parcela: 1x sem juros"
  descricaoItem.innerHTML = "Pano de fogão com estampa natalina branca e vermelha para deixar sua cozinha mais bonita."
  cdp.value = "AAA3"
});