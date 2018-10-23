/*$(document).ready(function(){
	$(".share").hide();
})
function share(){
	$(".share").show();
	$('#myModal').modal('hide');
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
       	$("html, body").animate({ scrollTop:  $(".share").offset().top-90 }, "slow");
     	  		return false;
          return false;
}*/

/*參加人數*/

var count=[];
$.getJSON("https://spreadsheets.google.com/feeds/list/15-56AFT9rL9mblYvwCP18K4GRXvCyaLiOIburssrLcw/1/public/values?alt=json-in-script&callback=?", function(json){
var e = json.feed.entry,
l = e.length,
/*filmn=["幸福時刻","颱風天的幸福"],*/
entry, i, film;
for (i = 0; i < l; i++) {
entry = e[i];
filmname = entry.gsx$film.$t;
count.push("1");
/*if(filmname==filmn[0]){
   count.push("1");
}*/
}
document.getElementById('attendcount').innerHTML="活動參加人數"+count.length;

console.log(count.length);
});

/*跳出影片*/
  function filmpopup(a){

    var filmname=document.getElementById("filmname"+a).innerHTML;
    document.getElementById('filmInput').value=filmname;
    document.getElementById('shareBtn').setAttribute('onclick','share('+a+')');
    /*$(".embed-responsive iframe").remove();*/
    $(".embed-responsive").append(" <div id='showform'></div>");


    /*var videoid = ["3VBjItj9Zfw","dYaMAM2KTFw","aTE4GAXpQcg","FD7CkohQA-Q","LiJZYs-O41o","4sAzmO2NulQ","XAPrsn9fWfY","TTCT7zLvhcA"];
      $('<iframe id="showform" width="420" height="315" frameborder="0" allowfullscreen></iframe>')
          .attr("src", "http://www.youtube.com/embed/" + videoid[a-1]+"?enablejsapi=1")
          .appendTo(".embed-responsive");
    onYouTubeIframeAPIReady();*/
    createPlayer(a);

  }
  /*關閉影片*/

$(function(){  $('#myModal').on('hidden.bs.modal', function (e) {
    $(".embed-responsive #showform").remove();
      function hasClass(element, cls) {
          return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
      }

      var check = document.getElementById('formModal');

      if(hasClass(check, 'in')){
        $("body").css("overflow-y","hidden");
      }
      else{
        $("body").css("overflow-y","scroll");
      }
})
});

$(function(){  $('#formModal').on('hidden.bs.modal', function (e) {
        $("body").css("overflow-y","scroll");
})
});
  /*載入影片*/
  function progress(percent, $element) {
  var progressBarWidth = percent * $element.width() / 100;

// $element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");

  $element.find('div').animate({ width: progressBarWidth });
}
  var tag = document.createElement('script');
  tag.id = 'iframe-demo';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  var videoid = ["SPdUOhzIkBQ","M1csrhjPO1Q","IypkCqj6GRo","Ml6mZSdNywQ","V8PmXDe-lIA","prNWRwtlB44","05voNH0ppgs","TMVd2cimC0A"];
  function createPlayer(a) {
    if(a=="1"||a=="2"||a=="3"||a=="4"||a=="5"||a=="6"||a=="7"){
      player = new YT.Player('showform', {
            height: '390',
            width: '640',
            videoId:videoid[a-1] ,
            playerVars:{
              loop: 0,
              disablekb: 1,
              modestbranding:1,
              showinfo: 0,
              autohide: 0,
              iv_load_policy: 3,
              rel: 0,
              playsinline: 0,
              controls: 1,
          },

          events: {
              'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChangeold
          }
      });
    }
    else{
      player = new YT.Player('showform', {
            height: '390',
            width: '640',
            videoId:videoid[a-1] ,
            playerVars:{
              loop: 0,
              disablekb: 1,
              modestbranding:1,
              showinfo: 0,
              autohide: 0,
              iv_load_policy: 3,
              rel: 0,
              playsinline: 0,
              controls: 0,
          },

          events: {
              'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
      });
    }
  }
  function onPlayerReady(event) {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return false;
    }
    else{
      event.target.playVideo();
    }
}
  function popout(playerStatus) {
    if (playerStatus == 0) {
    $('#myModal').modal('hide');

    $('#formModal').modal('show') ;
    }
    $("body").css("overflow-y","hidden");
    $("#formModal").css("overflow-y","scroll");
    ga( 'send', 'event', '影片Popup', 'video', '看完影片' );
    fbq('track', 'AddPaymentInfo');

  }
  function onPlayerStateChange(event) {
    popout(event.data);
    if (event.data == YT.PlayerState.PLAYING) {

      $('#progressBar').show();
      var playerTotalTime = player.getDuration();

      mytimer = setInterval(function() {
        var playerCurrentTime = player.getCurrentTime();

        var playerTimeDifference = (playerCurrentTime / playerTotalTime) * 100;


        progress(playerTimeDifference, $('#progressBar'));
      }, 1000);        
    } else {
      
      clearTimeout(mytimer);
      $('#progressBar').hide();
    }
  }
  function close(playerStatus) {
    if (playerStatus == 0) {
    $('#myModal').modal('hide');
    }
    $("body").css("overflow-y","hidden");
    $("#formModal").css("overflow-y","scroll");
    ga( 'send', 'event', '影片Popup', 'video', '看完影片' );
    fbq('track', 'AddPaymentInfo');

  }
  function onPlayerStateChangeold(event) {
    close(event.data);
    if (event.data == YT.PlayerState.PLAYING) {

      $('#progressBar').hide();       
    } else {
      
      clearTimeout(mytimer);
      $('#progressBar').hide();
    }
  }
  function stopVideo() {
    player.stopVideo();
}
/*傳送表單*/
    function sendform(){
      function hasClass(element, cls) {
          return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
      }

      var check = document.getElementById('sendform_btn');

      if(hasClass(check, 'disabled')){
        return false;
      }
      else{
        $.get("https://script.google.com/macros/s/AKfycbwt1Qe9-kvTeUyNcJXJLJ-HrEPkdRVXY_LrtNVTu4QvGmkUkNDT/exec", {
                    "name": document.getElementById("nameInput").value,
                    "sex": document.getElementById("sexInput").value,
                    "job": document.getElementById("jobInput").value,
                    "age": document.getElementById("ageInput").value,
                    "phone": document.getElementById("phoneInput").value,
                    "email": document.getElementById("emailInput").value,
                    "film": document.getElementById("filmInput").value
                },
                function (data) {

                });
        
                  $('#formModal').modal('hide');
                  
              $('#sharemodal').modal({
                show: true
              });
              fbq('track', 'CompleteRegistration');
              ga('send','event','影片popup','click','送出表單');

      }

    }

