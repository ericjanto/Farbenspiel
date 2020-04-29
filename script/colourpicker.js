$(document).ready(function() {
    var color = $('.project-cover').attr("data-color");

    $('.project-cover').css("background-color", color);
    $('.article > pre').css("background-color", opacityChanger(color));
    
    switch(color) {
        case '#dadfd6': 
            $('.article a').css('color', '#72756f');
        break;
        default:
            $('.article a').css('color', color);
    }
});

function opacityChanger(extColor) {
    var color = extColor;
    var rgbaCol = 'rgba(' + parseInt(color.slice(-6,-4),16)
    + ',' + parseInt(color.slice(-4,-2),16)
    + ',' + parseInt(color.slice(-2),16)
    +',0.25)';

    return rgbaCol;
};