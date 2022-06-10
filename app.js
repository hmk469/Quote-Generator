const container = document.getElementById("container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
let apiQuotes=[];

function loading(){
   loader.hidden = false;
   container.hidden =true;   
   };

function complete(){ 
      container.hidden =false; 
     loader.hidden=true;  
      };

function newQuote(){
   loading();
    const quote = apiQuotes [Math.floor(Math.random() * apiQuotes.length)];
     if(!quote.author){
        authorText.textContent= "Unknown";
     }
     else{
        authorText.textContent= quote.author;
     }

     if(quote.text.length>120){
        quoteText.classList.add('long-quote')
     }

     else{
        quoteText.classList.remove('long-quote')
     }

     quoteText.textContent= quote.text;
     complete();
}


async function getQuotes(){
   loading();
    const apiUrl='https://type.fit/api/quotes';
    try{
        const response= await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }catch(error){ 
 
    }
    
  
};



newBtn.addEventListener("click", newQuote);

getQuotes();
