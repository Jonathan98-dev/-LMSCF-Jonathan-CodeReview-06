console.log("CodeReview 6")

var array=[];

//Location Class

class locations
{
	//basic info
	visited:boolean;
	name:string;
	city:string;
	zipcode:string;
	adress:string;
	img:string;

	//constructor for location
	constructor(visited:boolean,name:string,city:string,zipcode:string,adress:string,img:string)
	{	
		this.visited=visited;
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
		  <button type="button" class="visitbtn btn btn-outline-danger w-50 mx-auto my-2">Not Visited</button>
		</div>
			`)
		// console.log(this.name)
	}
}

//Restaurant class

class restaurants extends locations
{
	tel:string;
	type:string;
	web:string;

	constructor(visited:boolean,name:string,city:string,zipcode:string,adress:string,img:string,tel:string,type:string,web:string)
	{
		super(visited,name,city,zipcode,adress,img);
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
			<button type="button" class="visitbtn btn btn-outline-danger w-50 mx-auto my-2">Not Visited</button>
		</div>
			`)

		// console.log(this.name)
	}
}

//Event class

class events extends locations
{
	eventdate:string;
	eventtime:string;
	ticketprice:string;

	constructor(visited:boolean,name:string,city:string,zipcode:string,adress:string,img:string,eventdate:string,eventtime:string,ticketprice:string)
	{
		super(visited,name,city,zipcode,adress,img);
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
		  <button type="button" class="visitbtn btn btn-outline-danger w-50 mx-auto my-2">Not Visited</button>
		</div>
			`)
		// console.log(this.name)
	}	
}

//Creating Objects

//locations
let charlesChurch = new locations(false,"St. Charles Church","Vienna","1010 Vienna","Karlsplatz 1","img/church.jfif")
let schPark = new locations (false,"Schönbrunn Park","Vienna","1130 Vienna","Maxingstraße 13b","img/schpark.jpg")
let loctest1 = new locations (false,"Template1","City","0000 Vienna","Streetname 000","img/test.png")
let loctest2 = new locations (false,"Template2","City","0000 Vienna","Streetname 000","img/test.png")
let loctest3 = new locations (false,"Template3","City","0000 Vienna","Streetname 000","img/test.png")
let loctest4 = new locations (false,"Template4","City","0000 Vienna","Streetname 000","img/test.png")
let loctest5 = new locations (false,"Template5","City","0000 Vienna","Streetname 000","img/test.png")
let loctest6 = new locations (false,"Template6","City","0000 Vienna","Streetname 000","img/test.png")

//restaurants
let onRest = new restaurants(false,"ON Restaurant","Vienna","1050 Vienna","Wehrgasse 8","img/onrest.jpg","+43(1)5854900","Chinese","http://www.restaurant-on.at/")
let bioRest = new restaurants(false,"BioFrische","Vienna","1150 Vienna","Stutterheimstraße 6","img/biorest.jpg","+43(1)9529215","Indian","http://biofrische.wien/")
let resttest1 = new restaurants(false,"RestTemplate1","City","0000 Vienna","Streetname 000","img/test.png","+43(1)0000000","Type","www.website.com")
let resttest2 = new restaurants(false,"RestTemplate2","City","0000 Vienna","Streetname 000","img/test.png","+43(1)0000000","Type","www.website.com")
let resttest3 = new restaurants(false,"RestTemplate3","City","0000 Vienna","Streetname 000","img/test.png","+43(1)0000000","Type","www.website.com")
let resttest4 = new restaurants(false,"RestTemplate4","City","0000 Vienna","Streetname 000","img/test.png","+43(1)0000000","Type","www.website.com")
let resttest5 = new restaurants(false,"RestTemplate5","City","0000 Vienna","Streetname 000","img/test.png","+43(1)0000000","Type","www.website.com")
let resttest6 = new restaurants(false,"RestTemplate6","City","0000 Vienna","Streetname 000","img/test.png","+43(1)0000000","Type","www.website.com")

//events
let catsEv = new events(false,"Cats- the musical","Vienna","1010 Vienna","Ronacher-Seilerstätte 9","img/catsev.jpg","Fr., 15.12.2020","20:00","120,00€")
let gnrEv = new events(false,"Guns ‘n Roses","Vienna","1020 Vienna","Ernst-Happel Stadion, Meiereistraße 7","img/gnrev.jpg","Sat, 09.06.2020","19:30","95,50€")
let evetest1 = new events(false,"EventTemplate1","City","0000 Vienna","Strettname 000","img/test.png","Day, Date","Time","TicketPrice")
let evetest2 = new events(false,"EventTemplate2","City","0000 Vienna","Strettname 000","img/test.png","Day, Date","Time","TicketPrice")
let evetest3 = new events(false,"EventTemplate3","City","0000 Vienna","Strettname 000","img/test.png","Day, Date","Time","TicketPrice")
let evetest4 = new events(false,"EventTemplate4","City","0000 Vienna","Strettname 000","img/test.png","Day, Date","Time","TicketPrice")
let evetest5 = new events(false,"EventTemplate5","City","0000 Vienna","Strettname 000","img/test.png","Day, Date","Time","TicketPrice")
let evetest6 = new events(false,"EventTemplate6","City","0000 Vienna","Strettname 000","img/test.png","Day, Date","Time","TicketPrice")

// console.log(array)

//array loop
for(let i in array)
{	
	console.log(array[i].constructor.name)
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
var visited=[];

let visit = document.getElementsByClassName("visitbtn")

for(let i in array)
{
	visit[i].addEventListener("click",function(){
		if(array[i].visited == false)
		{
		visit[i].classList.remove("btn-outline-danger")
		visit[i].classList.add("btn-outline-success")
		let date = new Date()
		visit[i].innerHTML=(`<small>Visited on ${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}</small>`)
		array[i].visited = true;
		// console.log(array[i])
		// console.log(array[i].visited)
		visited.push(array[i])
		// console.log(visited.sort())
		}
		else
		{
			visit[i].classList.remove("btn-outline-success")
			visit[i].classList.add("btn-outline-danger")
			visit[i].innerHTML=("Not Visited")
			array[i].visited = false;
			// console.log(array[i].visited)
			visited.pop(array[i])
			// console.log(visited)	
		}
	})

}



//---------------------------------------

//bonus sorted based on date time


//not done