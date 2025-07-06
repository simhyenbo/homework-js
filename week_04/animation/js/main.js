const tl = gsap.timeline({
  defaults: { opacity: 0, ease: "back.out(1.4)" },
})

tl.from(".text__logotitle", { x: 80, duration: 1 })
  .from(".text__bigtitle .thin", { x: 160, duration: 1 })
  .from(".text__bigtitle", { x: -80, duration: 1 }, "<")
  .from(".text__description", { y: 30 }, "-=0.5")
  .from(".text__link", { y: 40 }, "-=0.4")
  .from(
    "#items > path",
    { scale: 0, transformOrigin: "center", stagger: 0.1 },
    "-=0.2"
  )
  .from(
    "#items > rect",
    { scale: 0, transformOrigin: "center", stagger: 0.1 },
    "-=0.4"
  )
