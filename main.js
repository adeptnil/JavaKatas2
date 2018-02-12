//Arrays
const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

////////////////

//#1
for(var i = 0; i < gotCitiesCSV.length; i++); {
    const div = document.createElement("div");
    div.textContent = i;
    document.body.appendChild(div);   
}
