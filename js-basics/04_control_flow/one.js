if(2=='2'){  // checks only value
    console.log("done");
    
}
if(2==='2'){ //checks type too
    console.log(yes);
    
}
else{
    console.log("no");
    
}

//+++++++++++++++++++++++++++SWITCH CASE++++++++++++++++++++++++++++++

// // switch (key){
// case  value:
//     break;

//     default :
//     break;
   

// }

const month=3;
switch (month) {
    case 1:
        console.log("january");
        
        
        break;
    case 2:
        console.log("feb");
        
        
        break;

    default:
        console.log("default match ");
        
        break;
}

// +++++++++++++++NULLISH COALESCING OPERATOR (??) : NULL UNDEFINED

let val1;
val1= null ?? null ??10

console.log(val1);

// Terniary Operator

//condition ? true : false
const val=10;

val>40 ?console.log('kk') : console.log("00"); 



