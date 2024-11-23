//$(document).ready: Função que garante que o código dentro dela execute
 //somente após o HTML completo da página estar carregado.
 $(document).ready(function() {

    //Seleciona p contêiner . carousel e aplica a função slick()
    // que ativa o carrossel com as configurações abaixo
    $('.carousel').slick({
        //slidesToShow: número de cards exibidos ao mesmo tempo no carrosel
        slidesToShow: 3, //Exibe 3 cards ao mesmo tempo

        //slidsToScroll: define quantos cards serão deslizados ao mover o carrosel
        slidesToShow: 1, //Move 1 card por vez ao deslizar

        //Infinite: quando true, o carrosel retorna ao início automaticamente 
        infinite: true, // Mantém o carrosel em rotação continua

        //dots: quando true, ativa os pontos de navegação para os usários
        dots: true, // Adiciona pontos de navegação para usúarios

        //arrows: exibe setas de navegação nas lateraís do carrosel 
        arrows: true // Ativa as setas para navegar entre os cards
    });


 });