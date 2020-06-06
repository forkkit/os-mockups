var animOptions, backButton, bg, bubblesBottom, bubblesTop, currentState, fast, faster, goToExpanded, goToMain, h, mail_1, mail_1_Buttons, mail_1_Close, mail_1_Time, mail_2, mail_2_Buttons, mail_2_Close, mail_2_Dots, mail_2_Time, mail_3, mail_3_Buttons, mail_3_Close, mail_3_Dots, mail_3_Time, mask, medium, slow, slower, w;

w = 1100;

h = 880;

currentState = "MAIN";

animOptions = {
  time: 0.2,
  curve: Spring({
    damping: 0.95
  })
};

slower = {
  time: 0.34,
  curve: Spring({
    damping: 0.86
  })
};

slow = {
  time: 0.28,
  curve: Spring({
    damping: 0.9
  })
};

medium = {
  time: 0.2,
  curve: Spring({
    damping: 0.97
  })
};

fast = {
  time: 0.12,
  curve: Spring({
    damping: 0.97
  })
};

faster = {
  time: 0.04,
  curve: Spring({
    damping: 0.99
  })
};

bg = new Layer({
  width: w,
  height: h,
  image: "assets/bg.png"
});

bubblesTop = new Layer({
  parent: bg,
  width: 394,
  height: 237,
  x: 213,
  y: 67,
  image: "assets/bubbles-top.png",
  animationOptions: animOptions
});

bubblesTop.states.faded = {
  y: -130,
  opacity: 0.2
};

bubblesBottom = new Layer({
  parent: bg,
  width: 394,
  height: 107,
  x: 213,
  y: 504 - 27,
  image: "assets/bubbles-bottom.png",
  animationOptions: animOptions
});

bubblesBottom.states.faded = {
  y: 600,
  opacity: 0.2
};

mail_3 = new Layer({
  parent: bg,
  width: 394,
  height: 129,
  x: 213,
  y: 335,
  opacity: 0.5,
  image: "assets/mail-3.png",
  animationOptions: slower
});

mail_3.states.expanded = {
  y: 446,
  opacity: 1
};

mail_3.states.hover = {
  y: 335 + 3
};

mail_3.states.previous_actions = {
  y: 446 + 27
};

mail_3_Dots = new Layer({
  parent: mail_3,
  width: 394,
  height: 25,
  x: 0,
  y: 104,
  opacity: 1,
  scale: 1,
  image: "assets/dots.png",
  animationOptions: fast
});

mail_3_Dots.states.hidden = {
  height: 1,
  opacity: 0.001,
  y: 150,
  scale: 0.001
};

mail_3_Buttons = new Layer({
  parent: mail_3,
  width: 394,
  height: 1,
  y: 94,
  opacity: 0.001,
  image: "assets/mail-buttons.png",
  animationOptions: slow
});

mail_3_Buttons.states.visible = {
  y: 114,
  height: 48,
  opacity: 1
};

mail_3_Time = new Layer({
  parent: mail_3,
  width: 130,
  height: 16,
  x: 254,
  y: 17,
  image: "assets/time-3.png",
  animationOptions: fast
});

mail_3_Time.states.moved = {
  x: 254 - 17
};

mail_3_Close = new Layer({
  parent: mail_3,
  width: 16,
  height: 16,
  x: 362,
  y: 16,
  opacity: 0.001,
  scale: 0.001,
  image: "assets/close.png",
  animationOptions: fast
});

mail_3_Close.states.visible = {
  opacity: 1,
  scale: 1
};

mail_2 = new Layer({
  parent: bg,
  width: 394,
  height: 129,
  x: 213,
  y: 330,
  opacity: 1,
  brigthness: 20,
  image: "assets/mail-2.png",
  animationOptions: slower
});

mail_2.states.expanded = {
  y: 305,
  opacity: 1
};

mail_2.states.hover = {
  y: 330 + 1
};

mail_2_Dots = new Layer({
  parent: mail_2,
  width: 394,
  height: 25,
  x: 0,
  y: 104,
  opacity: 1,
  scale: 1,
  image: "assets/dots.png",
  animationOptions: fast
});

mail_2_Dots.states.hidden = {
  height: 1,
  opacity: 0.001,
  y: 150,
  scale: 0.001
};

mail_2_Buttons = new Layer({
  parent: mail_2,
  width: 394,
  height: 1,
  y: 94,
  opacity: 0.001,
  image: "assets/mail-buttons.png",
  animationOptions: slow
});

mail_2_Buttons.states.visible = {
  y: 114,
  height: 48,
  opacity: 1
};

mail_2_Time = new Layer({
  parent: mail_2,
  width: 130,
  height: 16,
  x: 254,
  y: 17,
  image: "assets/time-2.png",
  animationOptions: fast
});

