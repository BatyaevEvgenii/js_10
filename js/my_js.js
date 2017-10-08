"use strict";
// https://learnxinyminutes.com/docs/ru-ru/javascript-ru/
// https://git-scm.com/
// https://learn.javascript.ru/
// https://developer.mozilla.org/ru/docs/Web/JavaScript
// https://jsonplaceholder.typicode.com/


function triangle() {
    for (let line = "#"; line.length < 8; line += "#")
        console.log(line);
}

function test2() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0)
            console.log("fizzbuzz")
        else if (i % 5 === 0)
            console.log("buzz")
        else if (i % 3 === 0)
            console.log("fizz")
        else
            console.log(i)
    }
}


function chess() {
    let size = 8;
    let board = "";
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0)
                board += " ";
            else
                board += "#";
        }
        board += "\n";
    }
    console.log(board);
}

function min(x, y) {
    if (x < y)
        console.log("min=", x)
    else
        console.log("min=", y)
}

function find(start) {
    if (start == 1)
        console.log("false");
    else if (start == 0)
        console.log("true");
    else
        return find((start - 2));
}


function countBs(x) {
    let res = 0
    for (let i = 0; i <= x.length; i++) {
        if (x[i] === "B")
            res++
    }
    console.log(x);
    console.log(res)

}

function countChar(x, y) {
    let res = 0
    for (let i = 0; i <= x.length; i++) {
        if (x[i] === y)
            res++
    }
    console.log(x);
    console.log(res);
}


function range(start, end) {
    let arrayT = [];
    for (let i = start; i <= end; i++) {
        arrayT.push(i);
    }
    console.log(arrayT);
    const result = arrayT.reduce((a, b) => a + b, 0);
    console.log(result);
}

function reverseArray(a, b, c){
    let arrayA = [];
    arrayA.push(a, b, c);
    console.log(arrayA);

}