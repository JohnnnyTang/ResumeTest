let switch_button = document.querySelector(".switch");
let container = document.querySelector(".container");
let section_titles = document.querySelectorAll(".section__title");
let header = document.querySelector(".header");
let details = document.querySelector(".details");
let table = document.querySelector(".skill-table");
let hl = document.querySelectorAll(".hyper-link");
let body = document.querySelector("body");
let topBut = document.querySelector('#goTop');
let messageTitle = document.querySelector(".message-title");
let messages = document.querySelector(".messages");
let message_enter = document.getElementById('message-content');
let message_content = document.querySelector(".entered");

switch_button.onclick = function() {
    container.classList.toggle("night-mode");
    for(let title of section_titles) {
        title.classList.toggle("night-mode");
    }
    header.classList.toggle("night-mode");
    details.classList.toggle("night-mode");
    table.classList.toggle("night-mode");
    for(let link of hl) {
        link.classList.toggle("night-mode");
    }
    body.classList.toggle("night-mode");
    topBut.classList.toggle("night-mode");
    messageTitle.classList.toggle("night-mode");
    messages.classList.toggle("night-mode");
}



var basicScrollTop = function () {  
    var btnTop = document.querySelector('#goTop');

    var btnReveal = function () { 
      if (window.scrollY >= 30) {
        btnTop.classList.add('is-visible');
      } else {
        btnTop.classList.remove('is-visible');
      }    
    }  
    var TopscrollTo = function () {
      if(window.scrollY!=0) {
        setTimeout(function() {
          window.scrollTo(0,window.scrollY-30);
          TopscrollTo();
        }, 5);
      }
    }

    window.addEventListener('scroll', btnReveal);
    btnTop.addEventListener('click', TopscrollTo);  
      
};
basicScrollTop();

let message_num = 1;
  
function SendMessage() {
	let content = message_enter.value;
	if (content.match(/^[ ]*$/)) { // 判断字符串是否为空或全为空格
		console.log("留言为空");
	}
	else {
		content = message_num.toString() + "." + content + "  ";
		message_num += 1;
		message_content.textContent += content;
		message_enter.value = "";
	}
}