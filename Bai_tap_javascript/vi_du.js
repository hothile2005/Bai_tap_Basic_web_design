
function chu_vi(a,b){
    return (a+b)*2;
}

function dien_tich(c,d){
    return c*d;
}

var cd = parseInt(prompt("Nhập chiều dài: "));
var cr = parseInt(prompt("Nhập chiều rộng: "));

var chu_vi_result = chu_vi(cd,cr);
var dien_tich_result = dien_tich(cd,cr);
alert("chu vi hinh chu nhat la: "+ chu_vi_result);
alert('dien tich hinh chu nhat la: '+ dien_tich_result);