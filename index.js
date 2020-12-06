var menu=document.getElementById('menu');
var cross=document.getElementById('cross')
var header=document.querySelector('header');

var indicator=document.querySelector('.indicator');
var indicator_pos=indicator.getBoundingClientRect();

indicator.style.width=document.querySelector('.active').getBoundingClientRect().width+"px";

var links=document.querySelectorAll('li');
links.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        links.forEach((l)=>{
            if(l!=e.target && l.classList.contains('active')){
                l.classList.remove('active');
            }
        });
        if(!e.target.classList.contains('active')){
            e.target.classList.add('active');
            header.classList.remove('expand');
            //move indicator
            var activelink=document.querySelector('.active');
            var linkposition=activelink.getBoundingClientRect();           
            indicator.style.transform="translateX("+(linkposition.left-indicator_pos.left)+"px)";
            //change width according link
            var link_width=linkposition.width;
            indicator.style.width=link_width+"px";
        }
    });
})


menu.addEventListener('click',()=>{
    header.classList.add('expand');
});
cross.addEventListener('click',()=>{
    header.classList.remove('expand');
});
