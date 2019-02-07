function newTask(){
    var inputValue=document.getElementById('input').value
    var txt=document.createTextNode(inputValue);
    var li=document.createElement('li');
    li.append(txt);
    if(inputValue===""){
        alert('write something');
    }else{
        document.getElementById('myList').append(li);
    }
    document.getElementById('input').value=""; 
    var btn=document.createElement("INPUT");
   //var text=document.createTextNode("\u00D7");
    btn.className="close";
    btn.value="X";
    btn.type="button";
    li.appendChild(btn);
    li.onclick=functionsOnItem;
    }
function functionsOnItem(e){
    if(e.target.tagName==="INPUT"){
    var div=e.target.parentNode;
    div.remove();
    }else if(e.target.tagName==="LI"){
        e.target.classList.toggle('checked');

    }
}