function updateOutput() {
    
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
    
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
    
}
    
$(".toggleButton").hover(function() {
    
     // ao passar o mouse no botão, fica cinza
     $(this).addClass("highlightedButton");
    
    }, function() {
    
        // ao tirar o mouse do botão, volta para a cor original
        $(this).removeClass("highlightedButton");
    
});
    
$(".toggleButton").click(function() {
    
    // quando uma opção do menu estiver sendo usada, será
    // ativada a cor azul
    $(this).toggleClass("active");
    
    $(this).removeClass("highlightedButton");
    
    var panelId = $(this).attr("id") + "Panel";
    
    // alert(panelId);
    
    $("#" + panelId).toggleClass("hidden");
    
    var numberOfActivePanels = 4 - $('.hidden').length;
    
    $(".panel").width(($(window).width() / numberOfActivePanels) - 10);
    
});
    
    // define a altura do painel
    $(".panel").height($(window).height() - $("#header").height() - 15);
    
    // define o comprimento do painel
    $(".panel").width(($(window).width() / 2) - 10);
    
    // joga no iframe o valor digitado no painel html
    updateOutput();
    
    $("textarea").on('change keyup paste', function() {
    
        updateOutput();
    
});