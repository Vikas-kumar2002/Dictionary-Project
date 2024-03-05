let searchInput=document.getElementById("searchInput")
let  searchBtn=document.getElementById("searchBtn");

async function getData(searchValue){
try {
    
    let data =  await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`);
    console.log(data);
    let jsonData= await data.json();
    // we use empty string because when we search word more than one time it show previous output
    document.querySelector(".text").innerHTML=""
    let div=document.createElement('div')
    div.classList.add("detail")
    div.innerHTML=`
            <h2>Word: <span>${jsonData[0].word}</span></h2>
            <p></p>
            <p>Noun: <span>${jsonData[0].meanings[0].partOfSpeech}</span></p>
            <p>Meaning: <span>${jsonData[0].meanings[0].definitions[0].definition}</span></p>
            <p>Example: <span>${jsonData[0].meanings[0].definitions[0].example}</span></p>
            <p>Synonyms: <span>${jsonData[0].meanings[0].synonyms[0]}</span></p>
            <p><span></span></p>
            <a href=${jsonData[0].sourceUrls[0]} target="_blank">Read More</a>
    
    `
    // <a href="${jsonData[0].sourceUrls[0]}">Read More</a> //it will open wikipedia on same tab


    document.querySelector(".text").appendChild(div)
    
    // console.log(jsonData);
    // console.log(jsonData[0].word); // it provide word

    // console.log(jsonData[0].meanings[0].partOfSpeech);//it provide noun 
    // console.log(jsonData[0].meanings[0].definitions[0].definition);//it provide meaning 
    // console.log(jsonData[0].meanings[0].synonyms[0]);//it provide synonyms 
    // console.log(jsonData[0].meanings[0].definitions[0].example);//it provide Example
    // console.log(jsonData[0].sourceUrls[0]);//it provide more information about word on wikipedia

   
   }
    
 catch (error) {
    console.log("Error is :",error);
    
}
}



searchBtn.addEventListener("click",()=>{
  let searchValue=searchInput.value;
  if(searchValue==""){
    alert("First enter word")
    let div=document.createElement('div')
    div.classList.add("detail")
    div.innerHTML=`<h1>Wrong input </h1>`
    
  }
  else {
    getData(searchValue)
  }

})