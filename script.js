function vowelcount(str){
   count=0
// ver-1
//   for(let i = 0; i< str.length; i++){


//    if (str[i]=="a" || str[i]=="e" || str[i] == "u" || str[i]=="o" || str[i] =="i") {
//       count +=1
//    }
//   }

//   return count
// }


// ver-2

let unlilar="aeuio"


for(let i = 0; i< str.length; i++){
   if(unlilar.includes(str[i])){
      count +=1
   }
}

return count
}


console.log(vowelcount("Asadbek".toLowerCase()));




























