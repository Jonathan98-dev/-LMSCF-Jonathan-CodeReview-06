var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("CodeReview 6");
var array = [];
//Location Class
var locations = /** @class */ (function () {
    //constructor for location
    function locations(visited, name, city, zipcode, adress, img) {
        this.visited = visited;
        this.name = name;
        this.city = city;
        this.zipcode = zipcode;
        this.adress = adress;
        this.img = img;
        array.push(this);
    }
    //locations into HTML
    locations.prototype.display = function () {
        document.getElementById("locationContentContainer").innerHTML += ("\n\t\t<div class=\"card col-sm-5 col-md-5 col-lg-2 m-sm-2 m-lg-5 p-1\">\n\t\t  <div class=\"card-body\">\n\t\t    <h5 class=\"card-title bg-warning text-center\">" + this.name + "</h5>\n\t\t    <span class=\"card-text badge badge-secondary d-flex\">\n\t\t    \t<img src=\"img/location.png\" alt=\"\" class = \"align-self-center\"><small class=\"text-light text-wrap align-self-center\">" + this.adress + ", " + this.zipcode + "</small>\n\t\t    </span>\n\t\t  </div>\n\t\t  <img  src=" + this.img + " class=\"card-img-top d-sm-none d-md-block rounded-0\" alt=\"...\">\n\t\t  <button type=\"button\" class=\"visitbtn btn btn-outline-danger w-50 mx-auto my-2\">Not Visited</button>\n\t\t</div>\n\t\t\t");
        // console.log(this.name)
    };
    return locations;
}());
//Restaurant class
var restaurants = /** @class */ (function (_super) {
    __extends(restaurants, _super);
    function restaurants(visited, name, city, zipcode, adress, img, tel, type, web) {
        var _this = _super.call(this, visited, name, city, zipcode, adress, img) || this;
        _this.tel = tel;
        _this.type = type;
        _this.web = web;
        return _this;
    }
    //restaurants into HTML
    restaurants.prototype.display = function () {
        document.getElementById("restaurantContentContainer").innerHTML += ("\n\t\t<div class=\"card col-sm-5 col-md-5 col-lg-2 m-sm-2 m-lg-5 p-1\">\n\t\t  <div class=\"card-body\">\n\t\t    <h5 class=\"card-title bg-danger text-center p-1 rounded-right\">" + this.name + "</h5>\n\t\t    <span class=\"card-text badge badge-secondary d-flex\">\n\t\t    \t<img src=\"img/location.png\" alt=\"\" class = \"align-self-center \"><small class=\"text-light text-wrap align-self-center\">" + this.adress + ", " + this.zipcode + "</small>\n\t\t    </span>\n\t\t  </div>\n\t\t  <img  src=" + this.img + " class=\"card-img-top d-sm-none d-md-block rounded-0\" alt=\"...\">\n\t\t\t<p class = \"text-center mb-0\"><small>" + this.tel + "</small></p>\n\t\t\t<p class = \"text-center mb-0\"><small>" + this.web + "</small></p>\n\t\t\t<button type=\"button\" class=\"visitbtn btn btn-outline-danger w-50 mx-auto my-2\">Not Visited</button>\n\t\t</div>\n\t\t\t");
        // console.log(this.name)
    };
    return restaurants;
}(locations));
//Event class
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(visited, name, city, zipcode, adress, img, eventdate, eventtime, ticketprice) {
        var _this = _super.call(this, visited, name, city, zipcode, adress, img) || this;
        _this.eventdate = eventdate;
        _this.eventtime = eventtime;
        _this.ticketprice = ticketprice;
        return _this;
    }
    //events into HTML
    events.prototype.display = function () {
        document.getElementById("eventContentContainer").innerHTML += ("\n\t\t<div class=\"card col-sm-5 col-md-5 col-lg-2 m-sm-2 m-lg-5 p-1\">\n\t\t  <div class=\"card-body\">\n\t\t    <h5 class=\"card-title bg-success text-center p-1 rounded-right\">" + this.name + "</h5>\n\t\t    <span class=\"card-text badge badge-secondary d-flex\">\n\t\t    \t<img src=\"img/location.png\" alt=\"\" class = \"align-self-center\"><small class=\"text-light text-wrap align-self-center\">" + this.adress + ", " + this.zipcode + "</small>\n\t\t    </span>\n\t\t  </div>\n\t\t  <img  src=" + this.img + " class=\"card-img-top d-sm-none d-md-block rounded-0\" alt=\"...\">\n\t\t  <div class = \"d-flex justify-content-around\">\n\t\t\t<p class = \"text-center mb-0\"><small>" + this.eventdate + "</small></p>\n\t\t\t<p class = \"text-center mb-0\"><small>" + this.eventtime + "</small></p>\n\t\t\t<p class = \"text-center mb-0\"><small>" + this.ticketprice + "</small></p>\n\t\t  </div>\n\t\t  <button type=\"button\" class=\"visitbtn btn btn-outline-danger w-50 mx-auto my-2\">Not Visited</button>\n\t\t</div>\n\t\t\t");
        // console.log(this.name)
    };
    return events;
}(locations));
//Creating Objects
//locations
var charlesChurch = new locations(false, "St. Charles Church", "Vienna", "1010 Vienna", "Karlsplatz 1", "img/church.jfif");
var schPark = new locations(false, "Schönbrunn Park", "Vienna", "1130 Vienna", "Maxingstraße 13b", "img/schpark.jpg");
var loctest1 = new locations(false, "Template1", "City", "0000 Vienna", "Streetname 000", "img/test.png");
var loctest2 = new locations(false, "Template2", "City", "0000 Vienna", "Streetname 000", "img/test.png");
var loctest3 = new locations(false, "Template3", "City", "0000 Vienna", "Streetname 000", "img/test.png");
var loctest4 = new locations(false, "Template4", "City", "0000 Vienna", "Streetname 000", "img/test.png");
var loctest5 = new locations(false, "Template5", "City", "0000 Vienna", "Streetname 000", "img/test.png");
var loctest6 = new locations(false, "Template6", "City", "0000 Vienna", "Streetname 000", "img/test.png");
//restaurants
var onRest = new restaurants(false, "ON Restaurant", "Vienna", "1050 Vienna", "Wehrgasse 8", "img/onrest.jpg", "+43(1)5854900", "Chinese", "http://www.restaurant-on.at/");
var bioRest = new restaurants(false, "BioFrische", "Vienna", "1150 Vienna", "Stutterheimstraße 6", "img/biorest.jpg", "+43(1)9529215", "Indian", "http://biofrische.wien/");
var resttest1 = new restaurants(false, "RestTemplate1", "City", "0000 Vienna", "Streetname 000", "img/test.png", "+43(1)0000000", "Type", "www.website.com");
var resttest2 = new restaurants(false, "RestTemplate2", "City", "0000 Vienna", "Streetname 000", "img/test.png", "+43(1)0000000", "Type", "www.website.com");
var resttest3 = new restaurants(false, "RestTemplate3", "City", "0000 Vienna", "Streetname 000", "img/test.png", "+43(1)0000000", "Type", "www.website.com");
var resttest4 = new restaurants(false, "RestTemplate4", "City", "0000 Vienna", "Streetname 000", "img/test.png", "+43(1)0000000", "Type", "www.website.com");
var resttest5 = new restaurants(false, "RestTemplate5", "City", "0000 Vienna", "Streetname 000", "img/test.png", "+43(1)0000000", "Type", "www.website.com");
var resttest6 = new restaurants(false, "RestTemplate6", "City", "0000 Vienna", "Streetname 000", "img/test.png", "+43(1)0000000", "Type", "www.website.com");
//events
var catsEv = new events(false, "Cats- the musical", "Vienna", "1010 Vienna", "Ronacher-Seilerstätte 9", "img/catsev.jpg", "Fr., 15.12.2020", "20:00", "120,00€");
var gnrEv = new events(false, "Guns ‘n Roses", "Vienna", "1020 Vienna", "Ernst-Happel Stadion, Meiereistraße 7", "img/gnrev.jpg", "Sat, 09.06.2020", "19:30", "95,50€");
var evetest1 = new events(false, "EventTemplate1", "City", "0000 Vienna", "Strettname 000", "img/test.png", "Day, Date", "Time", "TicketPrice");
var evetest2 = new events(false, "EventTemplate2", "City", "0000 Vienna", "Strettname 000", "img/test.png", "Day, Date", "Time", "TicketPrice");
var evetest3 = new events(false, "EventTemplate3", "City", "0000 Vienna", "Strettname 000", "img/test.png", "Day, Date", "Time", "TicketPrice");
var evetest4 = new events(false, "EventTemplate4", "City", "0000 Vienna", "Strettname 000", "img/test.png", "Day, Date", "Time", "TicketPrice");
var evetest5 = new events(false, "EventTemplate5", "City", "0000 Vienna", "Strettname 000", "img/test.png", "Day, Date", "Time", "TicketPrice");
var evetest6 = new events(false, "EventTemplate6", "City", "0000 Vienna", "Strettname 000", "img/test.png", "Day, Date", "Time", "TicketPrice");
// console.log(array)
//array loop
for (var i in array) {
    console.log(array[i].constructor.name);
    if (array[i].constructor.name == "locations") {
        array[i].display();
    }
    else if (array[i].constructor.name == "restaurants") {
        array[i].display();
    }
    else if (array[i].constructor.name == "events") {
        array[i].display();
    }
}
//bonus visited
var visited = [];
var visit = document.getElementsByClassName("visitbtn");
var _loop_1 = function (i) {
    visit[i].addEventListener("click", function () {
        if (array[i].visited == false) {
            visit[i].classList.remove("btn-outline-danger");
            visit[i].classList.add("btn-outline-success");
            var date = new Date();
            visit[i].innerHTML = ("<small>Visited on " + date.getDay() + "." + date.getMonth() + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + "</small>");
            array[i].visited = true;
            // console.log(array[i])
            // console.log(array[i].visited)
            visited.push(array[i]);
            // console.log(visited.sort())
        }
        else {
            visit[i].classList.remove("btn-outline-success");
            visit[i].classList.add("btn-outline-danger");
            visit[i].innerHTML = ("Not Visited");
            array[i].visited = false;
            // console.log(array[i].visited)
            visited.pop(array[i]);
            // console.log(visited)	
        }
    });
};
for (var i in array) {
    _loop_1(i);
}
//---------------------------------------
//bonus sorted based on date time
//not done
