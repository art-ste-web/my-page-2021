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
  langBtns[i].addEventListener('click', switchLang);
}

function setDefaultLang() {
  console.log(document.cookie);
  const isLangCoockie = getCookie("lang");
  if(isLangCoockie) {
    
  }
  
}
function getCookie(cookieName) {
  let cookie = {};
  document.cookie.split(';').forEach(function(el) {
    let [key,value] = el.split('=');
    cookie[key.trim()] = value;
  })
  console.log(cookie[cookieName]);
  return cookie[cookieName];
}


function switchLang() {
  for(let i=0; i<langBtns.length; i++) {
      langBtns[i].classList.remove("selected-lang");
  }
  if(!this.classList.contains("selected-lang")) {
    this.classList.add("selected-lang");
  };
  const currentLang = this.innerText;
  document.documentElement.setAttribute("lang", currentLang);
  let langValue = currentLang;
  setLangCoockie(langValue);
}

function setLangCoockie(currentLang) {
  let name = "lang";
  document.cookie = encodeURIComponent("lang") + '=' + encodeURIComponent(currentLang);
}