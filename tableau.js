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
var calendrier = new Array();
calendrier[0]= "<div id='1'class='case'></div>";calendrier[1]= "<div id='2'class='case'></div>";calendrier[2]= "<div id='3'class='case'></div>";
calendrier[3]= "<div id='4'class='case'></div>";calendrier[4]= "<div id='5'class='case'></div>";calendrier[5]= "<div id='6'class='case'></div>";
calendrier[6]= "<div id='7'class='case'></div>";calendrier[7]= "<div id='8'class='case'></div>";calendrier[8]= "<div id='9'class='case'></div>";
calendrier[9]= "<div id='10'class='case'></div>";calendrier[10]= "<div id='11'class='case'></div>";calendrier[11]= "<div id='12'class='case'></div>";
calendrier[12]= "<div id='13'class='case'></div>";calendrier[13]= "<div id='14'class='case'></div>";calendrier[14]= "<div id='15'class='case'></div>";
calendrier[15]= "<div id='16'class='case'></div>";calendrier[16]= "<div id='17'class='case'></div>";calendrier[17]= "<div id='18'class='case'></div>";
calendrier[18]= "<div id='19'class='case'></div>";calendrier[19]= "<div id='20'class='case'></div>";calendrier[20]= "<div id='21'class='case'></div>";
calendrier[21]= "<div id='22'class='case'></div>";calendrier[22]= "<div id='23'class='case'></div>";calendrier[23]= "<div id='24'class='case'></div>"; 

var gift = [
    ['coucou'],['coucou2'], ['coucou3'],['coucou4'],['coucou5'],['coucou6'],['coucou7'],['coucou8'],['coucou9'],['coucou10'],['coucou11'],['coucou12'],['coucou13'],['coucou14'],['coucou15'],['coucou16'],['coucou17'],['coucou18'],['coucou19'],['coucou20'],['coucou21'],['coucou22'],['coucou23'],['coucou24']
];

