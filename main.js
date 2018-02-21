//Arrays
const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

///////////////////////////////////////////////////////////////////
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
putInHtml(bestThing.slice(0, 14), 'div12');


//#13
putInHtml(bestThing.slice(-12), 'div13');


//#14
putInHtml(bestThing.slice(23, 38), 'div14');


//#15
putInHtml(bestThing.substring(69, 82), 'div15');


//#16
putInHtml(bestThing.substring(23, 38), 'div16');


//#17
putInHtml(bestThing.indexOf("only"), 'div17');


//#18
putInHtml(bestThing.indexOf("bit"), 'div18');


//#19
let gotCitiesArray = gotCitiesCSV.split( ",");
let matchCities = [];
let vowels = ["aa", "ee", "ii", "oo", "uu"];
for(var i = 0; i < gotCitiesArray.length; i++){
    var city = gotCitiesArray[i];
    for(var t = 0; t < vowels.length; t++){
        var vow = vowels[t];
        if(city.includes(vow)) {
            matchCities.push(city)
        }
    }
}
putInHtml(matchCities, 'div19'); 


//#20
let endCities = [];
let enders = ["or"];
for(var i = 0; i < lotrCitiesArray.length; i++){
    var city = lotrCitiesArray[i];
    for(var t = 0; t < enders.length; t++){
        var end = enders[t];
        if(city.includes(end)) {
            endCities.push(city)
        }
    }
}
putInHtml(endCities, 'div20'); 


//#21
let bestThingArray = bestThing.split(" ");
let besT = [];
let starT = ["b"];
for(var i = 0; i < bestThingArray.length; i++){
    var thin = bestThingArray[i];
    for(var t = 0; t < starT.length; t++){
        var beg = starT[t];
        if(thin.includes(beg)) {
            besT.push(thin)
        }
    }
}
putInHtml(besT, 'div21'); 


//#22
let yeahNeah = lotrCitiesArray.includes("Mirkwood");
    if(yeahNeah == true){
        x = "Yes";
    } else {
        x = "No";
    }
putInHtml(x, 'div22');


//#23
let yeahNeahTo = lotrCitiesArray.includes("Holywood");
    if(yeahNeahTo == true){
        y = "Yes";
    } else {
        y = "No";
    }
putInHtml(y, 'div23');


//#24
function getIndMir(element){
    return element.startsWith("Mirkwood");
}
putInHtml(lotrCitiesArray.findIndex(getIndMir), 'div24');


//#25
let spaCer = [];
let gaps = [" "];
for(var i = 0; i < lotrCitiesArray.length; i++){
    var cityy = lotrCitiesArray[i];
    for(var t = 0; t < gaps.length; t++){
        var endd = gaps[t];
        if(cityy.includes(endd)) {
            spaCer.push(cityy)
        }
    }
}
putInHtml(spaCer, 'div25'); 


//#26
putInHtml(lotrCitiesArray.reverse(), 'div26');


//#27
putInHtml(lotrCitiesArray.sort(), 'div27');


//#28
function lenCiti(a, b) {
    if (a.length > b.length) {
        return 1;
    }
    if (a.length < b.length) {
        return -1;
    }
    return 0;
}
putInHtml(lotrCitiesArray.sort(lenCiti), 'div28');


//#29
let popAdopa = lotrCitiesArray.pop();
putInHtml(popAdopa, 'div29');


//#30
let pushAdop = lotrCitiesArray.push("Rohan");
putInHtml(pushAdop, 'div30');


//#31
let shifty = lotrCitiesArray.shift();
putInHtml(shifty, 'div31');


//#32
let unShifty = lotrCitiesArray.unshift();
putInHtml(unShifty, 'div32');



    // var senTins = bestThing.split(' ');
    // div = document.createElement("div");
    // div.textContent = senTins;
    // document.body.appendChild(div2);
