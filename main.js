//Arrays
const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

////////////////
//HTML Div Installation Function
function putInHtml(answer, location) {
    let div = document.createElement("div");
    div.textContent = answer;
    document.getElementById(location).appendChild(div);
}

//#1
putInHtml(gotCitiesCSV.split(','), 'div1');


//#2
putInHtml(bestThing.split(' '), 'div2');


//#3
putInHtml(gotCitiesCSV.replace(/,/g, ';'), 'div3');


//#4
putInHtml(lotrCitiesArray.toString(','), 'div4');


//#5
putInHtml(lotrCitiesArray.slice(0, 5), 'div5');


//#6
putInHtml(lotrCitiesArray.slice(3, 8), 'div6');


//#7
putInHtml(lotrCitiesArray.slice(2, 5), 'div7');

//#8
let remoRoha = lotrCitiesArray.splice(2,1);
putInHtml(lotrCitiesArray, 'div8');


//#9
let afterDead = lotrCitiesArray.splice(5,2);
putInHtml(lotrCitiesArray, 'div9');


//#10
let adddRoh = lotrCitiesArray.splice(2,0, "Rohan");
putInHtml(lotrCitiesArray, 'div10');


//#11
let = renEst = lotrCitiesArray.splice(5,1, "Deadest Marshes");
putInHtml(lotrCitiesArray, 'div11');


//#12

putInHtml(lotrCitiesArray, 'div12');



    // var senTins = bestThing.split(' ');
    // div = document.createElement("div");
    // div.textContent = senTins;
    // document.body.appendChild(div2);
