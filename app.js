let calendar = document.getElementById('calendar');
let calendrier = new Array();
calendrier[0]= "<div id='case1'class='case'></div>";calendrier[1]= "<div id='case2'class='case'></div>";calendrier[2]= "<div id='case3'class='case'></div>";
calendrier[3]= "<div id='case4'class='case'></div>";calendrier[4]= "<div id='case5'class='case'></div>";calendrier[5]= "<div id='case6'class='case'></div>";
calendrier[6]= "<div id='case7'class='case'></div>";calendrier[7]= "<div id='case8'class='case'></div>";calendrier[8]= "<div id='case9'class='case'></div>";
calendrier[9]= "<div id='case10'class='case'></div>";calendrier[10]= "<div id='case11'class='case'></div>";calendrier[11]= "<div id='case12'class='case'></div>";
calendrier[12]= "<div id='case13'class='case'></div>";calendrier[13]= "<div id='case14'class='case'></div>";calendrier[14]= "<div id='case15'class='case'></div>";
calendrier[15]= "<div id='case16'class='case'></div>";calendrier[16]= "<div id='case17'class='case'></div>";calendrier[17]= "<div id='case18'class='case'></div>";
calendrier[18]= "<div id='case19'class='case'></div>";calendrier[19]= "<div id='case20'class='case'></div>";calendrier[20]= "<div id='case21'class='case'></div>";
calendrier[21]= "<div id='case22'class='case'></div>";calendrier[22]= "<div id='case23'class='case'></div>";calendrier[23]= "<div id='case24'class='case'></div>"; 

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;  
    while (0 !== currentIndex) { 
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }  
    alert(array);
    return array;    
  }
let calen = shuffle(calendrier);
calendar.innerHTML = calen;

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

document.getElementById('case1').innerHTML = "<h4 id='nb1'> 1 </h4> <p id='c1'> Félicitations, plus que 23 jours ! </p>";document.getElementById('case2').innerHTML = "<h4 id='nb2'> 2 </h4> <p id='c2'> Félicitations, plus que 22 jours ! </p>";
document.getElementById('case3').innerHTML = "<h4 id='nb3'> 3 </h4> <p id='c3'> Félicitations, plus que 21 jours ! </p>";document.getElementById('case4').innerHTML = "<h4 id='nb4'> 4 </h4> <p id='c4'> Félicitations, plus que 20 jours ! </p>";
document.getElementById('case5').innerHTML = "<h4 id='nb5'> 5 </h4> <p id='c5'> Félicitations, plus que 19 jours ! </p>";document.getElementById('case6').innerHTML = "<h4 id='nb6'> 6 </h4> <p id='c6'> Félicitations, plus que 18 jours ! </p>";
document.getElementById('case7').innerHTML = "<h4 id='nb7'> 7 </h4> <p id='c7'> Félicitations, plus que 17 jours ! </p>";document.getElementById('case8').innerHTML = "<h4 id='nb8'> 8 </h4> <p id='c8'> Félicitations, plus que 16 jours ! </p>";
document.getElementById('case9').innerHTML = "<h4 id='nb9'> 9 </h4> <p id='c9'> Félicitations, plus que 15 jours ! </p>";document.getElementById('case10').innerHTML = "<h4 id='nb10'> 10 </h4> <p id='c10'> Félicitations, plus que 14 jours ! </p>";
document.getElementById('case11').innerHTML = "<h4 id='nb11'> 11 </h4> <p id='c11'> Félicitations, plus que 13 jours ! </p>";document.getElementById('case12').innerHTML = "<h4 id='nb12'> 12 </h4> <p id='c12'> Félicitations, plus que 12 jours ! </p>";
document.getElementById('case13').innerHTML = "<h4 id='nb13'> 13 </h4> <p id='c13'> Félicitations, plus que 11 jours ! </p>";document.getElementById('case14').innerHTML = "<h4 id='nb14'> 14 </h4> <p id='c14'> Félicitations, plus que 10 jours ! </p>";
document.getElementById('case15').innerHTML = "<h4 id='nb15'> 15 </h4> <p id='c15'> Félicitations, plus que 9 jours ! </p>";document.getElementById('case16').innerHTML = "<h4 id='nb16'> 16 </h4> <p id='c16'> Félicitations, plus que 8 jours ! </p>";
document.getElementById('case17').innerHTML = "<h4 id='nb17'> 17 </h4> <p id='c17'> Félicitations, plus que 7 jours ! </p>";document.getElementById('case18').innerHTML = "<h4 id='nb18'> 18 </h4> <p id='c18'> Félicitations, plus que 6 jours ! </p>";
document.getElementById('case19').innerHTML = "<h4 id='nb19'> 19 </h4> <p id='c19'> Félicitations, plus que 5 jours ! </p>";document.getElementById('case20').innerHTML = "<h4 id='nb20'> 20 </h4> <p id='c20'> Félicitations, plus que 4 jours ! </p>";
document.getElementById('case21').innerHTML = "<h4 id='nb21'> 21 </h4> <p id='c21'> Félicitations, plus que 3 jours ! </p>";document.getElementById('case22').innerHTML = "<h4 id='nb22'> 22 </h4> <p id='c22'> Félicitations, plus que 2 jours ! </p>";
document.getElementById('case23').innerHTML = "<h4 id='nb23'> 23 </h4> <p id='c23'> Félicitations, plus que 1 jour ! </p>";document.getElementById('case24').innerHTML = "<h4 id='nb24'> 24 </h4> <p id='c24'> Félicitations, c'est ce soir ! Joyeux Noël ! </p>";

