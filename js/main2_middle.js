const forder1 = document.querySelector('.forder1');
const forder2 = document.querySelector('.forder2');
const forder3 = document.querySelector('.forder3');
const forder4 = document.querySelector('.forder4');
const forder5 = document.querySelector('.forder5');
const forder6 = document.querySelector('.forder6');
const forder7 = document.querySelector('.forder7');
const forder8 = document.querySelector('.forder8');

const show1 = document.querySelector('.show1');
const show2 = document.querySelector('.show2');
const show3 = document.querySelector('.show3');
const show4 = document.querySelector('.show4');
const show5 = document.querySelector('.show5');
const show6 = document.querySelector('.show6');
const show7 = document.querySelector('.show7');
const show8 = document.querySelector('.show8');

const closedSpan1 = document.querySelector('.closed1');
const closedSpan2 = document.querySelector('.closed2');
const closedSpan3 = document.querySelector('.closed3');
const closedSpan4 = document.querySelector('.closed4');
const closedSpan5 = document.querySelector('.closed5');
const closedSpan6 = document.querySelector('.closed6');
const closedSpan7 = document.querySelector('.closed7');
const closedSpan8 = document.querySelector('.closed8');

const open_window1 = document.querySelector('.open_window1');
const open_window2 = document.querySelector('.open_window2');
const open_window3 = document.querySelector('.open_window3');
const open_window4 = document.querySelector('.open_window4');
const open_window5 = document.querySelector('.open_window5');
const open_window6 = document.querySelector('.open_window6');
const open_window7 = document.querySelector('.open_window7');
const open_window8 = document.querySelector('.open_window8');

/*function closedClick (){
    open_window.classList.remove('open_window_show');
    open_window.classList.add('open_window');
};*/


function click(){
    
    
    /*forder1.onclick = function(){
        show+i.classList.add('open_window_show');
        closedSpan+i.onclick = function(){
            open_window+i.classList.remove('open_window_show');
            open_window+i.classList.add('open_window');
        }
    };*/

    forder1.onclick = function(){
        show1.classList.add('open_window_show');
        closedSpan1.onclick = function(){
            open_window1.classList.remove('open_window_show');
            open_window1.classList.add('open_window');
        }
    };
    forder2.onclick = function(){
        show2.classList.add('open_window_show');
        closedSpan2.onclick = function(){
            open_window2.classList.remove('open_window_show');
            open_window2.classList.add('open_window');
        }
    };
    forder3.onclick = function(){
        show3.classList.add('open_window_show');
        closedSpan3.onclick = function(){
            open_window3.classList.remove('open_window_show');
            open_window3.classList.add('open_window');
        }
    };
    forder4.onclick = function(){
        show4.classList.add('open_window_show');
        closedSpan4.onclick = function(){
            open_window4.classList.remove('open_window_show');
            open_window4.classList.add('open_window');
        }
    };
    forder5.onclick = function(){
        show5.classList.add('open_window_show');
        closedSpan5.onclick = function(){
            open_window5.classList.remove('open_window_show');
            open_window5.classList.add('open_window');
        }
    };
    forder6.onclick = function(){
        show6.classList.add('open_window_show');
        closedSpan6.onclick = function(){
            open_window6.classList.remove('open_window_show');
            open_window6.classList.add('open_window');
        }
    };
    forder7.onclick = function(){
        show7.classList.add('open_window_show');
        closedSpan7.onclick = function(){
            open_window7.classList.remove('open_window_show');
            open_window7.classList.add('open_window');
        }
    };
    forder8.onclick = function(){
        show8.classList.add('open_window_show');
        closedSpan8.onclick = function(){
            open_window8.classList.remove('open_window_show');
            open_window8.classList.add('open_window');
        }
    };
}

function init() {
    click()
    
};

init();