/*
    function sendform(){


    if ($('#sendform_btn').hasClass("disabled")){
      return false;
    }
    else{

       $.get("https://script.google.com/macros/s/AKfycbwt1Qe9-kvTeUyNcJXJLJ-HrEPkdRVXY_LrtNVTu4QvGmkUkNDT/exec", {
                    "name": document.getElementById("nameInput").value,
                    "sex": document.getElementById("sexInput").value,
                    "job": document.getElementById("jobInput").value,
                    "age": document.getElementById("ageInput").value,
                    "phone": document.getElementById("phoneInput").value,
                    "email": document.getElementById("emailInput").value,
                    "film": document.getElementById("filmInput").value
                },
                function (data) {
                  $('#formModal').modal('hide');
                  
              $('#sharemodal').modal({
                show: true
              });

                });

    }
    }
*/
/**/
function fbgift(a){
  ga('send','event','首頁','click','粉絲團送好禮('+a+')');
  fbq('track', 'Purchase');
};
/*FB分享*/
function share(e) {
  var caption=["1","2","3","4","5","6","7","8"];
  var picture="8fbyes";
  var name="BLINK貝力地板-8個我願意";
  var description="簡單幸福，只要我感覺夠";
  var N=e-1;
  FB.ui({
  method: 'feed',
  link: 'http://www.yesim.tw/blink/',
  caption: caption[N],
  picture:'http://www.yesim.tw/blink/img/'+picture+'.png',
  name:"BLINK貝力地板-8個我願意",
  description:description,
  caption:'觀賞影片填資料，並分享，即可參加「履行幸福論-八個我願意」抽獎活動',
  hashtag:"#8個我願意",


},function(response) {
    if (response && !response.error_message) {
      alert('你已成功分享');
      window.location.assign("http://www.yesim.tw/blink/thank.html")
    } else {
      alert('分享失敗');
    }
  });

};
/*注意事項*/

$(document).ready(function(){


  $('#notice_toggle').click(function(){
    $( "#notice_toggle" ).toggleClass( "open" );
    $(".notice_content_more").slideToggle();
  });
});
/*選單滑動*/
$(function(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      var ptop = 57
    }else{
      var ptop = 90
    }
        $('#nav1').click(function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
        $("html, body").animate({ scrollTop:  $(".banner").offset().top-ptop}, "slow");
            return false;
          return false;
          });

        /*$('#nav2').click(function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
       	$("html, body").animate({ scrollTop:  $(".method").offset().top-ptop }, "slow");
     	  		return false;
          return false;
          });*/

        $('#nav3').click(function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
       	$("html, body").animate({ scrollTop:  $(".gift_triple").offset().top-ptop }, "slow");
     	  		return false;
          return false;
          });

        $('#nav4').click(function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
       	$("html, body").animate({ scrollTop:  $(".film").offset().top-ptop}, "slow");
     	  		return false;
          return false;
          });
        $('#tofilmsection').click(function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
        $("html, body").animate({ scrollTop:  $(".film").offset().top-ptop}, "slow");
            return false;
          return false;
          });

        $('.foot_cat').click(function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
        $("html, body").animate({ scrollTop:  $(".film").offset().top-ptop}, "slow");
            return false;
          return false;
          });

        $('#nav5').click(function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
       	$("html, body").animate({ scrollTop:  $(".notice").offset().top-ptop}, "slow");
     	  		return false;
          return false;
          });
        $('#meow').click(function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
        $("html, body").animate({ scrollTop:  $(".film").offset().top-ptop}, "slow");
            return false;
          return false;
          });
        $('.indexdraw_icon').click(function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
        $("html, body").animate({ scrollTop:  $(".film").offset().top-ptop}, "slow");
            return false;
          return false;
          });

});  

