$(document).ready(function(){
$("img#icon1").click(function(){
$("#our-design").toggle();
});
$("img#icon2").click(function(){
$("#our-dev").toggle();
});
$("img#icon3").click(function(){
$("#our-prod").toggle();
});

$(".w1").hide();
$("#act1").css({opacity:'0.5',});
$("#act1").animate({opacity:1});
$("#work4").hover(function(){
    $(this).animate({
        opacity:'0.8',
        left:'250px',
    });
$(".w1").slideToggle();}),
function(){
$(this).animate({opacity:'0.8',});
$(".w1").slidetoggle();
};
$(".w2").hide();
$("#act2").css({opacity:'0.8',});
$("#act2").animate({opacity:1});
$("#work3").hover(function(){
$(this).animate({
    opacity:'0.3',
    left:'250px',
});
$(".w2").slideToggle();}),
function(){
$(this).animate({opacity:'0.8',});
$(".w2").slidetoggle();
};
$(".w3").hide();
$("#act3").css({opacity:'0.8',});
$("#act3").animate({opacity:1});
$("#work2").hover(function(){
$(this).animate({
    opacity:'0.5',
    left:'250px',
});
$(".w3").slideToggle();}),
function(){
$(this).animate({opacity:'0.8',});
$(".w3").slidetoggle();
};
$(".w4").hide();
$("#act4").css({opacity:'0.8',});
$("#act4").animate({opacity:1});
$("#work1").hover(function(){
$(this).animate({
    opacity:'0.5',
    left:'250px',
});
$(".w4").slideToggle();}),
function(){
$(this).animate({opacity:'0.8',});
$(".w4").slidetoggle();
};
$(".w5").hide();
$("#act5").css({opacity:'0.8',});
$("#act5").animate({opacity:1});
$("#work5").hover(function(){
$(this).animate({
    opacity:'0.4',
    left:'250px',
});
$(".w5").slideToggle();}),
function(){
$(this).animate({opacity:'0.8',});
$(".w5").slidetoggle();
};
$(".w6").hide();
$("#act6").css({opacity:'0.8',});
$("#act6").animate({opacity:1});
$("#work6").hover(function(){
$(this).animate({
    opacity:'0.5',
    left:'250px',
});
$(".w6").slideToggle();}),
function(){
$(this).animate({opacity:'0.8',});
$(".w6").slidetoggle();
};
$(".w7").hide();
$("#act7").css({opacity:'0.8',});
$("#act7").animate({opacity:1});
$("#work7").hover(function(){
$(this).animate({
    opacity:'0.5',
    left:'250px',
});
$(".w7").slideToggle();}),
function(){
$(this).animate({opacity:'0.8',});
$(".w7").slidetoggle();
};
$(".w8").hide();
$("#act8").css({opacity:'0.8',});
$("#act8").animate({opacity:1});
$("#work8").hover(function(){
$(this).animate({
    opacity:'0.4',
    left:'250px',
});
$(".w8").slideToggle();}),
function(){
$(this).animate({opacity:'0.8',});
$(".w8").slidetoggle();
};
});
function message(){
var name = alert.value;
name = true;
var email = alert.value;
email = true;
var message1 = alert.value;
message1 = true;
if( name === true && email ===true && message1 == true){
alert("Thank you for reaching out to us") ;
}
else
{
alert ("Write your name correctly");
}
}



