function newTask(){
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
    if(e.target.tagName==="INPUT" && e.target.className==="close"){
    var div=e.target.parentNode;
    div.remove();
    }else if(e.target.tagName==="INPUT" && e.target.className==="cheks"){
        e.target.classList.toggle('checked');
    }
}