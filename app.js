let calendar = document.getElementById('calendar');
var calen = shuffle(calendrier);
calendar.innerHTML = calen;
var localCalenGet = localStorage.getItem('');
    if(localCalenGet !== null){   
        calendar.innerHTML = localCalenGet;           
    }
var cases = document.getElementsByClassName('case');
var date = new Date();
var now = date.getDate();
var month = date.getMonth();
var elId = '';
for(var i = 0; i <= 24; i++){
    elId = cases[i].id;
    cases[i].innerHTML = "<h4 id='nb"+elId+"'>"+elId+" </h4> <p id='c"+elId+"'>"+gift[i]+"</p>";
    console.log(cases[i].innerHTML);
    cases[i].addEventListener('click', function(){
        if(now == elId){           
            document.getElementById('nb'+elId).classList.add("hide");
            document.getElementById('c'+elId).classList.add("show");
            localStorage.setItem('jour'+elId, 'v'+elId);
            if(localCalenGet === null){
               localStorage.setItem('', calen);
            }}        
})
var jour = localStorage.getItem('jour'+elId);
if(jour !== null){
    if(jour.value === 'jour'+elId, 'v'+elId){
            document.getElementById('nb'+elId).classList.add("hide");
            document.getElementById('c'+elId).classList.add("show");
    }}
}












