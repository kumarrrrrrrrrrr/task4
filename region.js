

var request = new XMLHttpRequest()
request.open('GET','https://restcountries.com/v3.1/all'); 
request.send();

request.onload = function(){   
    
var data = JSON.parse(this.response); 



for( var  i  in data)
{

console.log(data[i].countriesname+ " , " + data[i].region + " ," + data[i].subregion+ " , " +data[i].population );

}
}


