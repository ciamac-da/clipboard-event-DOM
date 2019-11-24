var x = document.getElementById("myInput"); 
var y = document.getElementById("mySpan"); 
var z = document.getElementById("myClipboard"); 


x.addEventListener("copy",function(event){
y.innerHTML = "copied";
z.innerText = event.clipboardData;
event.clipboardData.setData("text/plain","Javascript");
z.innerText = event.clipboardData.getData("text/plain"); 
});

x.addEventListener("cut",function(event){
y.innerHTML = "cutted";
z.innerText = event.clipboardData;
});

x.addEventListener("paste",function(event){
y.innerHTML = "pasted";
event.clipboardData.setData("text/plain","Javascript");
z.innerText = event.clipboardData.getData("text/plain"); 
});