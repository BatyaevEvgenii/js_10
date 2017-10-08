'use strict';
// https://learnxinyminutes.com/docs/ru-ru/javascript-ru/


/* let e = "test" + s;
let f = `test ${s}`;
let s = "Hi ";
let y = 'Moi';
 */

 /* function testIF(a){
     if ((a > 5) && (a < 9)) {
        console.log(">5 and <9")
     }else{
         console.log("other")
     }
 } */

 function test(a) {
     /* let res */
     switch (a) {
         case 3:
             /* res = true */
             console.log(3)
             break;
         case 5:
            /* res = true */
            console.log(5)
            break;
         default:
             /* res = false */
     }
     /* return res */
 }


 /* function loops() {
     let x = 0
     while (x<9) {
         console.log(x)
         x++
     }
 }

 function beta() {
     for (let cnt = 0; cnt < 10; cnt+=2) {
         console.log(cnt)
         
     }
 } */

/* let fun = function () {
    for (let i=0; i<1000; i++){

        i%21===0 ? console.log(i) : undefined;
}
} */
let fun = function () {
    let x = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cupiditate numquam excepturi sapiente.'
    /* let res = 0
    for (let i = 0; i <= x.length; i++) { */
       /*  if (x[i]==="o" || x[i]==="a") {
            res++
        } */
        /* res += (x[i]==="o" || x[i]==="a") ? 1 : 0

    } */

/* let arr = x
    .split('')
    .map((el)=>{
        return el === 'o' || el ==='a' ? 1 : 0
    })
    .filter(el=>el).length

    console.log(x)
    console.log(arr)
} */




/* let obj = {
    red : "color",
    getRed : function (){
        console.log(this)
        return this.red
    },
    getRed2:()=>{
        console.log(this)
        return this.red
    }
} */

class Red {
    constructor(a, v){
        this.test = a
        this.fire = v
    }
}


function red (a, v){
    this.test = a
    this.fire = v
}

red.prototype = {
    getTest: function(){
        return this.test
    },
    getFire: function(){
        return this.fire
    },
    Field: "Test Field"
}


class RR extends Red{
    
}

