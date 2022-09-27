function checkName() {
    let valueName = document.getElementById("name").value
    if (valueName === "") {
        document.getElementById("msName").innerHTML = "chưa nhập tên !"
        document.getElementById("name").classList.add("error")
    }
}
function removeError(){
    document.getElementById("msName").innerHTML = ""
    document.getElementById("name").classList.remove("error")
}

function checkAddress (){
    let valueAddress = document.getElementById("address").value
    if (valueAddress === "") {
        document.getElementById("msAddress").innerHTML = "chưa nhập địa chỉ !"
        document.getElementById("address").classList.add("error")
    }
}
function removeErrorAddress(){
    document.getElementById("msAddress").innerHTML = ""
    document.getElementById("address").classList.remove("error")
}

function checkDate (){
    let valueDate = document.getElementById("date").value
    if (valueDate === "") {
        document.getElementById("msDate").innerHTML = "chưa nhập ngày tháng !"
        document.getElementById("date").classList.add("error")
    }
}
function removeErrorDate(){
    document.getElementById("msDate").innerHTML = ""
    document.getElementById("date").classList.remove("error")
}
function checkEmail (){
    let valueEmail = document.getElementById("email").value
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let email = document.getElementById("email").value
    if (valueEmail === "" ) {
        document.getElementById("msEmail").innerHTML = "chưa nhập Email !"
        document.getElementById("email").classList.add("error")
    }else if ( email.match(re)){

    }else {
        document.getElementById("msEmail").innerHTML = "vui lòng nhập đúng định dạng Email !"
        document.getElementById("email").classList.add("error")
    }
}
function removeErrorEmail(){
    document.getElementById("msEmail").innerHTML = ""
    document.getElementById("email").classList.remove("error")
}
function checkPhone(){
    let valuePhone = document.getElementById("phone").value
    if (valuePhone === "") {
        document.getElementById("msPhone").innerHTML = "chưa nhập số điện thoại !"
        document.getElementById("phone").classList.add("error")
    }
}
function removeErrorPhone(){
    document.getElementById("msPhone").innerHTML = ""
    document.getElementById("phone").classList.remove("error")
}