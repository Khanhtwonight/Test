

//For loop
// var myArray = [
//     'Javascript',
//     'Dart',
//     'Ruby',
//     'Nodejs',
//     'Javascript',
//     'Dart',
//     'Ruby',
//     'Nodejs',
// ];

// var arrayLength = myArray.length;
// for (var i = 7; i <  arrayLength; i++){
//     console.log(myArray[i]);
// }


//For/in loop

// var myInfo = {
//     name: 'Quoc Khanh',
//     age: '22',
//     adderss:'Q4'
// }

// for(var key in myInfo){
//     console.log(myInfo[key]);
// }

// var languages = 'Javascript';
   

// for (var key in languages){
//     console.log(languages[key]);
// }

//For/of loop

// var languages =[
//     'jacac',
//     'asdasd',
//     'addasd',
// ];

// for (var value of languages){
//     console.log(value);
// }

//While loop

// var myArray = [
//     'aisddas',
//     'asdasd',
//     'adsawd',
// ];

// var i = 0;

// while (i < myArray.length){
//     console.log(myArray[i]);
//     i++;
// }

//Do/While loop

// var i = 10;

// myArray = [
//     'asdsad',
//     'adawdwad',
//     'asdwad',
// ]

// do {
//     i++;

//     console.log(i);

// }while (i <= 150)

// Break & Continue in loop

// for (var i = 0;i < 100; i++){
    

//     if(i%2 !== 0){
//         continue;
//     }
//     console.log(i);
// }

//Vong lap long nhau - Nested loop


// var myArray =[
//     [1, 2],
//     [3, 4],
//     [5, 6],
// ]

// for (var i = 0;i < myArray.length;i++){
//      for (var j = 0;j < myArray[i].length;j++ )

//     console.log(myArray[i][j]);
// }

// 

/*
    Array methods:
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()
*/

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin:250,
    },
    {
        id: 2,
        name: 'HTML,CSS',
        coin:0,
    },
    {
        id: 3,
        name: 'Ruby',
        coin:750,
    },
];

var isFree = courses.every(function(course, index){
    return course.coin === 0;
});

console.log(isFree);