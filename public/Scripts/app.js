// SPA --> Single Page Aplication
// Client side 
// IIFE --> Immediatley invoked function expression
(function(){
    function Start()
    {
        console.log("App Started");
        window.addEventListener("load", Start)
    }
    window.addEventListener("load", Start)
})();