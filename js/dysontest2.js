

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
$(function(){
 if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      var ptop = 50
    }else{
      var ptop = 90
    }
 $("#open1").click(function() {
    $("#changecontent0").fadeToggle( "slow"),300;
   $("#changecontent1").fadeToggle( "slow"),300;
   var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({
      scrollTop: $('#changecontent0').offset().top-ptop}, 600);
          });
$("#open2").click(function() {
   $("#changecontent1").fadeToggle( "fast"),300;
   $("#changecontent2").fadeToggle( "fast"),300;
   var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
$body.animate({
      scrollTop: $('#changecontent1').offset().top-ptop}, 600);
          });
 });  
function share() {
  FB.ui({
  method: 'feed',
  link: 'http://www.yesim.tw/blink/index.html',
  picture:'http://www.yesim.tw/blink/img/dyson/dyson.png',
  name:"BLINK貝力地板-8個我願意",
  description:"現場獨家抽Dyson吸塵器，更多好禮現場送給你",
  caption:'12/15-12/18建材展，世貿一館B1210',
  hashtag:"#8個我願意",

},function(response) {
    if (response && !response.error_message) {
      alert('你已成功分享');
    } else {
      alert('分享失敗');
    }
  });

};

/*youtube api*/
/*載入影片*/
  function progress(percent, $element) {
  var progressBarWidth = percent * $element.width() / 100;
// $element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");

  $element.find('div').animate({ width: progressBarWidth });
}
 // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'IypkCqj6GRo',
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
            
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
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
        $.get("https://script.google.com/macros/s/AKfycbzrXhY4bTKgPqXpR32BG977SFtBJLB-c4HaAvTRceTm5HKoWE8/exec", {
                    "name": document.getElementById("nameInput").value,
                    "phone": document.getElementById("phoneInput").value,
                    "email": document.getElementById("emailInput").value,
                    "product": document.getElementById("productInput").value
                },
                function (data) {
          
                });
         window.location.assign("http://www.yesim.tw/blink/thank_dyson.html");
         window.location.href("http://www.yesim.tw/blink/thank_dyson.html");
         window.location.replace("HTTP://www.jsbiji.com");
        //           $('#formModal').modal('hide');
                  
              fbq('track', 'CompleteRegistration');
              ga('send','event','抽獎','click','送出表單');

      }
      alert("ccc")
       window.location.assign("http://www.yesim.tw/blink/thank_dyson.html")

    }
/*注意事項*/

$(document).ready(function(){

  $('#notice_toggle').click(function(){
    $( "#notice_toggle" ).toggleClass( "open" );
    $(".notice_content_more").slideToggle();
  });
});