
var arrImg = [];

function pic(n) {
    for (let i = 0; n > 0; i++){
        arrImg[i] = 'p' + n + '.png';
        n--;
    }
    return arrImg.reverse();
}
console.log(pic(5))

var count = 0;
// function front(id) {
//     var img = document.getElementById(id);
//      if (count >= 0 && count < 4) {
//             count++;
//             img.src ='images\\'+ arrImg[count];
//         }else if (count == 4) {
//             count = 0;
//             img.src ='images\\' + arrImg[count];
//         }  
// };
// function back(id) {
//      var img = document.getElementById(id);
//      if (count == 0) {
//             count = 4;
//             img.src ='images\\' + arrImg[count];
//         }else if (count > 0) {
//             count--;
//             img.src ='images\\'+ arrImg[count];
//         }
// };
function frontBack(id, idBut) {
    
    var button = document.getElementById(idBut);
    var img = document.getElementById(id);

    if (button.id == 'b2') {
        if (count == 0) {
            count = 4;
            img.src ='images\\' + arrImg[count];
        }else if (count > 0) {
            count--;
            img.src ='images\\'+ arrImg[count];
        }
    }
    if (button.id == 'b1') {
        if (count >= 0 && count < 4) {
            count++;
            img.src ='images\\'+ arrImg[count];
        }else if (count == 4) {
            count = 0;
            img.src ='images\\' + arrImg[count];
        }  
    };
};
