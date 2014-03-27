document.addEventListener("backbutton", function(e){
    if($.mobile.activePage.is('index.html')){
        e.preventDefault();
        navigator.app.exitApp();
    }
    else {
        navigator.app.backHistory()
    }
}, false);