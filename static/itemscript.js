// const textBody = require("body");

window.addEventListener('DOMContentLoaded', () => {
    console.log('hello')

    var imgmain = document.getElementById('imagemain');

    document.querySelectorAll('.images007').forEach(element => {
        // console.log(element.src)
        element.addEventListener('mouseover', () => {
            imgmain.src = element.src;
        })
    })

    function funcv549(v549) {
        if (v549.matches) { // If media query matches
            console.log("itemname 550px running")
            var itemname = document.getElementsByClassName('itemname1')[0];
            var name = itemname.innerText
            itemname.innerText = "";
            document.getElementById('mediaitemname1').innerText = name;

        } else {
            menu.classList.remove('fa-bars')
        }
    }
    var v549 = window.matchMedia("(max-width: 549px)")
    funcv549(v549) // Call listener function at run time
    v549.addListener(funcv549);


    document.querySelectorAll('.images007').forEach(element => {
        // console.log(element.src)
        element.addEventListener('mouseover', () => {
            imgmain.src = element.src;
        })
    })

    function funcv1230(v1230) {
        if (v1230.matches) { // If media query matches

            var imgcont = document.getElementsByClassName('imagecontainer')[0];

            imgcont.addEventListener('mouseenter', () => {
                myresult.style.display = "flex"
                imageZoom("imagemain", "myresult");
                var lenses = document.getElementsByClassName('img-zoom-lens');
                lenses[1].parentNode.removeChild(lenses[1]);

            });
            imgcont.addEventListener('mouseleave', () => {
                var lenses = document.getElementsByClassName('img-zoom-lens');
                var myresult = document.getElementById('myresult')
                myresult.style.display = "none"
                for (var i = 0; i < lenses.length; i++) {
                    lenses[i].parentNode.removeChild(lenses[i]);
                }
            });

            function imageZoom(imgID, resultID) {
                var img, lens, result, cx, cy;
                img = document.getElementById(imgID);
                result = document.getElementById(resultID);

                lens = document.createElement("DIV");
                lens.setAttribute("class", "img-zoom-lens");
                img.parentElement.insertBefore(lens, img);

                cx = result.offsetWidth / lens.offsetWidth;
                cy = result.offsetHeight / lens.offsetHeight;

                result.style.backgroundImage = "url('" + img.src + "')";
                result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
                lens.addEventListener("mousemove", moveLens);
                img.addEventListener("mousemove", moveLens);
                // lens.addEventListener("touchmove", moveLens);
                // img.addEventListener("touchmove", moveLens);

                function moveLens(e) {
                    var pos, x, y;
                    e.preventDefault();
                    pos = getCursorPos(e);
                    x = pos.x - (lens.offsetWidth / 2);
                    y = pos.y - (lens.offsetHeight / 2);
                    /*prevent the lens from being positioned outside the image:*/
                    if (x > img.width - lens.offsetWidth) {
                        x = img.width - lens.offsetWidth;
                    }
                    if (x < 0) {
                        x = 0;
                    }
                    if (y > img.height - lens.offsetHeight) {
                        y = img.height - lens.offsetHeight;
                    }
                    if (y < 0) {
                        y = 0;
                    }
                    /*set the position of the lens:*/
                    lens.style.left = x + "px";
                    lens.style.top = y + "px";
                    /*display what the lens "sees":*/
                    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
                }

                function getCursorPos(e) {
                    var a, x = 0,
                        y = 0;
                    e = e || window.event;
                    /*get the x and y positions of the image:*/
                    a = img.getBoundingClientRect();
                    /*calculate the cursor's x and y coordinates, relative to the image:*/
                    x = e.pageX - a.left;
                    y = e.pageY - a.top;
                    /*consider any page scrolling:*/
                    x = x - window.pageXOffset;
                    y = y - window.pageYOffset;
                    return {
                        x: x,
                        y: y
                    };
                }
            }
        } else {
            console.log("less than 1230px mquery")
        }
    }
    var v1230 = window.matchMedia("(min-width: 1230px)")
    funcv1230(v1230) // Call listener function at run time
    v1230.addListener(funcv1230);

})