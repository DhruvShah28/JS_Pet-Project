function accordian(disp) {
    var change = document.getElementById(disp); 
    var allsection = document.getElementsByClassName("menu-items");
    var allarrows = document.getElementsByClassName("down-arrow"); 
    
    for (let i = 0; i < allsection.length; i++) {
        allarrows[i].style.transform = "rotate(45deg)";
        allarrows[i].style.transition = "transform 100ms linear";
    }

    if (change.style.display === "block") {
        change.style.display = "none";
    } else {
        change.style.display = "block";
        
        var relatedAccordion = change.previousElementSibling;
        var arrow = relatedAccordion.querySelector(".down-arrow");
        arrow.style.transform = "rotate(225deg)";
        arrow.style.transition = "transform 100ms linear";
    }
}


window.onload = function(){
    
var burgerking_details = {
    menuhead: "Burgers",
    menu1: "Cheese Burger",
    menu2: "Tex Max Whopper Burger",
    menu3: "BBQ Bacon King",
    menu4: "Roadhouse Burger"
}

var subway_details = {
    menuhead: "Classic Subs",
    menu1: "Veggie Delight",
    menu2: "Veggie Patty",
    menu3: "Great Canadian Club",
    menu4: "Chicken Rancher"
}

var redswan_details = {
    menuhead: "Special Pizzas",
    menu1: "Cheese Pizza",
    menu2: "Chicken Pizza",
    menu3: "Double Veggie Pizza",
    menu4: "Classic Canadian Pizza"
}

var pizzap_details = {
    menuhead: "Gourmet Thins",
    menu1: "Creamy Mushroom Florentine",
    menu2: "Hot Honey",
    menu3: "Pesto Amore Pizza",
    menu4: "Buffalo Chicken Tikka Pizza"
}


var mcd_details = {
    menuhead: "Burgers",
    menu1: "Cheese Burger",
    menu2: "Ham Burger",
    menu3: "Quater Pounder BLT Burger",
    menu4: "McDouble Burger"
}
    var formhandler = document.forms.rest_from;

    var btn = document.getElementById("compare-btn");
    var modalfull = document.getElementById("modal-bg");
    var modalpop = document.getElementById("modal");
    var close = document.getElementById("x-btn");

    var pagesec2 = document.getElementById("pagesec-2");
    var pagesec3 = document.getElementById("pagesec-3");

    var error = document.getElementById("error-text");

    labelhead = document.getElementById("changemenu");
    label1 = document.getElementById("change1");
    label2 = document.getElementById("change2");
    label3 = document.getElementById("change3");
    label4 = document.getElementById("change4");

    setTimeout(() => {
        if(!formhandler.restaurant.onchange || formhandler.restaurant.options[formhandler.restaurant.selectedIndex].value === "XX"){
        
            error.style.display = "block";
            formhandler.restaurant.style.background = "rgba(255, 0, 0, 0.6)"
        };
    }, 3000)

    console.log(formhandler);

    

    formhandler.restaurant.onchange = function(){
        var chk_val = formhandler.restaurant.options[formhandler.restaurant.selectedIndex].value

        switch(chk_val){
            case "bking":
                labelhead.innerHTML = burgerking_details.menuhead
                label1.innerHTML = burgerking_details.menu1
                label2.innerHTML = burgerking_details.menu2
                label3.innerHTML = burgerking_details.menu3
                label4.innerHTML = burgerking_details.menu4
            break;

            case "subway":
                labelhead.innerHTML = subway_details.menuhead
                label1.innerHTML = subway_details.menu1
                label2.innerHTML = subway_details.menu2
                label3.innerHTML = subway_details.menu3
                label4.innerHTML = subway_details.menu4
            break;

            case "redswan":
                labelhead.innerHTML = redswan_details.menuhead
                label1.innerHTML = redswan_details.menu1
                label2.innerHTML = redswan_details.menu2
                label3.innerHTML = redswan_details.menu3
                label4.innerHTML = redswan_details.menu4
            break;

            case "pizzap":
                labelhead.innerHTML = pizzap_details.menuhead
                label1.innerHTML = pizzap_details.menu1
                label2.innerHTML = pizzap_details.menu2
                label3.innerHTML = pizzap_details.menu3
                label4.innerHTML = pizzap_details.menu4
            break;

            case "mcd":
                labelhead.innerHTML = mcd_details.menuhead                
                label1.innerHTML = mcd_details.menu1
                label2.innerHTML = mcd_details.menu2
                label3.innerHTML = mcd_details.menu3
                label4.innerHTML = mcd_details.menu4
            break;
            
        }
        
        if (chk_val != "XX"){
            pagesec2.style.visibility = "visible";
            pagesec3.style.visibility = "visible";
            pagesec2.style.opacity = "1";
            pagesec3.style.opacity = "1";
            
            pagesec2.style.transition = "visibility 500ms ease-in, opacity 500ms ease-in";
            pagesec3.style.transition = "visibility 500ms ease-in, opacity 500ms ease-in";

            error.style.display = "none";
            formhandler.restaurant.style.background = "inherit"
        }
        else{
            pagesec2.style.visibility = "hidden";
            pagesec3.style.visibility = "hidden";
            pagesec2.style.opacity = "0";
            pagesec3.style.opacity = "0";
            pagesec2.style.transition = "visibility 500ms ease-in, opacity 500ms ease-in";
            pagesec3.style.transition = "visibility 500ms ease-in, opacity 500ms ease-in";
        }
    }

    btn.onclick = function(){
        modalfull.style.display = "block";
        modalpop.style.animation = "popUp 0.5s ease-in-out"
        modalfull.style.animation = "fadeInBg 0.5s ease-in-out"
        return false;
    };

    close.onclick = function(){
        modalpop.style.animation = "popUp2 0.5s ease-in-out"
        modalfull.style.animation = "fadeInBg2 0.5s ease-in-out"
        setTimeout(function(){
            modalfull.style.display = "none";
          },499);
    
        return false;
    }

    window.onclick = function(event) {
        if (event.target == modalfull) {
        modalpop.style.animation = "popUp2 0.5s ease-in-out"
        modalfull.style.animation = "fadeInBg2 0.5s ease-in-out"
        setTimeout(function(){
            modalfull.style.display = "none";
          },499);
        }
    }
    
} 