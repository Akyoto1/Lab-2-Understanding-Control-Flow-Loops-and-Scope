console.log("Hello");

let number = 40

if (number > 0) {
console.log('number is greater than 12');
}
else if (number < 0) {
console.log('number is not greater than 12')
   }
  else (number == 0)
   {
      console.log('number is 0')
   }


var day='1';
   switch(day) {
    case '1':
        console.log('Sunday');
        break;
    case '2':
        console.log('Monday');
        break;
    case '3':
        console.log('Tuesday');
        break;
    case '4':
        console.log('Wednesday');
        break;
    case '5':
        console.log('Thursday');
        break;
    case '6':
            console.log('Friday');
            break;
    case '7':
        console.log('Saturday');
        break;
                            
    default:
        console.log('Unknown day');
}
   


for (let i = 1; i<=5; i++) {
    console.log(i);
}


let i = 1;
while ( i<=5) {
    console.log(i); 
    i++;
}
    


   let j = 1;
   do {
    console.log(j);
    j++;
   }
   while (j <= 5);
   

   for (let i = 1; i <= 5; i++) {
    console.log(i);
if (i === 3)
break;
    }
  


    let globalVar = "Global";
 console.log(globalVar);
    function scopeExample() {
        let localVar = "I'm local!";
        console.log(localVar);
     
    }
  