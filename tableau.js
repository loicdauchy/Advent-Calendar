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
for(var i = 0; i < 24; i++){
  calendrier[i]= "<div id='"+[i+1]+"'class='case'></div>";
}

var gift = new Array();
for(var i = 0; i < 24; i++){
  gift[i]= "<a id='g"+[i+1]+"' href=''><i class='bx bxs-gift'></i></a>";
}

var gif = new Array();
for(var i = 0; i < 24; i++){
  gif[i]= "<img class='imgGift' src='img/image"+[i+1]+".gif'>";
}

