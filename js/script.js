const channels = document.querySelector(".channel-categories"),
  channelContent = document.querySelector(".channel-categories__content"),
  huluPlans = document.querySelector(".hulu-plans"),
  hidePlans = document.querySelector(".hide-plans"),
  loginBtn = document.querySelector(".login-btn"),
  modal = document.querySelector(".modal"),
  modalBox = document.querySelector(".modal-box"),
  closeBtn = document.querySelector(".close"),
  sports = document.querySelector(".live-sports"),
  news = document.querySelector(".breaking-news"),
  events = document.querySelector(".biggest-events"),
  animate = document.querySelector(".animate-wrapper"),
  bottomLine = document.querySelector(".bottom-line"),
  heading = document.getElementById("channel-l-heading"),
  subText = document.getElementById("channel-sub-text");


  //Handling The Channel Categories Toggling
function toggleCategories(e, headerText, discreption, image) {
  channels.style.background = image;
  heading.textContent = headerText;
  subText.innerHTML = discreption;


  if (!e.target.classList.contains("current")) {
    document.querySelector(".current").classList.remove("current");
    e.target.classList.add("current");
    animate.classList.add("animate");
  };

  let currPosition = document.querySelector(".current").getBoundingClientRect().x - 60;
  bottomLine.style.left = `${currPosition}px`

  animate.addEventListener("animationend", () => {
    animate.classList.remove("animate")
  });
  }


sports.addEventListener("click", sportClick);
news.addEventListener("click", newsClick);
events.addEventListener("click", eventsClick);

function sportClick(e) {
  let image;
  const media = window.matchMedia("(max-width:720px)");
  if (media.matches) {
    image = `url(../img/live-sports-small.jpg) no-repeat center center / cover`
  } else {
    image = `url(../img/live-sports.jpg) no-repeat center center / cover`
  };

  const description = `Catch your games at home or on the go. Stream live games from major
  college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.`

  toggleCategories(e, "Live Sports", description, image)
}

function newsClick(e) {
  const image = `url(../img/breaking-news.jpg) no-repeat center center / cover`
  const description = `Get the latest udates of events and happenings across the world. Stream live news broadcasts from your favourite news channels including CNN, Fox, ABC and more.`

  toggleCategories(e, "Breaking News", description, image)
}

function eventsClick(e) {
  let image;
  const media = window.matchMedia("(max-width:720px)");
  if (media.matches) {
    image = `url(../img/oscar.jpg) no-repeat center center / cover`
  } else {
    image = `url(../img/oscar.jpg) no-repeat center -30px / cover`
  };
  const description = `Don't miss out on some of the biggests events from the Oscars, Emmies and so on. Set notifications and stay up to date on your favourite events.`

  toggleCategories(e, "Biggest Events", description, image)
}

// Collapsing the plans section
function revertCollapsedState(){
  huluPlans.style.cursor = "auto";
  huluPlans.style.backgroundColor = "#fff"
}


hidePlans.addEventListener("click", (e) => {
  huluPlans.style.height = "150px"
  huluPlans.classList.add("collapsed");
  e.stopPropagation()
})

huluPlans.addEventListener("mouseover", (e) => {
  if (huluPlans.classList.contains("collapsed") && e.target.classList.contains("hulu-plans")) {
    huluPlans.style.cursor = "pointer";
    huluPlans.style.backgroundColor = "hsl(230, 32%, 94%)"
  } else {
   revertCollapsedState()
  }
})

huluPlans.addEventListener("mouseout", (e) => {
  if (huluPlans.classList.contains("collapsed") && e.target.classList.contains("hulu-plans")) {
    revertCollapsedState()
  }
})


huluPlans.addEventListener("click", (e) => {
  const media = window.matchMedia("(max-width:720px)");
  if (media.matches) {
    if (huluPlans.classList.contains("collapsed") && !e.target.matches("button")) {
      huluPlans.style.height = "570px";
      huluPlans.classList.remove("collapsed");
      revertCollapsedState()
    };
  } else {
    if (huluPlans.classList.contains("collapsed") && e.target.classList.contains("hulu-plans")) {
      huluPlans.style.height = "570px";
      huluPlans.classList.remove("collapsed");
      revertCollapsedState()
    };
  }
})


// Displaying the login form
function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}


loginBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);





