const api = {
    key:"339e8964c3a9c3d9855ae9d61a5cb452",
    base:"https://api.openweathermap.org/data/2.5/"
}

const search= document.querySelector(".search-box");
const btn= document.querySelector(".btn");
btn.addEventListener('click', getInput);

function getInput(event){
    event.preventDefault();
    if(event.type=="click"){
        getData(search.value);
        console.log(search.value);
    }
}

function getData(){
    fetch(`${api.base}weather?q=${search.value}&units=metric&APPID=${api.key}`)
    .then(response=>response.json())
    .then(displayData);    
}