let calendar = document.getElementById('calendar');

calendar.innerHTML = "<div id='case1'class='case'></div><div id='case2'class='case'></div><div id='case3'class='case'></div><div id='case4'class='case'></div><div id='case5'class='case'></div><div id='case6'class='case'></div><div id='case7'class='case'></div><div id='case8'class='case'></div><div id='case9'class='case'></div><div id='case10'class='case'></div><div id='case11'class='case'></div><div id='case12'class='case'></div><div id='case13'class='case'></div><div id='case14'class='case'></div><div id='case15'class='case'></div><div id='case16'class='case'></div><div id='case17'class='case'></div><div id='case18'class='case'></div><div id='case19'class='case'></div><div id='case20'class='case'></div><div id='case21'class='case'></div><div id='case22'class='case'></div><div id='case23'class='case'></div><div id='case24'class='case'></div>";
let cases = document.getElementsByClassName('case');

let case1 = document.getElementById('case1') + '1/11';let case2 = document.getElementById('case2') + '2/11';let case3 = document.getElementById('case3') + '3/11';
let case4 = document.getElementById('case4') + '4/11';let case5 = document.getElementById('case5') + '5/11';let case6 = document.getElementById('case6') + '6/11';
let case7 = document.getElementById('case7') + '7/11';let case8 = document.getElementById('case8') + '8/11';let case9 = document.getElementById('case9') + '9/11';
let case10 = document.getElementById('case10') + '10/11';let case11 = document.getElementById('case11') + '11/11';let case12 = document.getElementById('case12') + '12/11';
let case13 = document.getElementById('case13') + '13/11';let case14 = document.getElementById('case14') + '14/11';let case15 = document.getElementById('case15') + '15/11';
let case16 = document.getElementById('case16') + '16/11';let case17 = document.getElementById('case17') + '17/11';let case18 = document.getElementById('case18') + '18/11';
let case19 = document.getElementById('case19') + '19/11';let case20 = document.getElementById('case20') + '20/11';let case21 = document.getElementById('case21') + '21/11';
let case22 = document.getElementById('case22') + '22/11';let case23 = document.getElementById('case23') + '23/11';let case24 = document.getElementById('case24') + '24/11';

let date = new Date();
let now = '[object HTMLDivElement]'+date.getDate()+'/'+date.getMonth();


document.getElementById('case1').innerHTML = "<h4 id='nb1'> 1 </h4> <p id='c1'> Félicitations, plus que 23 jours ! </p>";

document.getElementById('case1').addEventListener('click', function(){
    if(now == case1){
        document.getElementById('nb1').classList.add("hide");
        document.getElementById('c1').classList.add("show");
    }
})

document.getElementById('case2').innerHTML = "<h4 id='nb2'> 2 </h4> <p id='c2'> Félicitations, plus que 22 jours ! </p>";

document.getElementById('case2').addEventListener('click', function(){
    if(now == case2){
        document.getElementById('nb2').classList.add("hide");
        document.getElementById('c2').classList.add("show");
    }
})


