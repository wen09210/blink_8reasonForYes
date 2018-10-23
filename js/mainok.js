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

/*跳出影片*/
  function filmpopup(a){
    $('.modal-footer').slideUp();
    var filmname=document.getElementById("filmname"+a).innerHTML;
    document.getElementById('popup_title').innerHTML=filmname;
    document.getElementById('filmInput').value=filmname;
    document.getElementById('shareBtn').setAttribute('onclick','share('+a+')');
    /*$(".embed-responsive iframe").remove();*/
    $(".embed-responsive #showform").remove();
    $(".embed-responsive").append(" <div id='showform'></div>");


    /*var videoid = ["3VBjItj9Zfw","dYaMAM2KTFw","aTE4GAXpQcg","FD7CkohQA-Q","LiJZYs-O41o","4sAzmO2NulQ","XAPrsn9fWfY","TTCT7zLvhcA"];
      $('<iframe id="showform" width="420" height="315" frameborder="0" allowfullscreen></iframe>')
          .attr("src", "http://www.youtube.com/embed/" + videoid[a-1]+"?enablejsapi=1")
          .appendTo(".embed-responsive");
    onYouTubeIframeAPIReady();*/
    createPlayer(a);




  }
      var tag = document.createElement('script');
  tag.id = 'iframe-demo';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  var videoid = ["3VBjItj9Zfw","dYaMAM2KTFw","aTE4GAXpQcg","FD7CkohQA-Q","LiJZYs-O41o","4sAzmO2NulQ","XAPrsn9fWfY","TTCT7zLvhcA"];
  function createPlayer(a) {
    player = new YT.Player('showform', {

          height: '390',
          width: '640',
          videoId:videoid[a-1] ,
          playerVars:{
            loop: 0,
            disablekb: 1,
            modestbranding:0,
            showinfo: 0,
            autohide: 0,
            iv_load_policy: 3,
            rel: 0,
            playsinline: 0,
            controls: 0,

            // autoplay: true
        },

        events: {
          'onStateChange': onPlayerStateChange
        }
    });
  }
  function popout(playerStatus) {
    if (playerStatus == 0) {
    $('.modal-footer').slideDown();
    }
  }
  function onPlayerStateChange(event) {
    popout(event.data);
  }
/*傳送表單*/
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
                  $('#myModal').modal('hide');
                  
              $('#sharemodal').modal({
                show: true
              });

                });

    }
    }
/*FB分享*/
function share(e) {
  var caption=["1","2"];
  var picture=["8fbyes","23sadxw"];
  var name=["貝力地板-曬衣篇","2"];
  var description=["簡單幸福，只要我感覺夠","3"];
  var N=e-1;
  FB.ui({
  method: 'feed',
  link: 'http://www.yesim.tw/blink/thank.html',
  caption: caption[N],
  picture:'http://www.yesim.tw/blink/img/'+picture[N]+'.png',
  name:name[N],
  description:description[N],
  caption:'12/15-12/18建材展，世貿一館B1201抽Iphone',
  hashtag:"#8個我願意",


},function(response) {
    if (response && !response.error_message) {
      alert('你已成功分享');
      window.location.assign("http://www.yesim.tw/blink/thank.html")
    } else {
      alert('分享失敗');
    }
  });

}
/*選單滑動*/
$(function(){

        $('#nav2').click(function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
       	$("html, body").animate({ scrollTop:  $(".method").offset().top-90 }, "slow");
     	  		return false;
          return false;
          });

        $('#nav3').click(function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
       	$("html, body").animate({ scrollTop:  $(".gift_triple").offset().top-90 }, "slow");
     	  		return false;
          return false;
          });

        $('#nav4').click(function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
       	$("html, body").animate({ scrollTop:  $(".film").offset().top-90 }, "slow");
     	  		return false;
          return false;
          });

        $('#nav5').click(function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
       	$("html, body").animate({ scrollTop:  $(".notice").offset().top-90 }, "slow");
     	  		return false;
          return false;
          });
        $('#meow').click(function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
        $("html, body").animate({ scrollTop:  $(".film").offset().top-90 }, "slow");
            return false;
          return false;
          });

});  