if(now == '[object HTMLDivElement]1/11'){
var nbrCase=document.getElementById('case1');var nb=document.getElementById('nb1');var c=document.getElementById('c1');var caseDate=case1;var jour =localStorage.getItem('jour');var j1='jour';var j2='v1';
}else if(now == '[object HTMLDivElement]2/11'){
    var nbrCase=document.getElementById('case2');var nb=document.getElementById('nb2');var c=document.getElementById('c2');var caseDate=case2;var jour =localStorage.getItem('jour2');var j1='jour2';var j2='v2';
}else if(now == '[object HTMLDivElement]3/11'){
    var nbrCase=document.getElementById('case3');var nb=document.getElementById('nb3');var c=document.getElementById('c3');var caseDate=case3;var jour =localStorage.getItem('jour3');var j1='jour3';var j2='v3';
}else if(now == '[object HTMLDivElement]4/11'){
    var nbrCase=document.getElementById('case4');var nb=document.getElementById('nb4');var c=document.getElementById('c4');var caseDate=case4;var jour =localStorage.getItem('jour4');var j1='jour4';var j2='v4';
}else if(now == '[object HTMLDivElement]5/11'){
    var nbrCase=document.getElementById('case5');var nb=document.getElementById('nb5');var c=document.getElementById('c5');var caseDate=case5;var jour =localStorage.getItem('jour5');var j1='jour5';var j2='v5';
}else if(now == '[object HTMLDivElement]6/11'){
    var nbrCase=document.getElementById('case6');var nb=document.getElementById('nb6');var c=document.getElementById('c6');var caseDate=case6;var jour =localStorage.getItem('jour6');var j1='jour6';var j2='v6';
}else if(now == '[object HTMLDivElement]7/11'){
    var nbrCase=document.getElementById('case7');var nb=document.getElementById('nb7');var c=document.getElementById('c7');var caseDate=case7;var jour =localStorage.getItem('jour7');var j1='jour7';var j2='v7';
}else if(now == '[object HTMLDivElement]8/11'){
    var nbrCase=document.getElementById('case8');var nb=document.getElementById('nb8');var c=document.getElementById('c8');var caseDate=case8;var jour =localStorage.getItem('jour8');var j1='jour8';var j2='v8';
}else if(now == '[object HTMLDivElement]9/11'){
    var nbrCase=document.getElementById('case9');var nb=document.getElementById('nb9');var c=document.getElementById('c9');var caseDate=case9;var jour =localStorage.getItem('jour9');var j1='jour9';var j2='v9';
}else if(now == '[object HTMLDivElement]10/11'){
    var nbrCase=document.getElementById('case10');var nb=document.getElementById('nb10');var c=document.getElementById('c10');var caseDate=case10;var jour =localStorage.getItem('jour10');var j1='jour10';var j2='v10';
}else if(now == '[object HTMLDivElement]11/11'){
    var nbrCase=document.getElementById('case11');var nb=document.getElementById('nb11');var c=document.getElementById('c11');var caseDate=case11;var jour =localStorage.getItem('jour11');var j1='jour11';var j2='v11';
}else if(now == '[object HTMLDivElement]12/11'){
    var nbrCase=document.getElementById('case12');var nb=document.getElementById('nb12');var c=document.getElementById('c12');var caseDate=case12;var jour =localStorage.getItem('jour12');var j1='jour12';var j2='v12';
}else if(now == '[object HTMLDivElement]13/11'){
    var nbrCase=document.getElementById('case13');var nb=document.getElementById('nb13');var c=document.getElementById('c13');var caseDate=case13;var jour =localStorage.getItem('jour13');var j1='jour13';var j2='v13';
}else if(now == '[object HTMLDivElement]14/11'){
    var nbrCase=document.getElementById('case14');var nb=document.getElementById('nb14');var c=document.getElementById('c14');var caseDate=case14;var jour =localStorage.getItem('jour14');var j1='jour14';var j2='v14';
}else if(now == '[object HTMLDivElement]15/11'){
    var nbrCase=document.getElementById('case15');var nb=document.getElementById('nb15');var c=document.getElementById('c15');var caseDate=case15;var jour =localStorage.getItem('jour15');var j1='jour15';var j2='v15';
}else if(now == '[object HTMLDivElement]16/11'){
    var nbrCase=document.getElementById('case16');var nb=document.getElementById('nb16');var c=document.getElementById('c16');var caseDate=case16;var jour =localStorage.getItem('jour16');var j1='jour16';var j2='v16';
}else if(now == '[object HTMLDivElement]17/11'){
    var nbrCase=document.getElementById('case17');var nb=document.getElementById('nb17');var c=document.getElementById('c17');var caseDate=case17;var jour =localStorage.getItem('jour17');var j1='jour17';var j2='v17';
}else if(now == '[object HTMLDivElement]18/11'){
    var nbrCase=document.getElementById('case18');var nb=document.getElementById('nb18');var c=document.getElementById('c18');var caseDate=case18;var jour =localStorage.getItem('jour18');var j1='jour18';var j2='v18';
}else if(now == '[object HTMLDivElement]19/11'){
    var nbrCase=document.getElementById('case19');var nb=document.getElementById('nb19');var c=document.getElementById('c19');var caseDate=case19;var jour =localStorage.getItem('jour19');var j1='jour19';var j2='v19';
}else if(now == '[object HTMLDivElement]20/11'){
    var nbrCase=document.getElementById('case20');var nb=document.getElementById('nb20');var c=document.getElementById('c20');var caseDate=case20;var jour =localStorage.getItem('jour20');var j1='jour20';var j2='v20';
}else if(now == '[object HTMLDivElement]21/11'){
    var nbrCase=document.getElementById('case21');var nb=document.getElementById('nb21');var c=document.getElementById('c21');var caseDate=case21;var jour =localStorage.getItem('jour21');var j1='jour21';var j2='v21';
}else if(now == '[object HTMLDivElement]22/11'){
    var nbrCase=document.getElementById('case22');var nb=document.getElementById('nb22');var c=document.getElementById('c22');var caseDate=case22;var jour =localStorage.getItem('jour22');var j1='jour22';var j2='v22';
}else if(now == '[object HTMLDivElement]23/11'){
    var nbrCase=document.getElementById('case23');var nb=document.getElementById('nb23');var c=document.getElementById('c23');var caseDate=case23;var jour =localStorage.getItem('jour23');var j1='jour23';var j2='v23';
}else if(now == '[object HTMLDivElement]24/11'){
    var nbrCase=document.getElementById('case24');var nb=document.getElementById('nb24');var c=document.getElementById('c24');var caseDate=case20;var jour =localStorage.getItem('jour24');var j1='jour24';var j2='v24';
}

nbrCase.addEventListener('click', function(){
    if(now == caseDate){
        nb.classList.add("hide");
        c.classList.add("show");
        localStorage.setItem(j1, j2);
    }
})
if(jour !== null){
    if(jour.value === j1, j2){
            nb.classList.add("hide");
            c.classList.add("show");
    }}









