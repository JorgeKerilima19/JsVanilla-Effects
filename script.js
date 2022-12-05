const $boxes=document.querySelectorAll(".boxEffect");
window.addEventListener("scroll", ()=>{
    const triggerBtn=window.innerHeight/5*4;
    $boxes.forEach(box=>{
        const boxTop=box.getBoundingClientRect().top;
        if (boxTop<triggerBtn){
            box.classList.add("show")
        }else{
            box.classList.remove("show")
        }
    })
})
