async function fetchweatherData(cityName){
	let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ceeed05925cb05d344be6b319f5b00e0`
	const res=await fetch(url)
	const data=await res.json();
	let city=document.getElementById("city");
	city.innerHTML=data.name;
	let windSpeed=document.getElementById("wind_speed");
	windSpeed.innerHTML=data.wind.speed +"km/hr";
	let humidity=document.getElementById("humidity");
	humidity.innerHTML=data.main.humidity+"g/kg";
	let temp=document.getElementById("temp");
	temp.innerHTML=Math.round((data.main.temp)-273.15)+"°C";
	console.log(data);
}
function fetchCity(){
	let cityName=document.getElementById("city_name");
	if(cityName.value===""){
		alert(" Enter a City name");
	}else{
		fetchweatherData(cityName.value);
		cityName.value="";
	}
}