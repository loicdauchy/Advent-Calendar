let calendar = document.getElementById('calendar');
var calendrier = new Array();
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
    return array;
  }

var calen = shuffle(calendrier);

calendar.innerHTML = calen.join('');

var localCalenGet = localStorage.getItem('');
    if(localCalenGet !== null){   
        calendar.innerHTML = localCalenGet;           
    }


var cases = document.getElementsByClassName('case');

var case1 = document.getElementById('case1') + '1/11';let case2 = document.getElementById('case2') + '2/11';let case3 = document.getElementById('case3') + '3/11';
let case4 = document.getElementById('case4') + '4/11';let case5 = document.getElementById('case5') + '5/11';let case6 = document.getElementById('case6') + '6/11';
let case7 = document.getElementById('case7') + '7/11';let case8 = document.getElementById('case8') + '8/11';let case9 = document.getElementById('case9') + '9/11';
let case10 = document.getElementById('case10') + '10/11';let case11 = document.getElementById('case11') + '11/11';let case12 = document.getElementById('case12') + '12/11';
let case13 = document.getElementById('case13') + '13/11';let case14 = document.getElementById('case14') + '14/11';let case15 = document.getElementById('case15') + '15/11';
let case16 = document.getElementById('case16') + '16/11';let case17 = document.getElementById('case17') + '17/11';let case18 = document.getElementById('case18') + '18/11';
let case19 = document.getElementById('case19') + '19/11';let case20 = document.getElementById('case20') + '20/11';let case21 = document.getElementById('case21') + '21/11';
let case22 = document.getElementById('case22') + '22/11';let case23 = document.getElementById('case23') + '23/11';let case24 = document.getElementById('case24') + '24/11';

let date = new Date();
let now = '[object HTMLDivElement]'+date.getDate()+'/'+date.getMonth();

// for(var i = 0; i <= calen.length; i++){
//     cases[i].innerHTML = "<h4 id='nb"+[i]+"'>"+[i]+" </h4> <p id='c"+[i]+"'> Félicitations, plus que 23 jours ! </p>";
    

//     cases[i].addEventListener('click', function(){
//         if(now == case1){
//             document.getElementById('nb1').classList.add("hide");
//             document.getElementById('c1').classList.add("show");
//             localStorage.setItem('jour'+[i], 'v'+[i]);
           
//         }
// })
// var jour = localStorage.getItem('jour');
// if(jour !== null){
//     if(jour.value === 'jour', 'v1'){
//             document.getElementById('nb1').classList.add("hide");
//             document.getElementById('c1').classList.add("show");
//     }}
// }
document.getElementById('case1').innerHTML = "<h4 id='nb1'> 1 </h4> <p id='c1'> Félicitations, plus que 23 jours ! </p>";

document.getElementById('case1').addEventListener('click', function(){
    if(now == case1){
        document.getElementById('nb1').classList.add("hide");
        document.getElementById('c1').classList.add("show");
        localStorage.setItem('jour', 'v1');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})

var jour = localStorage.getItem('jour');
if(jour !== null){
if(jour.value === 'jour', 'v1'){
        document.getElementById('nb1').classList.add("hide");
        document.getElementById('c1').classList.add("show");
}}



document.getElementById('case2').innerHTML = "<h4 id='nb2'> 2 </h4> <p id='c2'> Félicitations, plus que 22 jours ! </p>";

document.getElementById('case2').addEventListener('click', function(){
    if(now == case2){
        document.getElementById('nb2').classList.add("hide");
        document.getElementById('c2').classList.add("show");
        localStorage.setItem('jour2', 'v2');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }      
    }
})
var jour2 = localStorage.getItem('jour2');
if(jour2 !== null){
if(jour2.value === 'jour2', 'v2'){
        document.getElementById('nb2').classList.add("hide");
        document.getElementById('c2').classList.add("show");
}}



document.getElementById('case3').innerHTML = "<h4 id='nb3'> 3 </h4> <p id='c3'> Félicitations, plus que 21 jours ! </p>";

