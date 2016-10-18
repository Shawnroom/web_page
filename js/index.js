$(document).ready(function(){ 
$('.tabs button').hover(function(){
  $(this).addClass('highlight');},function(){$(this).removeClass('highlight');});
});

$(document).ready(function(){ 
$('.person_box i').hover(function(){
  $(this).addClass('highlight_icon');},function(){
  $(this).removeClass('highlight_icon');});
});

$(document).ready(function(){ 
$('.person_box').hover(function(){
  $(this).addClass('box_light');},function(){$(this).removeClass('box_light');});
});

function timmer(){
  var time = new Date();
  y = time.getFullYear();
  z = time.getMonth();
  w = time.getDay();
  d = time.getDate();
  h = time.getHours();
  m = time.getMinutes();
  s = time.getSeconds();
  ms = time.getMilliseconds();
  
  time_hms = h+':'+m+':'+s;
  document.getElementById('unique_bot').innerHTML = time_hms ;
  setTimeout("timmer()",100);}