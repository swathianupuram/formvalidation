function fnGetName() {


    var up = /^[A-Za-z]+$/;

    a = document.getElementById('userName');

    if (a.value.match(up)) {

        document.getElementById('uname').classList.add("has-success");
document.getElementById('uname').classList.remove("has-error");

        document.getElementById("ok").style.display = "block";
        document.getElementById("notok").style.display = "none";


    } else {
        document.getElementById('uname').classList.add("has-error");
         document.getElementById('uname').classList.remove("has-success");

        document.getElementById("ok").style.display = "none";
        document.getElementById("notok").style.display = "block";


    }
}

function fnGetAmt() {
    var ap = /^[0-9]+$/;
    b = document.getElementById('Amount');

    if (b.value.match(ap)) {

        document.getElementById('amt').classList.add("has-success");
         document.getElementById('amt').classList.remove("has-error");
        document.getElementById("ok1").style.display = "block";
        document.getElementById("notok1").style.display = "none";


    } else {
        document.getElementById('amt').classList.add("has-error");
        document.getElementById('amt').classList.remove("has-success");
        document.getElementById("ok1").style.display = "none";
        document.getElementById("notok1").style.display = "block";


    }
}

function fnGetPwd() {
    var pp = /^.+$/;
    c = document.getElementById("Password");
    if (c.value.match(pp)&&c.value.length<10) {

        document.getElementById('pwd').classList.add("has-success");
        document.getElementById('pwd').classList.remove("has-error");
        document.getElementById("ok2").style.display = "block";
        document.getElementById("notok2").style.display = "none";


    } else {
        document.getElementById('pwd').classList.add("has-error");
         document.getElementById('pwd').classList.remove("has-success");
        document.getElementById("ok2").style.display = "none";
        document.getElementById("notok2").style.display = "block";


    }
}

function fnGetData() {
    var uname = document.getElementById('userName').value;
    var amount = document.getElementById('Amount').value;

    document.getElementById('name').innerHTML = "usename:" + uname;
    document.getElementById('amount').innerHTML = "amount:" + amount;


    alert(" sfsf");
}
