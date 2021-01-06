let calendar = document.getElementById('calendar');
var calen = shuffle(calendrier);
calendar.innerHTML = calen.join("");
var localCalenGet = localStorage.getItem('');
    if(localCalenGet !== null){   
        calendar.innerHTML = localCalenGet;           
    }
var cases = document.getElementsByClassName('case');
var date = new Date();
var now = date.getDate();
var month = date.getMonth();
var elId = '';
for(var i = 0; i < 24; i++){
    elId = cases[i].id;
    cases[i].innerHTML = "<h4 id='nb"+elId+"'>"+elId+"</h4><p id='c"+elId+"'>"+gift[i]+"</p>";
    document.getElementById(elId).onclick = makeOnClickCallback(i);
    document.getElementById("g"+[i+1]).onclick = makeOnClickCallback2(i);
    
var jour = localStorage.getItem('jour'+elId);
if(jour !== null){
    if(jour.value === 'jour'+elId, 'v'+elId){
            document.getElementById('nb'+elId).classList.add("hide");
            document.getElementById('c'+elId).classList.add("show");
            document.getElementById(elId).classList.add('check');
    }}
}
function makeOnClickCallback(i) {  
    return function() {  
        elIds = cases[i].id;
        if(now >= elIds){           
            document.getElementById('nb'+elIds).classList.add("hide");
            document.getElementById('c'+elIds).classList.add("show");
            document.getElementById(elIds).classList.add('check');
            localStorage.setItem('jour'+elIds, 'v'+elIds);
            if(localCalenGet === null){
               localStorage.setItem('', calen.join(""));
            }
        }                     
       return false;
    };  
 }
 function makeOnClickCallback2(i) {  
    return function() { 
        document.getElementById('modals').innerHTML = "<div class='modalsContent'>"+gif[i]+"<div id='close"+[i]+"'><i class='close bx bxs-x-circle'></i></div></div>";
        document.getElementById('modals').classList.add('show');
        document.getElementById('close'+[i]).addEventListener('click', function(){
            document.getElementById('modals').classList.remove('show');
        })                 
       return false;
    };  
 } 


















