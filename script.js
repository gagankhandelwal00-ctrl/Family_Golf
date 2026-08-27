let crsr = document.querySelector("#cursor");
let crsrblur = document.querySelector("#cursorblur");

document.addEventListener('mousemove',function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    crsrblur.style.left = dets.x-250+"px";
    crsrblur.style.top =dets.y-250+"px";
})

gsap.registerPlugin(ScrollTrigger);
gsap.to("#nav",{
    backgroundColor:"#000",
    height:"80px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:" top -70%",
        scrub:2
    }
})

const ancor = document.querySelectorAll("#nav a");
ancor.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border = "0.5px solid #fff";
        crsr.style.background ="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "1px solid #95C11E";
        crsr.style.background ="#95C11E"
    })
})
gsap.from("#aboutUs,#aboutUsIn",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutUs",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2,
    },
});
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        scrub:2,
    },
});
gsap.from("#colon1",{
    y:-70,
    x:-70,
scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45",
    scrub:4,
},
});
gsap.from("#colon2",{
    y:70,
    x:70,
scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45",
    scrub:4,
},
});
gsap.from("#page4 h1", {
  y: -70,
//   x:-40,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 60%",
    scrub: 3,
  },
});
