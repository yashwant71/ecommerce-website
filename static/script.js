window.addEventListener('DOMContentLoaded', () => {
    // console.log('script running')
    var godown = document.getElementById("godown");
    var scrollto = document.getElementById("content2head");
    var godowni = document.getElementById("godowni");
    var goabout = document.getElementById('a2')
    var scrolltoabout = document.getElementById('footer')

    // console.log('sup')
    if (goabout) {
        goabout.addEventListener('click', () => {
            scrolltoabout.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        })
    }
    if (godown) {
        godown.addEventListener('click', () => {
            scrollto.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        })
        godown.addEventListener('mouseover', () => {
            // godowni.classList.add('fa-solid')
            godowni.classList.add('fa-angles-down')
        })
        godown.addEventListener('mouseout', () => {
            // godowni.classList.remove('fa-solid')
            godowni.classList.remove('fa-angles-down')
        })
    }
    // calculating % off itemS.....
    var pricenew = document.getElementsByClassName('pricenew');
    if (godown) {
        var priceold = document.getElementsByClassName('priceold');
        var priceoff = document.getElementsByClassName('priceoff');
        // console.log(pricenew.length);
        for (var i = 0; i <= pricenew.length; i++) {
            var pnt = pricenew[i].innerText
            var pn = parseInt(pnt.substring(1, pnt.length))
            // console.log(pn)
            var pot = priceold[i].innerText
            var po = parseInt(pot.substring(1, pot.length))

            var off = parseInt(((po - pn) / po) * 100)
            // console.log(off)
            var offtext = "(" + off + "% OFF)"
            // console.log(offtext)
            priceoff[i].innerText = offtext;
        }
    }
    // calculating % off for item
    var itempricenew = document.getElementsByClassName('itempricenew');
    if (itempricenew) {
        var itempriceold = document.getElementsByClassName('oldprice');
        var itempriceoff = document.getElementsByClassName('itempriceoff');
        // console.log(pricenew.length);
        var pnt = itempricenew[0].innerText
        var pn = parseInt(pnt)

        var pot = itempriceold[0].innerText
        var po = parseInt(pot)

        var off = parseInt(((po - pn) / po) * 100)
        // console.log(off)
        var offpercent = "-" + off + "%";
        console.log(offtext)
        itempriceoff[0].innerText = offpercent;
    }



})