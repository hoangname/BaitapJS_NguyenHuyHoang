// BÀI1 Viết chương trình tính lương nhân viên
// input
var luong1ngay = 100.000;
var songaylam = 30;
// output
var luong = 0;
luong = luong1ngay * songaylam;
console.log('bai tap 1:Tong luong = ', luong);






// BAI2 Viết chương trình nhập vào 5 số thực tùy ý

function SUM(a, b, c, d, e) 
{
    return ((a + b + c + d + e)/5);
}



// BAI3 Quy đổi tiền
        function lamgido() {
        let giatrivao = document.getElementById('dauvao').value;
        let select1 = document.getElementById('select1').value;
        let select2 = document.getElementById('select2').value;
        if (select1 == select2) {
            alert(giatrivao);
        }
        if (select1 == "n" && select2 == "m") {
            alert(giatrivao / 24000);
        }
    }







/* // BÀI4 Tính diện tích, chu vi hình chữ nhật */
// input: chieuDai, chieuRong
function show_hello() {
    alert("Welcome to FPT Polytechnic! ")
}

function hinhchunhat() {
    var dai = parseInt(document.forms["hinhchunhatform"]["dai"].value);
    var rong = parseInt(document.forms["hinhchunhatform"]["rong"].value);
    var chuvi = (dai + rong) * 2;
    var dientich = dai * rong;
    // alert(chuvi + "" + dientich);
    document.getElementById("chuvi").innerHTML = "Chu vi của hình chữ nhật có dài" + dai + " và rộng " + rong + "là: " + chuvi;
    document.getElementById("dientich").innerHTML = "Diện tích của hình chữ nhật có dài" + dai + " và rộng " + rong + "là: " + dientich; 
}




// BÀI5 Tính tổng 2 ký số
// input
function sum(y,k)
{
    return (y+k);
}
