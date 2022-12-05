const $boxes=document.querySelectorAll(".boxEffect");
window.addEventListener("scroll", ()=>{
    const triggerBtn=window.innerHeight/5*4;//not to become 0, we want a higher height to the effect so it starts
    $boxes.forEach(box=>{
        const boxTop=box.getBoundingClientRect().top;//gets the box properties related to the x-y axis to the window
        if (boxTop<triggerBtn){//scroll will reduce the distance btw the window and the box 
            box.classList.add("show")
        }else{
            box.classList.remove("show")
        }
    })
})
