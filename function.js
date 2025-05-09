// Khởi tạo các phần tử điều khiển
let btnCallOn = document.querySelector('#btnCallOn');
let btnCallOff = document.querySelector('#btnCallOff');
let btnDenOn = document.querySelector('#btnDenOn');
let btnDenOff = document.querySelector('#btnDenOff');
let btnLoaOn = document.querySelector('#btnLoaOn');
let btnLoaOff = document.querySelector('#btnLoaOff');

let imgCall = document.querySelector('#imgCall');
let imgDen = document.querySelector('#imgDen');
let imgLoa = document.querySelector('#imgLoa');

// Nút bật điện thoại
btnCallOn.addEventListener('click', () => {
  imgCall.src = 'image/dienthoaibat.gif';
  firebase.database().ref("thietbi1").set({ dienthoai: 1 });
});

// Nút tắt điện thoại
btnCallOff.addEventListener('click', () => {
  imgCall.src = 'image/dienthoaitat.png';
  firebase.database().ref("thietbi1").set({ dienthoai: 0 });
});

// Nút bật đèn
btnDenOn.addEventListener('click', () => {
  imgDen.src = 'image/densang.gif';
  firebase.database().ref("thietbi2").set({ den1: 1 });
});

// Nút tắt đèn
btnDenOff.addEventListener('click', () => {
  imgDen.src = 'image/dentat.png';
  firebase.database().ref("thietbi2").set({ den1: 0 });
});

// Nút bật loa
btnLoaOn.addEventListener('click', () => {
  imgLoa.src = 'image/loabat.gif';
  firebase.database().ref("thietbi3").set({ loa: 1 });
});

// Nút tắt loa
btnLoaOff.addEventListener('click', () => {
  imgLoa.src = 'image/loatat.png';
  firebase.database().ref("thietbi3").set({ loa: 0 });
});