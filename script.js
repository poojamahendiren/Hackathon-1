var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","city");

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="search";
button.addEventListener("click",foo);
let nam=document.createElement("div");
nam.setAttribute("id","nam");
let brewery_type=document.createElement("div");
brewery_type.setAttribute("id","brewery_type");
let address_2=document.createElement("div");
address_2.setAttribute("id","address_2");
let address_3=document.createElement("div");
address_3.setAttribute("id","address_3");
let phone=document.createElement("div");
phone.setAttribute("id","phone");
let website_url=document.createElement("div");
website_url.setAttribute("id","website_url");


div.append(input,button,nam,brewery_type,address_2,address_3,phone,website_url);
document.body.append(div);

async function foo(){
    let res=document.getElementById("city").value;
    var url=`https://api.openbrewerydb.org/breweries?by_city=${res}&per_page=3`;
    
    let result=await fetch(url);
    let result1=await result.json();
    for(var i=0;i<result1.length-1;i++){
        //console.log(result1[i]);
    //result1.forEach(obj => {
        //Object.entries(obj).forEach(([key,value])=>{
            //console.log(`${key} ${value}`);
       // });
        //console.log('________________')
    //});
    var index=result1.length;
    console.log(result1.nam);
    nam.innerHTML=`Name:${result1[i].name}`;
    console.log(result1.brewery_type);
    brewery_type.innerHTML=`Type:${result1[i].brewery_type}`;
    console.log(result1.address_2);
    address_2.innerHTML=`Address_2:${result1[i].address_2}`;
    console.log(result1.address_3);
    address_3.innerHTML=`Address_3:${result1[i].address_3}`;
    console.log(result1.phone);
    phone.innerHTML=`Phone_no:${result1[i].phone}`;
    console.log(result1.website_url);
    website_url.innerHTML=`URL:${result1[i].website_url}`;
    try{
        let res=await bar();
        console.log(res);
    }
    catch(error){
        console.log(error);
    }

}

}
//foo();