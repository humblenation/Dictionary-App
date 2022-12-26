// const container = document.querySelector(".cont"),
// searchInput = container.querySelector(".search-input"),
// synonyms1 = container.querySelector(".syn-p1"),
// synonyms2 = container.querySelector(".syn-p2"),
// synonyms3 = container.querySelector(".syn-p3"),
// synonyms4 = container.querySelector(".syn-p4"),
// synonyms5 = container.querySelector(".syn-p5"),
// syn = container.querySelector(".synonyms"),
// infoText = container.querySelector(".info-text"),
// volumeIcon = container.querySelector("#volume"),
// removeIcon = container.querySelector(".material-icons"),
// searchIcon = container.querySelector(".search-icon");
// // let audio;

// function data(result, word){
//     if(result.title){
//         //if api returns the message of can't find word
//         infoText.innerHTML = `Can't find the meaning of ${word}. Please, try searching another word.`;
//     }else{
//         // console.log(result);
//         container.classList.add("active");
//         // let rand = Object.keys(result[0].meanings[0].definitions).length
        
//         // let randomNumber = Math.floor(Math.random() * rand) + 0;
//         // console.log(randomNumber)
//         let definitions = result[0].meanings[0].definitions[0];
//         // console.log(definitions)
//         // let's pass the particular response data to particular html element
//         document.querySelector(".word-header").innerHTML = result[0].word;
//         if(result[0].phonetic == undefined){
//             document.querySelector(".pos").innerHTML =`${result[0].meanings[0].partOfSpeech}`;
//         }else{
//             document.querySelector(".pos").innerHTML =`${result[0].meanings[0].partOfSpeech} ${result[0].phonetic}`;
//         }
//         document.querySelector(".meaning-desc").innerHTML = definitions.definition;
        
//         // audio = new Audio(result[0].phonetics[2].audio
//         // console.log(Objecresult[0].meanings[0]t.keys(result[0].meanings[0].definitions).length)
//         if(definitions.example == undefined){
//             document.querySelector(".example").style.display = "none"
//         }else{
//             document.querySelector(".example").style.display = "block"
//             document.querySelector(".example-desc").innerHTML = definitions.example;
//         }
//         if(result[0].meanings[0].synonyms[0] == undefined){
//             syn.style.display = "none"
//         }else{
//             syn.style.display = "block"
//             synonyms1.innerHTML = result[0].meanings[0].synonyms[0]
//         }
//         if(result[0].meanings[0].synonyms[1] == undefined){
//             synonyms2.style.display = "none"
//         }else{
//             synonyms2.style.display = "block"
//             synonyms2.innerHTML = result[0].meanings[0].synonyms[1]
//         }
//         if(result[0].meanings[0].synonyms[2] == undefined){
//             synonyms3.style.display = "none"
//         }else{
//             synonyms3.style.display = "block"
//             synonyms3.innerHTML = result[0].meanings[0].synonyms[2]
//         }
//         if(result[0].meanings[0].synonyms[3] == undefined){
//             synonyms4.style.display = "none"
//         }else{
//             synonyms4.style.display = "block"
//             synonyms4.innerHTML = result[0].meanings[0].synonyms[3]
//         }
//         if(result[0].meanings[0].synonyms[4] == undefined){
//             synonyms5.style.display = "none"
//         }else{
//             synonyms5.style.display = "block"
//             synonyms5.innerHTML = result[0].meanings[0].synonyms[4]
//         }
//     }
// }

// // fetch api function
// function fetchApi(word){
//     //fetch api response and returning it with parsing into js obj and in another then
//     container.classList.remove("active");
//     infoText.style.color = "#000";
//     infoText.innerHTML = `Searching the meaning of ${word}`
//     let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
//     //method calling data function with passing api response and search word as an argument
//     fetch(url)
//     .then(res => res.json())
//     .then(result => data(result, word));
// }
// searchInput.addEventListener("keyup", e =>{
//     if(e.key === 'Enter' && e.target.value){
//         fetchApi(e.target.value);
//     }
// })

// // volumeIcon.addEventListener("click", ()=>{
// //     audio.play();
// // })

// removeIcon.addEventListener("click", ()=>{
//     searchInput.focus();
//     searchInput.value = "";
//     container.classList.remove("active");
//     infoText.style.color = "#000";
//     infoText.innerHTML = `Type any existing word and press enter.`
// })

