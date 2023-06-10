amogus2=window.webkitSpeechRecognition;
amogus3=new amogus2();
amogus3.lang="es-MX";
function iniciar(){
    amogus3.start()
}
amogus3.onresult=function(amogus4){
    console.log(amogus4)
    amogus5=amogus4.results[0][0].transcript;
    document.getElementById("textbox").value=amogus5;
    hablarr("noooooooooo0oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo")
}
function hablarr(msg){
    var llerr=window.speechSynthesis;
    var vez=new SpeechSynthesisUtterance(msg);
    vez.lang="es-MX";
    llerr.speak(vez);
}