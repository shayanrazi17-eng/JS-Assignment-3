// Chapter 14-16


// 1) var studentNames = [];

// 2) var studentNames = new Array();

// 3) var stringArray = ["Akshay ", "Ali ", "Qasim ", "Talah"];

// 4) var numArray = [5 , 8 , 9 , 15, 2006];

// 5) var booleanArray = [false , true , undefined , NaN];

// 6) var mixedArray = ["Akshay", "9000" , true];

// 7) var educationQualifications = ["SSC ", "HSC ", "MBA ", "BSSE ","BCOM ","MS"];
// document.writeln(
// `
// <h3> Qualification </h3>
// 1) ${educationQualifications[0]} <br>
// 1) ${educationQualifications[1]} <br>
// 2) ${educationQualifications[2]} <br>
// 3) ${educationQualifications[3]} <br>
// 4) ${educationQualifications[4]} <br>
// 5) ${educationQualifications[5]} 
// `
// )


// 8) var student = ["Michael ", "John ", "Tony"];
// var score = [320, 230, 480];
// var percentage = [((score[0] / 500) * 100), ((score[1] / 500) * 100), ((score[2] / 500) * 100)];

// document.writeln(
// `
// Score of ${student[0]} is ${score[0]}. Percentage: ${percentage[0]} <br>
// Score of ${student[1]} is ${score[1]}. Percentage: ${percentage[1]} <br>
// Score of ${student[2]} is ${score[2]}. Percentage: ${percentage[2]} 
// `
// )



// 9) var colors = ["White ","Black ", "Red ","Green ","Blue ", "Yellow"];

// a) var colorAtBegining = prompt("What color you want to add to the beginning of the array");
// colors.unshift(colorAtBegining);

// b) var colorAtEnd = prompt("What color you want to add to the end of the array");
// colors.push(colorAtEnd);

// c) colors.unshift("Gray ", "Pink");

// d) colors.shift();

// e)colors.pop();

// f) var index = +prompt("Enter the index where you want to add a color:");
// var colorName = prompt("Enter the color name:");
// colors.splice(index, 0 , colorName);

// g) var index = +prompt("Enter the index where you want to add a color:");
// var deleteCount = +prompt("Enter how many colors you want to delete:");
// colors.splice(index, deleteCount);

// document.writeln(colors)


/* Incompleted
10) var score = [320, 230, 480, 120];
var orderedScore = [score.sort()];

document.writeln(
    `
    Score of Students : ${score} <br>
    Ordered Scores of Student : 
    `
*/



// 11) var cities = ["Karachi ", "Lahore ", "Islamabad ", "Quetta ", "Peshawar"];
// var selectedCities = cities.slice(2, 5);

// document.writeln(
// `
// Cities list: <br>
// ${cities} <br> <br>

// Selected cities list: <br>
// ${selectedCities}
// `
// )



// 12) var arr = ["This ", " is ", " my ", " cat"];

// var arrJoined = arr.join(""); // This Array’s join method uses (join("") combines all array elements into one string)

// document.writeln(
//     `
//    <h2> Array: <br> ${arr} </h2>
//    <h2> Joined Array: <br> ${arrJoined} </h2> 
//     `
// )



// 13)
// FIFO (First In, First Out), FIFO is a way of processing or accessing items in the order they were added. The first item you add to the collection is the first one to be removed. Think of it like a queue in real life (like people standing in line at a ticket counter). Use devices.shift() to remove the first element.
// var devices = [];
// devices[0] = ("keyboard");
// devices[1] = ("mouse");
// devices[2] = ("monitor");
// devices[3] = ("CPU");

// document.writeln(
//     `
//     Devices: <br>
//     ${devices} 
//     <br><br>

//     Out: <br>
//     ${devices[0]} <br>

//     Out: <br>
//     ${devices[1]} <br>

//     Out: <br>
//     ${devices[2]} <br>

//     Out: <br>
//     ${devices[3]} <br>
//     `
// )





// 14)
// LIFO (Last In, First Out), LIFO is a way of accessing items in reverse order. The last item added is the first one to be removed. Think of it like a stack of plates: 1) You put a plate on top → last plate in. 2) When you take a plate → the top plate comes out first. Use devices.pop() to remove the Last element.
// var devices = [];
// devices[0] = ("keyboard");
// devices[1] = ("mouse");
// devices[2] = ("monitor");
// devices[3] = ("CPU");

// document.writeln(
//     `
//     Devices: <br>
//     ${devices} 
//     <br><br>

//     Out: <br>
//     ${devices[3]} <br>

//     Out: <br>
//     ${devices[2]} <br>

//     Out: <br>
//     ${devices[1]} <br>

//     Out: <br>
//     ${devices[0]} <br>
//     `
// ) 



// 15) var drop = ["Apple","Samsung","Motorola","Nokia","Sony"," Haier"];
// document.writeln(
//     `
//     <h3> Phone manufacturers </h3>
//     <select id="phoneSelect">
// <option> ${drop[0]} </option> 
// <option> ${drop[1]} </option> 
// <option> ${drop[2]} </option> 
// <option> ${drop[3]} </option> 
// <option> ${drop[4]} </option> 
// <option> ${drop[5]} </option> 
//     </select>
//     `
// )
// document.getElementById("phoneSelect").style.width = "169px";