const container = document.querySelector(".cont"),
searchInput = container.querySelector(".search-input"),
synonyms1 = container.querySelector(".syn-p1"),
synonyms2 = container.querySelector(".syn-p2"),
synonyms3 = container.querySelector(".syn-p3"),
synonyms4 = container.querySelector(".syn-p4"),
synonyms5 = container.querySelector(".syn-p5"),
syn = container.querySelector(".synonyms"),
infoText = container.querySelector(".info-text"),
volumeIcon = container.querySelector("#volume"),
removeIcon = container.querySelector(".material-icons"),
searchIcon = container.querySelector(".search-icon");
// let audio;

function data(result, word){
    if(result.title){
        //if api returns the message of can't find word
        infoText.innerHTML = `Can't find the meaning of ${word}. Please, try searching another word.`;
    }else{
        // console.log(result);
        container.classList.add("active");
        let rand = Object.keys(result[0].meanings[0].definitions).length
        
        let randomNumber = Math.floor(Math.random() * rand) + 0;
        // console.log(randomNumber)
        let definitions = result[0].meanings[randomNumber].definitions[0];
        // console.log(definitions)
        // let's pass the particular response data to particular html element
        document.querySelector(".word-header").innerHTML = result[0].word;
        if(result[0].phonetic == undefined){
            document.querySelector(".pos").innerHTML =`${result[0].meanings[randomNumber].partOfSpeech}`;
        }else{
            document.querySelector(".pos").innerHTML =`${result[0].meanings[randomNumber].partOfSpeech} ${result[0].phonetic}`;
        }
        document.querySelector(".meaning-desc").innerHTML = definitions.definition;
        
        // audio = new Audio(result[0].phonetics[2].audio
        // console.log(Objecresult[0].meanings[0]t.keys(result[0].meanings[0].definitions).length)
        if(definitions.example == undefined){
            document.querySelector(".example").style.display = "none"
        }else{
            document.querySelector(".example").style.display = "block"
            document.querySelector(".example-desc").innerHTML = definitions.example;
        }
        if(result[0].meanings[randomNumber].synonyms[0] == undefined){
            syn.style.display = "none"
        }else{
            syn.style.display = "block"
            synonyms1.innerHTML = result[0].meanings[randomNumber].synonyms[0]
        }
        if(result[0].meanings[randomNumber].synonyms[1] == undefined){
            synonyms2.style.display = "none"
        }else{
            synonyms2.style.display = "block"
            synonyms2.innerHTML = result[0].meanings[randomNumber].synonyms[1]
        }
        if(result[0].meanings[randomNumber].synonyms[2] == undefined){
            synonyms3.style.display = "none"
        }else{
            synonyms3.style.display = "block"
            synonyms3.innerHTML = result[0].meanings[randomNumber].synonyms[2]
        }
        if(result[0].meanings[0].synonyms[randomNumber] == undefined){
            synonyms4.style.display = "none"
        }else{
            synonyms4.style.display = "block"
            synonyms4.innerHTML = result[0].meanings[randomNumber].synonyms[3]
        }
        if(result[0].meanings[randomNumber].synonyms[4] == undefined){
            synonyms5.style.display = "none"
        }else{
            synonyms5.style.display = "block"
            synonyms5.innerHTML = result[0].meanings[randomNumber].synonyms[4]
        }
    }
}

// fetch api function
function fetchApi(word){
    //fetch api response and returning it with parsing into js obj and in another then
    container.classList.remove("active");
    infoText.style.color = "#000";
    infoText.innerHTML = `Searching the meaning of ${word}`
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    //method calling data function with passing api response and search word as an argument
    fetch(url)
    .then(res => res.json())
    .then(result => data(result, word));
}
searchInput.addEventListener("keyup", e =>{
    if(e.key === 'Enter' && e.target.value){
        fetchApi(e.target.value);
    }
})

// volumeIcon.addEventListener("click", ()=>{
//     audio.play();
// })

removeIcon.addEventListener("click", ()=>{
    searchInput.focus();
    searchInput.value = "";
    container.classList.remove("active");
    infoText.style.color = "#000";
    infoText.innerHTML = `Type any existing word and press enter.`
})