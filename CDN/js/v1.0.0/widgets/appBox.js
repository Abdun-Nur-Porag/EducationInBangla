//app box general
const appBox= () => create("article")
  .class({
    main: "no-padding",
    size: "auto"
  })

const appBoxMedium=()=>create("article")
.class({
  main:"no-padding",
  size:"medium"
})

const appBoxSmall= () => create("article")
  .class({
    main: "no-padding",
    size: "small"
  })
const appBoxLarge= () => create("article")
  .class({
    main: "no-padding",
    size: "large"
  })
const appBoxExtra= () => create("article")
  .class({
    main: "no-padding",
    size: "extra"
  })
//app box top 
const appBoxTopLeft = () => create("div")
  .class({
    padding: "padding",
    abs: "absolute",
    cent: "left",
    mid: "top"
  })

const appBoxTopRight = () => create("div")
  .class({
    padding: "padding",
    abs: "absolute",
    cent: "right",
    mid: "top"
  })

const appBoxTopCenter = () => create("div")
  .class({
    padding: "padding",
    abs: "absolute",
    cent: "center",
    mid: "top"
  })

//app box middle
const appBoxMiddleLeft=()=>create("div")
.class({
  padding: "padding",
  abs: "absolute",
  cent: "left",
  mid: "middle"
})

const appBoxMiddleRight=()=>create("div")
  .class({
    padding: "padding",
    abs: "absolute",
    cent: "right",
    mid: "middle"
  })

const appBoxMiddleCenter = () => create("div")
  .class({
    padding: "padding",
    abs: "absolute",
    cent: "center",
    mid: "middle"
  })
  
//app box bottom
const appBoxBottomLeft = () => create("div")
  .class({
    padding: "padding",
    abs: "absolute",
    cent: "left",
    mid: "bottom"
  })

const appBoxBottomRight = () => create("div")
  .class({
    padding: "padding",
    abs: "absolute",
    cent: "right",
    mid: "bottom"
  })

const appBoxBottomCenter = () => create("div")
  .class({
    padding: "padding",
    abs: "absolute",
    cent: "center",
    mid: "bottom"
  })