document.getElementById('case3').addEventListener('click', function(){
    if(now == case3){
        document.getElementById('nb3').classList.add("hide");
        document.getElementById('c3').classList.add("show");
        localStorage.setItem('jour3', 'v3');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour3 = localStorage.getItem('jour3');
if(jour3 !== null){
if(jour3.value === 'jour3', 'v3'){   
        document.getElementById('nb3').classList.add("hide");
        document.getElementById('c3').classList.add("show");        
}}


document.getElementById('case4').innerHTML = "<h4 id='nb4'> 4 </h4> <p id='c4'> Félicitations, plus que 20 jours ! </p>";

document.getElementById('case4').addEventListener('click', function(){
    if(now == case4){
        document.getElementById('nb4').classList.add("hide");
        document.getElementById('c4').classList.add("show");
        localStorage.setItem('jour4', 'v4');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour4 = localStorage.getItem('jour4');
if(jour4 !== null){
if(jour4.value === 'jour4', 'v4'){
        document.getElementById('nb4').classList.add("hide");
        document.getElementById('c4').classList.add("show");
}}




document.getElementById('case5').innerHTML = "<h4 id='nb5'> 5 </h4> <p id='c5'> Félicitations, plus que 19 jours ! </p>";

document.getElementById('case5').addEventListener('click', function(){
    if(now == case5){
        document.getElementById('nb5').classList.add("hide");
        document.getElementById('c5').classList.add("show");
        localStorage.setItem('jour5', 'v5');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour5 = localStorage.getItem('jour5');
if(jour5 !== null){
if(jour5.value === 'jour5', 'v5'){
        document.getElementById('nb5').classList.add("hide");
        document.getElementById('c5').classList.add("show");
}}




document.getElementById('case6').innerHTML = "<h4 id='nb6'> 6 </h4> <p id='c6'> Félicitations, plus que 18 jours ! </p>";

document.getElementById('case6').addEventListener('click', function(){
    if(now == case6){
        document.getElementById('nb6').classList.add("hide");
        document.getElementById('c6').classList.add("show");
        localStorage.setItem('jour6', 'v6');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour6 = localStorage.getItem('jour6');
if(jour6 !== null){
if(jour6.value === 'jour6', 'v6'){
        document.getElementById('nb6').classList.add("hide");
        document.getElementById('c6').classList.add("show");
}}




document.getElementById('case7').innerHTML = "<h4 id='nb7'> 7 </h4> <p id='c7'> Félicitations, plus que 17 jours ! </p>";

document.getElementById('case7').addEventListener('click', function(){
    if(now == case7){
        document.getElementById('nb7').classList.add("hide");
        document.getElementById('c7').classList.add("show");
        localStorage.setItem('jour7', 'v7');
        if(localCalenGet === null){
            localStorage.setItem('', calen.join(''));
            }  
    }
})
var jour7 = localStorage.getItem('jour7');
if(jour7 !== null){
if(jour7.value === 'jour7', 'v7'){
        document.getElementById('nb7').classList.add("hide");
        document.getElementById('c7').classList.add("show");
}}




document.getElementById('case8').innerHTML = "<h4 id='nb8'> 8 </h4> <p id='c8'> Félicitations, plus que 16 jours ! </p>";

document.getElementById('case8').addEventListener('click', function(){
    if(now == case8){
        document.getElementById('nb8').classList.add("hide");
        document.getElementById('c8').classList.add("show");
        localStorage.setItem('jour8', 'v8');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour8 = localStorage.getItem('jour8');
if(jour8 !== null){
if(jour8.value === 'jour8', 'v8'){
        document.getElementById('nb8').classList.add("hide");
        document.getElementById('c8').classList.add("show");
}}




document.getElementById('case9').innerHTML = "<h4 id='nb9'> 9 </h4> <p id='c9'> Félicitations, plus que 15 jours ! </p>";

document.getElementById('case9').addEventListener('click', function(){
    if(now == case9){
        document.getElementById('nb9').classList.add("hide");
        document.getElementById('c9').classList.add("show");
        localStorage.setItem('jour9', 'v9');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour9 = localStorage.getItem('jour9');
if(jour9 !== null){
if(jour9.value === 'jour9', 'v9'){
        document.getElementById('nb9').classList.add("hide");
        document.getElementById('c9').classList.add("show");
}}




document.getElementById('case10').innerHTML = "<h4 id='nb10'> 10 </h4> <p id='c10'> Félicitations, plus que 14 jours ! </p>";

document.getElementById('case10').addEventListener('click', function(){
    if(now == case10){
        document.getElementById('nb10').classList.add("hide");
        document.getElementById('c10').classList.add("show");
        localStorage.setItem('jour10', 'v10');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour10 = localStorage.getItem('jour10');
if(jour10 !== null){
if(jour10.value === 'jour10', 'v10'){
        document.getElementById('nb10').classList.add("hide");
        document.getElementById('c10').classList.add("show");
}}




document.getElementById('case11').innerHTML = "<h4 id='nb11'> 11 </h4> <p id='c11'> Félicitations, plus que 13 jours ! </p>";

document.getElementById('case11').addEventListener('click', function(){
    if(now == case11){
        document.getElementById('nb11').classList.add("hide");
        document.getElementById('c11').classList.add("show");
        localStorage.setItem('jour11', 'v11');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour11 = localStorage.getItem('jour11');
if(jour11 !== null){
if(jour11.value === 'jour11', 'v11'){
        document.getElementById('nb11').classList.add("hide");
        document.getElementById('c11').classList.add("show");
}}




document.getElementById('case12').innerHTML = "<h4 id='nb12'> 12 </h4> <p id='c12'> Félicitations, plus que 12 jours ! </p>";

document.getElementById('case12').addEventListener('click', function(){
    if(now == case12){
        document.getElementById('nb12').classList.add("hide");
        document.getElementById('c12').classList.add("show");
        localStorage.setItem('jour12', 'v12');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour12 = localStorage.getItem('jour12');
if(jour12 !== null){
if(jour12.value === 'jour12', 'v12'){
        document.getElementById('nb12').classList.add("hide");
        document.getElementById('c12').classList.add("show");
}}




document.getElementById('case13').innerHTML = "<h4 id='nb13'> 13 </h4> <p id='c13'> Félicitations, plus que 11 jours ! </p>";

document.getElementById('case13').addEventListener('click', function(){
    if(now == case13){
        document.getElementById('nb13').classList.add("hide");
        document.getElementById('c13').classList.add("show");
        localStorage.setItem('jour13', 'v13');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour13 = localStorage.getItem('jour13');
if(jour13 !== null){
if(jour13.value === 'jour13', 'v13'){
        document.getElementById('nb13').classList.add("hide");
        document.getElementById('c13').classList.add("show");
}}





document.getElementById('case14').innerHTML = "<h4 id='nb14'> 14 </h4> <p id='c14'> Félicitations, plus que 10 jours ! </p>";

document.getElementById('case14').addEventListener('click', function(){
    if(now == case14){
        document.getElementById('nb14').classList.add("hide");
        document.getElementById('c14').classList.add("show");
        localStorage.setItem('jour14', 'v14');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour14 = localStorage.getItem('jour14');
if(jour14 !== null){
if(jour14.value === 'jour14', 'v14'){
        document.getElementById('nb14').classList.add("hide");
        document.getElementById('c14').classList.add("show");
}}




document.getElementById('case15').innerHTML = "<h4 id='nb15'> 15 </h4> <p id='c15'> Félicitations, plus que 9 jours ! </p>";

document.getElementById('case15').addEventListener('click', function(){
    if(now == case15){
        document.getElementById('nb15').classList.add("hide");
        document.getElementById('c15').classList.add("show");
        localStorage.setItem('jour15', 'v15');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour15 = localStorage.getItem('jour15');
if(jour15 !== null){
if(jour15.value === 'jour15', 'v15'){
        document.getElementById('nb15').classList.add("hide");
        document.getElementById('c15').classList.add("show");
}}





document.getElementById('case16').innerHTML = "<h4 id='nb16'> 16 </h4> <p id='c16'> Félicitations, plus que 8 jours ! </p>";

document.getElementById('case16').addEventListener('click', function(){
    if(now == case16){
        document.getElementById('nb16').classList.add("hide");
        document.getElementById('c16').classList.add("show");
        localStorage.setItem('jour16', 'v16');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour16 = localStorage.getItem('jour16');
if(jour16 !== null){
if(jour16.value === 'jour16', 'v16'){
        document.getElementById('nb16').classList.add("hide");
        document.getElementById('c16').classList.add("show");
}}




document.getElementById('case17').innerHTML = "<h4 id='nb17'> 17 </h4> <p id='c17'> Félicitations, plus que 7 jours ! </p>";

document.getElementById('case17').addEventListener('click', function(){
    if(now == case17){
        document.getElementById('nb17').classList.add("hide");
        document.getElementById('c17').classList.add("show");
        localStorage.setItem('jour17', 'v17');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour17 = localStorage.getItem('jour17');
if(jour17 !== null){
if(jour17.value === 'jour17', 'v17'){
        document.getElementById('nb17').classList.add("hide");
        document.getElementById('c17').classList.add("show");
}}




document.getElementById('case18').innerHTML = "<h4 id='nb18'> 18 </h4> <p id='c18'> Félicitations, plus que 6 jours ! </p>";

document.getElementById('case18').addEventListener('click', function(){
    if(now == case18){
        document.getElementById('nb18').classList.add("hide");
        document.getElementById('c18').classList.add("show");
        localStorage.setItem('jour18', 'v18');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour18 = localStorage.getItem('jour18');
if(jour18 !== null){
if(jour18.value === 'jour18', 'v18'){
        document.getElementById('nb18').classList.add("hide");
        document.getElementById('c18').classList.add("show");
}}




document.getElementById('case19').innerHTML = "<h4 id='nb19'> 19 </h4> <p id='c19'> Félicitations, plus que 5 jours ! </p>";

document.getElementById('case19').addEventListener('click', function(){
    if(now == case19){
        document.getElementById('nb19').classList.add("hide");
        document.getElementById('c19').classList.add("show");
        localStorage.setItem('jour19', 'v19');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour19 = localStorage.getItem('jour19');
if(jour19 !== null){
if(jour19.value === 'jour19', 'v19'){
        document.getElementById('nb19').classList.add("hide");
        document.getElementById('c19').classList.add("show");
}}




document.getElementById('case20').innerHTML = "<h4 id='nb20'> 20 </h4> <p id='c20'> Félicitations, plus que 4 jours ! </p>";

document.getElementById('case20').addEventListener('click', function(){
    if(now == case20){
        document.getElementById('nb20').classList.add("hide");
        document.getElementById('c20').classList.add("show");
        localStorage.setItem('jour20', 'v20');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour20 = localStorage.getItem('jour20');
if(jour20 !== null){
if(jour20.value === 'jour20', 'v20'){
        document.getElementById('nb20').classList.add("hide");
        document.getElementById('c20').classList.add("show");
}}




document.getElementById('case21').innerHTML = "<h4 id='nb21'> 21 </h4> <p id='c21'> Félicitations, plus que 3 jours ! </p>";

document.getElementById('case21').addEventListener('click', function(){
    if(now == case21){
        document.getElementById('nb21').classList.add("hide");
        document.getElementById('c21').classList.add("show");
        localStorage.setItem('jour21', 'v21');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour21 = localStorage.getItem('jour21');
if(jour21 !== null){
if(jour21.value === 'jour21', 'v21'){
        document.getElementById('nb21').classList.add("hide");
        document.getElementById('c21').classList.add("show");
}}




document.getElementById('case22').innerHTML = "<h4 id='nb22'> 22 </h4> <p id='c22'> Félicitations, plus que 2 jours ! </p>";

document.getElementById('case22').addEventListener('click', function(){
    if(now == case22){
        document.getElementById('nb22').classList.add("hide");
        document.getElementById('c22').classList.add("show");
        localStorage.setItem('jour22', 'v22');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour22 = localStorage.getItem('jour22');
if(jour22 !== null){
if(jour22.value === 'jour22', 'v22'){
        document.getElementById('nb22').classList.add("hide");
        document.getElementById('c22').classList.add("show");
}}




document.getElementById('case23').innerHTML = "<h4 id='nb23'> 23 </h4> <p id='c23'> Félicitations, plus que 1 jour ! </p>";

document.getElementById('case23').addEventListener('click', function(){
    if(now == case23){
        document.getElementById('nb22').classList.add("hide");
        document.getElementById('c23').classList.add("show");
        localStorage.setItem('jour23', 'v23');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour23 = localStorage.getItem('jour23');
if(jour23 !== null){
if(jour23.value === 'jour23', 'v23'){
        document.getElementById('nb23').classList.add("hide");
        document.getElementById('c23').classList.add("show");
}}




document.getElementById('case24').innerHTML = "<h4 id='nb24'> 24 </h4> <p id='c24'> Félicitations, joyeux noël ! </p>";

document.getElementById('case24').addEventListener('click', function(){
    if(now == case24){
        document.getElementById('nb24').classList.add("hide");
        document.getElementById('c24').classList.add("show");
        localStorage.setItem('jour24', 'v24');
        if(localCalenGet === null){
            localStorage.setItem('', calen);
            }  
    }
})
var jour24 = localStorage.getItem('jour24');
if(jour24 !== null){
if(jour24.value === 'jour24', 'v24'){
        document.getElementById('nb24').classList.add("hide");
        document.getElementById('c24').classList.add("show");
}}









