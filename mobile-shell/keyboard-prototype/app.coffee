## Base layer and background

home = new Layer
    width: 360
    height: 720
    image: "images/background.png"
home.center()


## App content

app = new Layer
    width: 360
    height: 654
    y: 720 - 40 - 654
    image: "images/app.png"
    animationOptions:
        time: 0.12
app.parent = home

app.states.up =
    y: 720 - 40 - 654 - 212
    animationOptions:
        time: 0.2


## Keyboard

keyboard = new Layer
    width: 360
    height: 212
    y: 720 - 40
    image: "images/keyboard.png"
    animationOptions:
        time: 0.12
keyboard.parent = home

keyboard.states.up =
    y: 720 - 40 - 212
    animationOptions:
        time: 0.2

app.on "tap", ->
    app.animate("up")
    keyboard.animate("up")
    emojiBtn.animate("visible")
    hidekeyboardBtn.animate("visible")


## System bottom bar

bottombar = new Layer
    width: 360
    height: 40
    y: 720 - 40
    image: "images/bottombar.png"
bottombar.parent = home

emojiBtn = new Layer
    width: 50
    height: 40
    y: 720 - 40
    image: "images/emoji-button.png"
    scale: 0
    animationOptions:
        time: 0.15
        delay: 0.1
emojiBtn.parent = home

emojiBtn.states.visible =
  scale: 1

hidekeyboardBtn = new Layer
    width: 50
    height: 40
    y: 720 - 40
    x: 360 - 50
    image: "images/hidekeyboard-button.png"
    scale: 0
    animationOptions:
        time: 0.15
        delay: 0.1
hidekeyboardBtn.parent = home

hidekeyboardBtn.states.visible =
  scale: 1

hidekeyboardBtn.on "tap", ->
    app.animate("default")
    keyboard.animate("default")
    emojiBtn.animate("default")
    hidekeyboardBtn.animate("default")

## App headerbar

headerbar = new Layer
    width: 360
    height: 48
    y: 26
    image: "images/headerbar.png"
headerbar.parent = home


## System top bar

topbar = new Layer
    width: 360
    height: 26
    image: "images/topbar.png"
topbar.parent = home
