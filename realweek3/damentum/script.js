const ACCESS_KEY="8f17e5b4154007bfe61de33808b4413fc9806b3b4c030d45d359a1ea2bc89f91"
$(document).ready(function(){
    setCurrentTime();
    setInterval(function(){
        setCurrentTime()},1000)
    
    var username=getCookie('username');

    if(username){
        $('.greeting').css('display','inline-block');
        $('.user-name').css('display','none');
        $('.greeting').html(`Hello <span class="stored-name">${username}</span>.`);
    }else{
        $('.greeting').css('display','none');
        $('.user-name').css('display','inline-block');
        $('.greeting').html(`What is your name?`);
    }

    $('.user-name').keypress(function(e){
        if(e.which==13){
            var username=e.target.value;
            if(!username){
                return;
            }
            $('.user-name').fadeOut(function(){
                $('.greeting').html(`Hello, ${username}.`);
                $('.greeting').fadeIn(function(){
                    setCookie('username',username,365);
                });
            });
        }
    });

    $('.interest').keypress(function(e){
        if(e.which==13){
            var interest=e.target.value;
            if(!interest){
                return;
            }
            newimage(interest);
            var username=getCookie('username');
            $('.interest').fadeOut(function(){
                $('.greeting').html(`Hello ${username}.`);
                $('.greeting').fadeIn(function(){
                    setCookie('interest',interest,365);
                });
            });
        }
    });

    $('.change-btn').click(function(){
        $('.greeting').html(`what's your interest?`);
        $('.interest').css('display','inline-block');
        $('.interest').focus();
    })
    
    $('.btn-add').click(function(){
        var inputValue=document.getElementById('input').value
      var txt=document.createTextNode(inputValue);
      var li=document.createElement('li');
      var chk=document.createElement("INPUT")
      chk.type="checkbox";
      chk.className="cheks";
      li.append(chk);
      li.append(txt);
     if(inputValue===""){
          alert('write something');
      }else{
          document.getElementById('myList').append(li);
     }
    })
});
function setCookie(cname,cvalue,exdays){
    var d=new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires="expires="+d.toGMTString();
    document.cookie=cname+"="+cvalue+";"+expires+";path=/";
}
function getCookie(cname){
    var name=cname+"=";
    var decodedCookie=decodeURIComponent(document.cookie);
    var ca=decodedCookie.split(';');
    for(var i=0;i<ca.length;i++){
        var c=ca[i];
        while(c.charAt(0)==' '){
            c=c.substring(1);
        }
        if(c.indexOf(name)==0){
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
function setCurrentTime(){
    var now= new Date();
    $('.time').html(now.getHours()+":"+(now.getMinutes()<10?'0':'')+now.getMinutes());
    $('.date').html(now.toLocaleDateString('en-US',{weekday: 'short',year: 'numeric',month: 'short',day: 'numeric'}));
}

function newimage(keyword){
    if(!ACCESS_KEY){
      alert("Please update your access key");
      return;
    }
    var url = `https://api.unsplash.com/search/photos?query=${keyword}&per_page=20&orientation=landscape&client_id=${ACCESS_KEY}`;
    $.get(url,function(data){
      var picture_url = data.results[0].urls.raw;
      setCookie("picture",picture_url);
      $('body').css('background-image',`url(${picture_url})`);
    });
}
// document.getElementById('btn').onclick= function(){
//     var inputValue=document.getElementById('input').value
//      var txt=document.createTextNode(inputValue);
//      var li=document.createElement('li');
//      var chk=document.createElement("INPUT")
//      chk.type="checkbox";
//      chk.className="cheks";
//      li.append(chk);
//      li.append(txt);
//     if(inputValue===""){
//          alert('write something');
//      }else{
//          document.getElementById('myList').append(li);
//      }
//     document.getElementById('input').value=""; 
//      var btn=document.createElement("INPUT");
//     //var text=document.createTextNode("\u00D7");
//      btn.className="close";
//      btn.value="X";
//      btn.type="button";
//      li.appendChild(btn);
//      li.onclick=functionsOnItem;
//      }
//  function functionsOnItem(e){
//     if(e.target.className==="close"){
//      var div=e.target.parentNode;
//     div.remove();
//      }
//     if(e.target.className==="cheks"){
//         e.target.parentNode.classList.toggle('checked');
//      }
// }