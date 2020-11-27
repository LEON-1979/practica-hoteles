$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval:2500
    });

    $('#contactoBtn').on('show.bs.modal', function(e){
        console.log("el modal se esta mostrando");

        $("#contactoBtn").removeClass("btn-outline-success");
        $("#contactoBtn").addClass("btn-primary");
        $("#contactoBtn").prop("disabled", true);

    });
    $('#contactoBtn').on('show.bs.modal', function(e){
        console.log("el modal contacto se mostro");
    });
    $('#contactoBtn').on('show.bs.modal', function(e){
        console.log("el modal contacto se oculta");
    });
    $('#contactoBtn').on('show.bs.modal', function(e){
        console.log("el modal contacto se oculto");
        $("#contactoBtn").prop("disabled", false);
    });
    

});