function sound(text){
    console.log(text)
    
    const synth = window.speechSynthesis; // chamada SpeechSynthesis API
    window.utterances = [];
    voiceId = synth.getVoices(); // armazena as vozes no array    
    var utterance = new SpeechSynthesisUtterance( text );
    utterance.lang = 'en-US';
    utterances.push( utterance );
    speechSynthesis.speak( utterance );
}

function voice(id, text){
    const recognition = new webkitSpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.continuous = true;
    var cardId = document.getElementById("card-"+id);
    var resId = document.getElementById("res-"+id);
    var btnVoice = document.getElementById("btn-"+id);
    console.log(cardId)
    console.log(resId)
    console.log(btnVoice)
    var out = '';

    // alterando a cor do botão até que a gravação acabar
    btnVoice.style.backgroundColor="#fff"
    btnVoice.style.color="#b03c3c"    
    btnVoice.innerHTML = "<img src='/img/icons/rec.png'> Gravando";


    recognition.start();
          // This event happens when you talk in the microphone
          recognition.onresult = function(event) {
            for (let i = event.resultIndex; i < event.results.length; i++) {

                 
              if (event.results[i].isFinal) {
                // Here you can get the string of what you told
                const content = event.results[i][0].transcript.trim();
                //output.textContent = content;
                out = content;
                if(out.toLowerCase() === text.toLowerCase()){

                    btnVoice.style.backgroundColor="rgb(50, 46, 100)"
                    btnVoice.style.color="#fff"    
                    btnVoice.innerHTML = '<img src="/img/icons/microfone-b.png" id="icon"> Tentar novamente?</button>';
                    cardId.style.backgroundColor = "#dfdfdf";
                    cardId.style.border = "2px solid #35964f";
                    resId.innerHTML="<h4 style='color:#35964f'>Mandou bem!! Parabéns, você acertou!!</h4>";
                   
                    recognition.stop()                                    
                }else{

                    btnVoice.style.backgroundColor="rgb(50, 46, 100)"
                    btnVoice.style.color="#fff"    
                    btnVoice.innerHTML = '<img src="/img/icons/microfone-b.png" id="icon"> Tentar novamente?</button>';
                    cardId.style.backgroundColor = "#dfdfdf";
                    cardId.style.border = "2px solid #9c3d3d";
                    resId.innerHTML="<h4 style='color:#9c3d3d'>Ops!! Tente novamente!!</h4>";
                    
                    recognition.stop()                    
                }
               
                console.log(out + " ## Som falado" )
                console.log(text + " ## Frase a ser falada")
              }
              
            }
            
    }
    // setTimeout(() => {
    //     console.log("Delayed for 1 second.");
    //     recognition.stop()
    //     console.log(out)
    // }, "3000")
    
}

