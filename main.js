//js-events
$(document).ready(function(){
    
    $(".dropdown-trigger").dropdown({ hover: false });
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.slider').slider({indicators:true,
        height:400,
        duration:500,
        interval:4000});
    $('input.autocomplete').autocomplete({
      data: {
        "Ajax": null,
        "JavaScript": null,
        "Google": 'https://placehold.it/250x250',
        "Html5":null,
        "Css3":null,
        ".Net":null,
        "C#":null,
        "MsSQL":null,
        "ASP.Net MVC":null
      },
    });
});



  


  