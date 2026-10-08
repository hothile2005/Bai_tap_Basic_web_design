
function diem_trung_binh()
{
    let s1 = document.getElementById("s1").value;
    let s2 = document.getElementById("s2").value;
    let dtb = ((parseInt(s1)+parseInt(s2))/2);  
   

    document.getElementById("tb").innerHTML = "ĐTB:" +dtb;

    let xl = dtb;
    // if(xl > 9)
    //     {
    //      xl="Học sinh xuất sắc";
    //     }
    // else if(xl > 8)
    //     {
    //     xl = "Học sinh giỏi";
    //     }
    // else if(xl  >= 7)
    //     {
    //         xl = "Học sinh khá";
    //     }
    // else if(xl >= 5)
    //     {
    //      xl = "Học sinh trung bình";
    //     }
    // else{
    //     xl = "Học sinh yếu";
    // }

    switch(true){
        case (xl >= 9):
            xl="Học sinh xuất sắc";
            document.getElementById("xet").style.backgroundColor="yellow";
        break;
        case(xl>=8):
            xl="Học sinh giỏi";
            document.getElementById("xet").style.backgroundColor="yellow";
        break
        case (xl>=7):
            xl="Học sinh khá";
            document.getElementById("xet").style.backgroundColor ="blue";
        break;
        case (xl>=5):
            xl="Học sinh trung bình";
            document.getElementById("xet").style.backgroundColor ="green";
        break;
        default:
            xl="Học sinh yếu";
            document.getElementById("xet").style.backgroundColor="red";
    }
   document.getElementById("xet").innerHTML =xl;
}