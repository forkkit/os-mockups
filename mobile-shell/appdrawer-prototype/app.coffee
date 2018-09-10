## Base layer and background

home = new Layer
    width: 360
    height: 720
    image: "images/background.png"
home.center()


## App drawer carousel

page = new PageComponent
    width: 360
    height: 694
    y: 26
    scrollHorizontal: false
page.parent = home

page1 = new Layer
    width: 360
    height: 511
    backgroundColor: "rgba(0,0,0,0)"
page1.parent = page.content

page2 = new Layer
    width: 360
    height: 694
    image: "images/app-drawer-transparent.png"

hideArrow = new Layer
    width: 360
    height: 40
    y: 0
    rotation: 180
    image: "images/hide-arrow.png"
    animationOptions:
          time: 0.2
hideArrow.parent = page2

hideArrow.states.up =
    rotation: 0

page3 = new Layer
    width: 360
    height: 694
    image: "images/app-page-transparent.png"

page4 = new Layer
    width: 360
    height: 694
    image: "images/app-page-transparent.png"

page.addPage(page2, "bottom")
page.addPage(page3, "bottom")
page.addPage(page4, "bottom")


## Page indicator dots

dots = new Layer
    width: 360
    height: 694
    image: "images/dots.png"
    opacity: 0
dots.parent = home

dots.states.visible =
  opacity: 1

activeDot = new Layer
    width: 360
    height: 694
    image: "images/active-dot.png"
    opacity: 0
activeDot.parent = home

activeDot.animationOptions =
    curve: Bezier.easeOut
    time: 0.15

activeDot.states.page2 =
  opacity: 1
  y: 0

activeDot.states.page3 =
  opacity: 1
  y: 40

activeDot.states.page4 =
  opacity: 1
  y: 80


## Page change behavior

page.on "change:currentPage", ->
  if page.currentPage == page1
    hideArrow.animate("default")
    dots.stateSwitch("default")
    activeDot.stateSwitch("default")

  else if page.currentPage == page2
    hideArrow.animate("up")
    dots.stateSwitch("visible")
    activeDot.animate("page2")

  else if page.currentPage == page3
    activeDot.animate("page3")

  else if page.currentPage == page4
    activeDot.animate("page4")


## Apps in the overview

apps = new Layer
    width: 1160
    height: 654
    y: -50 - 26
    x: -400
    scale: 0.6
    backgroundColor: "rgba(0,0,0,0)"
    animationOptions:
      time: 0.2
apps.parent = page1

appsUI = new Layer
    width: 1160
    height: 654
    image: "images/apps.png"

appsUI.parent = apps

apps.states.thumb =
    scale: 0.6
    y: -50


## System top bar

topbar = new Layer
    width: 360
    height: 26
    image: "images/topbar.png"
topbar.parent = home
