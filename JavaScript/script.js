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
    function locations(name, city, zipcode, adress, img) {
        this.name = name;
        this.city = city;
        this.zipcode = zipcode;
        this.adress = adress;
        this.img = img;
        array.push(this);
    }
    //locations into HTML
    locations.prototype.display = function () {
        document.getElementById("locationContentContainer").innerHTML += ("\n\t\t<div class=\"card col-sm-5 col-md-5 col-lg-2 m-sm-2 m-lg-5 p-0\">\n\t\t\t  <div class=\"card-body\">\n\t\t\t    <h5 class=\"card-title bg-warning text-center\">" + this.name + "</h5>\n\t\t\t    <span class=\"card-text badge badge-secondary d-flex\">\n\t\t\t    \t<img src=\"img/location.png\" alt=\"\" class = \"align-self-center\"><small class=\"text-light text-wrap align-self-center\">" + this.adress + ", " + this.zipcode + "</small>\n\t\t\t    </span>\n\t\t\t  </div>\n\t\t\t  <img  src=" + this.img + " class=\"card-img-top d-sm-none d-md-block rounded-0\" alt=\"...\">\n\t\t\t</div>\n\t\t\t");
        console.log(this.name);
    };
    return locations;
}());
//Restaurant class
var restaurants = /** @class */ (function (_super) {
    __extends(restaurants, _super);
    function restaurants(name, city, zipcode, adress, img, tel, type, web) {
        var _this = _super.call(this, name, city, zipcode, adress, img) || this;
        _this.tel = tel;
        _this.type = type;
        _this.web = web;
        return _this;
    }
    //restaurants into HTML
    restaurants.prototype.display = function () {
        document.getElementById("restaurantContentContainer").innerHTML += ("\n\t\t<div class=\"card col-sm-5 col-md-5 col-lg-2 m-sm-2 m-lg-5 p-0\">\n\t\t\t  <div class=\"card-body\">\n\t\t\t    <h5 class=\"card-title bg-danger text-center p-1 rounded-right\">" + this.name + "</h5>\n\t\t\t    <span class=\"card-text badge badge-secondary d-flex\">\n\t\t\t    \t<img src=\"img/location.png\" alt=\"\" class = \"align-self-center \"><small class=\"text-light text-wrap align-self-center\">" + this.adress + ", " + this.zipcode + "</small>\n\t\t\t    </span>\n\t\t\t  </div>\n\t\t\t  <img  src=" + this.img + " class=\"card-img-top d-sm-none d-md-block rounded-0\" alt=\"...\">\n\t\t\t\t<p class = \"text-center mb-0\"><small>" + this.tel + "</small></p>\n\t\t\t\t<p class = \"text-center mb-0\"><small>" + this.web + "</small></p>\n\t\t\t</div>\n\t\t\t");
        console.log(this.name);
    };
    return restaurants;
}(locations));
//Event class
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(name, city, zipcode, adress, img, eventdate, eventtime, ticketprice) {
        var _this = _super.call(this, name, city, zipcode, adress, img) || this;
        _this.eventdate = eventdate;
        _this.eventtime = eventtime;
        _this.ticketprice = ticketprice;
        return _this;
    }
    //events into HTML
    events.prototype.display = function () {
        document.getElementById("eventContentContainer").innerHTML += ("\n\t\t<div class=\"card col-sm-5 col-md-5 col-lg-2 m-sm-2 m-lg-5 p-0\">\n\t\t\t  <div class=\"card-body\">\n\t\t\t    <h5 class=\"card-title bg-success text-center p-1 rounded-right\">" + this.name + "</h5>\n\t\t\t    <span class=\"card-text badge badge-secondary d-flex\">\n\t\t\t    \t<img src=\"img/location.png\" alt=\"\" class = \"align-self-center\"><small class=\"text-light text-wrap align-self-center\">" + this.adress + ", " + this.zipcode + "</small>\n\t\t\t    </span>\n\t\t\t  </div>\n\t\t\t  <img  src=" + this.img + " class=\"card-img-top d-sm-none d-md-block rounded-0\" alt=\"...\">\n\t\t\t  <div class = \"d-flex justify-content-around\">\n\t\t\t\t<p class = \"text-center mb-0\"><small>" + this.eventdate + "</small></p>\n\t\t\t\t<p class = \"text-center mb-0\"><small>" + this.eventtime + "</small></p>\n\t\t\t\t<p class = \"text-center mb-0\"><small>" + this.ticketprice + "</small></p>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t");
        console.log(this.name);
    };
    return events;
}(locations));
//Creating Objects
//locations
var charlesChurch = new locations("St. Charles Church", "Vienna", "1010 Vienna", "Karlsplatz 1", "../img/church.jfif");
var schPark = new locations("Schönbrunn Park", "Vienna", "1130 Vienna", "Maxingstraße 13b", "../img/schpark.jpg");
//restaurants
var onRest = new restaurants("ON Restaurant", "Vienna", "1050 Vienna", "Wehrgasse 8", "../img/onrest.jpg", "+43(1)5854900", "Chinese", "http://www.restaurant-on.at/");
var bioRest = new restaurants("BioFrische", "Vienna", "1150 Vienna", "Stutterheimstraße 6", "../img/biorest.jpg", "+43(1)9529215", "Indian", "http://biofrische.wien/");
//events
var catsEv = new events("Cats- the musical", "Vienna", "1010 Vienna", "Ronacher-Seilerstätte 9", "../img/catsev.jpg", "Fr., 15.12.2020", "20:00", "120,00€");
var gnrEv = new events("Guns ‘n Roses", "Vienna", "1020 Vienna", "Ernst-Happel Stadion, Meiereistraße 7", "../img/gnrev.jpg", "Sat, 09.06.2020", "19:30", "95,50€");
console.log(array);
//array loop
for (var i in array) {
    // console.log(array[i].constructor.name)
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
