//Jquery
$(".clicaveis").click((el)=>{
  alert("O elemento "+ el.target.nodeName +
  " foi clicado!")
})

$(".focus-habilitado").focus((el)=>{
  el.target.classList.add("cor-focado")
})
$(".focus-habilitado").blur((el)=>{
  el.target.classList.remove("cor-focado")
})

$("#fadein").click(()=>{
  $("#fadeele").fadeIn();
})
$("#fadeout").click(()=>{
  $("#fadeele").fadeOut();
})