mail_2_Time.states.moved = {
  x: 254 - 17
};

mail_2_Close = new Layer({
  parent: mail_2,
  width: 16,
  height: 16,
  x: 362,
  y: 16,
  opacity: 0.001,
  scale: 0.001,
  image: "assets/close.png",
  animationOptions: fast
});

mail_2_Close.states.visible = {
  opacity: 1,
  scale: 1
};

mail_1 = new Layer({
  parent: bg,
  width: 394,
  height: 135,
  x: 213,
  y: 316,
  image: "assets/mail-1.png",
  animationOptions: slow
});

mail_1.states.expanded = {
  y: 131
};

mail_1.states.hover = {
  y: 316 - 2
};

mail_1_Buttons = new Layer({
  parent: mail_1,
  width: 394,
  height: 4,
  y: 114,
  opacity: 0.001,
  image: "assets/mail-buttons.png",
  animationOptions: fast
});

mail_1_Buttons.states.visible = {
  height: 48,
  opacity: 1
};

mail_1_Time = new Layer({
  parent: mail_1,
  width: 130,
  height: 16,
  x: 254,
  y: 17,
  image: "assets/time-1.png",
  animationOptions: fast
});

mail_1_Time.states.moved = {
  x: 254 - 17
};

mail_1_Close = new Layer({
  parent: mail_1,
  width: 16,
  height: 16,
  x: 362,
  y: 16,
  opacity: 0.001,
  scale: 0.001,
  image: "assets/close.png",
  animationOptions: fast
});

mail_1_Close.states.visible = {
  opacity: 1,
  scale: 1
};

backButton = new Layer({
  parent: bg,
  width: 38,
  height: 38,
  x: 219,
  y: 68,
  scale: 0.01,
  opacity: 0,
  image: "assets/back.png",
  animationOptions: slow
});

backButton.states.visible = {
  scale: 1,
  opacity: 1
};

mask = new Layer({
  parent: bg,
  width: w,
  height: h,
  image: "assets/mask.png"
});

mail_1.onTap(function() {
  if (currentState === "MAIN") {
    return goToExpanded();
  }
});

bubblesTop.onTap(function() {
  if (currentState === "EXPANDED") {
    return goToMain();
  }
});

bubblesBottom.onTap(function() {
  if (currentState === "EXPANDED") {
    return goToMain();
  }
});

mail_1.onMouseOver(function() {
  mail_1_Close.animate("visible");
  mail_1_Time.animate("moved");
  if (currentState === "MAIN") {
    mail_1.animate("hover");
    mail_2.animate("hover");
    return mail_3.animate("hover");
  }
});

mail_1.onMouseOut(function() {
  mail_1_Close.animate("default");
  mail_1_Time.animate("default");
  if (currentState === "MAIN") {
    mail_1.animate("default");
    mail_2.animate("default");
    return mail_3.animate("default");
  }
});

mail_2.onMouseOver(function() {
  if (currentState === "EXPANDED") {
    mail_2_Close.animate("visible");
    return mail_2_Time.animate("moved");
  }
});

mail_2.onMouseOut(function() {
  if (currentState === "EXPANDED") {
    mail_2_Close.animate("default");
    return mail_2_Time.animate("default");
  }
});

mail_3.onMouseOver(function() {
  if (currentState === "EXPANDED") {
    mail_3_Close.animate("visible");
    return mail_3_Time.animate("moved");
  }
});

mail_3.onMouseOut(function() {
  if (currentState === "EXPANDED") {
    mail_3_Close.animate("default");
    return mail_3_Time.animate("default");
  }
});

mail_2_Dots.onTap(function() {
  if (currentState === "EXPANDED") {
    mail_2_Dots.animate("hidden");
    mail_2_Buttons.animate("visible");
    return mail_3.animate("previous_actions");
  }
});

mail_3_Dots.onTap(function() {
  if (currentState === "EXPANDED") {
    mail_3_Dots.animate("hidden");
    return mail_3_Buttons.animate("visible");
  }
});

goToExpanded = function() {
  currentState = "EXPANDED";
  bubblesTop.animate("faded");
  bubblesBottom.animate("faded");
  mail_1.animate("expanded");
  mail_2.animate("expanded");
  mail_3.animate("expanded");
  backButton.animate("visible");
  return mail_1_Buttons.animate("visible");
};

goToMain = function() {
  currentState = "MAIN";
  bubblesTop.animate("default");
  bubblesBottom.animate("default");
  mail_1.animate("default");
  mail_2.animate("default");
  mail_3.animate("default");
  backButton.animate("default");
  mail_1_Buttons.animate("default");
  mail_2_Dots.animate("default");
  mail_2_Buttons.animate("default");
  mail_3_Dots.animate("default");
  return mail_3_Buttons.animate("default");
};
