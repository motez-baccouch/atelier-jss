var diff=parseInt(prompt("donner le niveau de difficulté 1:facile 2:moyenne 3:difficile"));
if(diff>3)diff=3;
var nbr=Math.floor(Math.random()*10);
var count=Math.abs(diff-4);
console.log(nbr);
 
function again(){
    if(confirm("voulez vous repetez le jeu ^^ ?")){location.reload();}
}


while(count!=0){
        var a=parseInt(prompt("guess the number(between 0-10"));
        if(a==nbr-1 || a==nbr+1){alert("tu es proche");}
        if(a==nbr){alert("great work you guessed it right:"+nbr);
        again();
}
            count--;
    }
    alert("sorry for you :'( maybe next time, the number was"+nbr);
    again();


