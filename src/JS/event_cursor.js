
let cursor = document.getElementById('cursor');
document.addEventListener('mousemove',function(e){
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y +"px"
});

let cursor_content = document.getElementById('cursor_content');
document.addEventListener('mousemove',function(e){
    let x = e.clientX;
    let y = e.clientY;
    cursor_content.style.left = x + "px";
    cursor_content.style.top = y +"px"
});