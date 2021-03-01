//toggle accord icons
$("#projects").on("hide.bs.collapse show.bs.collapse", e => {
    $(e.target)
      .prev()
      .find("i:last-child")
      .toggleClass("fa-minus fa-plus");
  });
//animate accord
  $("#projects").on("shown.bs.collapse", e => {
    $("html, body").animate(
      {
        scrollTop: $(e.target)
          .prev()
          .offset().top
      },
      400
    );
  });

  /*scroll menu */
$("a").click(function(){
    $("body,html").animate({
      scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
   
  })
//image lazy load
$(function() {
  $('.lazy').Lazy();
});

//switch language
const langBtns = document.querySelectorAll(".lang-btn");

for(let i=0; i<langBtns.length; i++) {
  [i].addEventListener('click',switchLang); 
}
console.log(langBtns);
function switchLang(langItem) {
  const html = document.getElementsByTagName("html");
  langItem
}

