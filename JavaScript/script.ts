console.log("CodeReview 6")



var array=[];


//Location Class

class locations
{
	//basic info
	name:string
	city:string;
	zipcode:string;
	adress:string;
	img:string;

	//constructor for location
	constructor(name:string,city:string,zipcode:string,adress:string,img:string)
	{	
		this.name=name;
		this.city=city;
		this.zipcode=zipcode;
		this.adress=adress;
		this.img=img;
		array.push(this)
	}

	//locations into HTML
	display()
	{
		document.getElementById("locationContentContainer").innerHTML += (`
		<div class="card col-sm-5 col-md-5 col-lg-2 m-sm-2 m-lg-5 p-1">
			  <div class="card-body">
			    <h5 class="card-title bg-warning text-center">${this.name}</h5>
			    <span class="card-text badge badge-secondary d-flex">
			    	<img src="img/location.png" alt="" class = "align-self-center"><small class="text-light text-wrap align-self-center">${this.adress}, ${this.zipcode}</small>
			    </span>
			  </div>
			  <img  src=${this.img} class="card-img-top d-sm-none d-md-block rounded-0" alt="...">
			</div>
			`)

		console.log(this.name)
	}
}


//Restaurant class

class restaurants extends locations
{
	tel:string;
	type:string;
	web:string;

	constructor(name:string,city:string,zipcode:string,adress:string,img:string,tel:string,type:string,web:string)
	{
		super(name,city,zipcode,adress,img);
		this.tel=tel;
		this.type=type;
		this.web=web;	
	}

	//restaurants into HTML
	display()
	{
		document.getElementById("restaurantContentContainer").innerHTML += (`
		<div class="card col-sm-5 col-md-5 col-lg-2 m-sm-2 m-lg-5 p-1">
			  <div class="card-body">
			    <h5 class="card-title bg-danger text-center p-1 rounded-right">${this.name}</h5>
			    <span class="card-text badge badge-secondary d-flex">
			    	<img src="img/location.png" alt="" class = "align-self-center "><small class="text-light text-wrap align-self-center">${this.adress}, ${this.zipcode}</small>
			    </span>
			  </div>
			  <img  src=${this.img} class="card-img-top d-sm-none d-md-block rounded-0" alt="...">
				<p class = "text-center mb-0"><small>${this.tel}</small></p>
				<p class = "text-center mb-0"><small>${this.web}</small></p>
			</div>
			`)

		console.log(this.name)
	}
	
}

//Event class

class events extends locations
{
	eventdate:string;
	eventtime:string;
	ticketprice:string;

	constructor(name:string,city:string,zipcode:string,adress:string,img:string,eventdate:string,eventtime:string,ticketprice:string)
	{
		super(name,city,zipcode,adress,img);
		this.eventdate=eventdate;
		this.eventtime=eventtime;
		this.ticketprice=ticketprice;
	}

	//events into HTML
	display()
	{
		document.getElementById("eventContentContainer").innerHTML += (`
		<div class="card col-sm-5 col-md-5 col-lg-2 m-sm-2 m-lg-5 p-1">
			  <div class="card-body">
			    <h5 class="card-title bg-success text-center p-1 rounded-right">${this.name}</h5>
			    <span class="card-text badge badge-secondary d-flex">
			    	<img src="img/location.png" alt="" class = "align-self-center"><small class="text-light text-wrap align-self-center">${this.adress}, ${this.zipcode}</small>
			    </span>
			  </div>
			  <img  src=${this.img} class="card-img-top d-sm-none d-md-block rounded-0" alt="...">
			  <div class = "d-flex justify-content-around">
				<p class = "text-center mb-0"><small>${this.eventdate}</small></p>
				<p class = "text-center mb-0"><small>${this.eventtime}</small></p>
				<p class = "text-center mb-0"><small>${this.ticketprice}</small></p>
			  </div>
			</div>
			`)

		console.log(this.name)
	}

	
}


//Creating Objects

//locations
let charlesChurch = new locations("St. Charles Church","Vienna","1010 Vienna","Karlsplatz 1","img/church.jfif")
let schPark = new locations ("Schönbrunn Park","Vienna","1130 Vienna","Maxingstraße 13b","img/schpark.jpg")

//restaurants
let onRest = new restaurants("ON Restaurant","Vienna","1050 Vienna","Wehrgasse 8","img/onrest.jpg","+43(1)5854900","Chinese","http://www.restaurant-on.at/")
let bioRest = new restaurants("BioFrische","Vienna","1150 Vienna","Stutterheimstraße 6","img/biorest.jpg","+43(1)9529215","Indian","http://biofrische.wien/")

//events
let catsEv = new events("Cats- the musical","Vienna","1010 Vienna","Ronacher-Seilerstätte 9","img/catsev.jpg","Fr., 15.12.2020","20:00","120,00€")
let gnrEv = new events("Guns ‘n Roses","Vienna","1020 Vienna","Ernst-Happel Stadion, Meiereistraße 7","img/gnrev.jpg","Sat, 09.06.2020","19:30","95,50€")

console.log(array)


//array loop
for(let i in array)
{	
	// console.log(array[i].constructor.name)
	if(array[i].constructor.name == "locations")
	{
		array[i].display()	
	}
	else if(array[i].constructor.name == "restaurants")
	{
		array[i].display()
	}
	else if(array[i].constructor.name == "events")
	{
		array[i].display()
	}
}


//bonus visited

//not done

//bonus sorted based on date time

//not done