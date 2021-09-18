//url
let url ="https://api.funtranslations.com/translate/minion.json";
//btn
let translatedBtn = document.querySelector("#btn");
//textarea input
let input = document.querySelector('#normalText')
//textarea output
let translatedOutput= document.querySelector('#translatedText')
//click listener
translatedBtn.addEventListener("click",()=>{
    let text = input.value
    let finalUrl = `${url}?text=${text}` 
    fetch(finalUrl)
    .then(response =>response.json() )
    .then(json=>{
console.log(json)
        translatedOutput.innerText=json.contents.translated
    })
    .catch(err=>{
        alert("Limit of request 5 reached per hour")
    })
}) 