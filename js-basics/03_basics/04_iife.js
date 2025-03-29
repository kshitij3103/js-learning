//immediately invoked function expressions (iife)

(function chai (){ //named iife
    console.log(`DB Connected`)
}) (); //need semicolon to end this context


( (name=kko) =>{  //un named iife
    console.log(`DB connected ${name}`);
}) (`satish`);