var maxTrx = 0,
    maxPay = 0,
    size_type = ""


function setMax(grph) {
    for (i = 0; i < grph.nodes.length; i++) {
        trx = grph.nodes[i].trx
        pay = grph.nodes[i].payments
        if (maxTrx < trx) {
            maxTrx = trx
        }
        if (maxPay < pay) {
            maxPay = pay
        }
    };

}
function get_size_type() {
    var t1 = document.getElementById("r1")
    var t2 = document.getElementById("r2")
    var t3 = document.getElementById("r3")

    // console.log(t1)
    size_type = ""

    if (t1.checked) {
        size_type = "trx"
    }
    if (t2.checked) {
        size_type = "payments"
    }

}

function setSize(sz) {


    if (size_type == 'payments') {

        if (sz < 1000) {
            return 5
        } else {

            rel = Math.log10(sz)
            return 5 * rel
        }
    } else {
        rel = sz / maxTrx;
        for (i = 1; i < 9; i++)
            if (rel < (.125) * i) {
                return 5 * i;
            }
    }
}
