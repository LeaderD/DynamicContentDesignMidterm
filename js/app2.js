var penguin = document.querySelector("#penguin"), 
    rescue = document.querySelector("#rescue"),
    beluga = document.querySelector("#beluga"),
    birds = document.querySelector("#birds"),
    oceanwise = document.querySelector("#oceanwise"),
    otter = document.querySelector("#otter"),
    otteritems = document.querySelector("#toy"),
    jellyfish = document.querySelector("#jellies"),
    dolphin = document.querySelector("#dolphin"),
    logo = document.querySelector("#logo"),
    wetlab = document.querySelector("#wetlab");



jellyfish.addEventListener("mouseover", function() {
    jellyfish.style.opacity = "1"
})

jellyfish.addEventListener("mouseout", function() {
    jellyfish.style.opacity = "0.5"
})

var toyNum = 1;

otteritems.addEventListener("click", function() {
    toyNum = toyNum + 1;
    if(toyNum > 3)
        toyNum = 1;
    otteritems.style.backgroundImage = "url(imgs/OtterItem"+toyNum+".svg)";
});

var birdcall = new Audio('./sounds/birdcall.wav')
birds.addEventListener("click",function() {
    birdcall.play()
});

var dolphinwhistle = new Audio('./sounds/flipper.wav')
dolphin.addEventListener("click",function() {
    dolphinwhistle.play();
})

var bubbles = new Audio ('./sounds/pop.wav')
oceanwise.addEventListener("click",function() {
    bubbles.play();
})

var splash = new Audio ('./sounds/splash.wav')
wetlab.addEventListener("click",function() {
    splash.play();
})

rescue.addEventListener("mouseover", function() {
    rescue.style.width = "28%"
    rescue.style.height = "28%"
});

rescue.addEventListener("mouseout", function() {
    rescue.style.width = "25%"
    rescue.style.height = "25%"
})

beluga.addEventListener("click", function() {
    beluga.style.opacity = "0"
})
    
var myLeft = 5;

penguin.addEventListener("click",function() {
    myLeft = myLeft-1
    penguin.style.marginLeft = myLeft+"%";
})
var logodesc = document.querySelector("#LogoDesc"),
    penguindesc = document.querySelector("#PenguinDesc"),
    rescuedesc = document.querySelector("#RescueDesc"),
    penguindesc = document.querySelector("#PenguinDesc"),
    belugadesc = document.querySelector("#BelugaDesc"),
    birdsdesc = document.querySelector("#AmazonDesc"),
    oceanwisedesc = document.querySelector("#OceanWiseDesc"),
    otterdesc = document.querySelector("#OtterDesc"),
    jellyfishdesc = document.querySelector("#JellyfishDesc"),
    dolphindesc = document.querySelector("#DolphinDesc"),
    wetlabdesc = document.querySelector("#WetLabDesc");

logo.addEventListener("mouseover", function() {
    logodesc.style.left = "2%"
})
logo.addEventListener("mouseout", function() {
    logodesc.style.left = "-20%"
})

penguin.addEventListener("mouseover", function() {
    penguindesc.style.left = "2%"
})
penguin.addEventListener("mouseout", function() {
    penguindesc.style.left = "-20%"
})

wetlab.addEventListener("mouseover", function() {
    wetlabdesc.style.left = "80%"
})
wetlab.addEventListener("mouseout", function() {
    wetlabdesc.style.left = "100%"
})

rescue.addEventListener("mouseover", function() {
    rescuedesc.style.left = "75%"
})
rescue.addEventListener("mouseout", function() {
    rescuedesc.style.left = "100%"
})

dolphin.addEventListener("mouseover", function() {
    dolphindesc.style.opacity = "1"
})
dolphin.addEventListener("mouseout", function() {
    dolphindesc.style.opacity = "0"
})

otter.addEventListener("mouseover", function() {
    otterdesc.style.opacity = "1"
})
otter.addEventListener("mouseout", function() {
    otterdesc.style.opacity = "0"
})

jellyfish.addEventListener("mouseover", function() {
    jellyfishdesc.style.opacity = "1"
})
jellyfish.addEventListener("mouseout", function() {
    jellyfishdesc.style.opacity = "0"
})

oceanwise.addEventListener("mouseover", function() {
    oceanwisedesc.style.opacity = "1"
})
oceanwise.addEventListener("mouseout", function() {
    oceanwisedesc.style.opacity = "0"
})

birds.addEventListener("mouseover", function() {
    birdsdesc.style.marginTop = "-50%"
})
birds.addEventListener("mouseout", function() {
    birdsdesc.style.marginTop = "-100%"
})

beluga.addEventListener("mouseover", function() {
    belugadesc.style.opacity = "1"
})
beluga.addEventListener("mouseout", function() {
    belugadesc.style.opacity = "0"
})