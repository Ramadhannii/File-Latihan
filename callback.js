// Callback
// Syncrounus Callback
// function halo (nama) {
//     alert(`halo, ${nama}`);
// }

// function tampilakanPesan(callback) {
//     const nama = prompt('Masukan Nama: ');
//     callback(nama);
// }

// tampilakanPesan (nama => alert(`halo, ${nama}`));

// const sisw = [
//     {
//         nama : 'Aditiya',
//         kelas : 'XII TKJ 3'
//     },
//     {
//         nama : 'Gandor',
//         kelas : 'XII TKJ 3'
//     },
//     {
//         nama : 'Edii',
//         kelas : 'XII TKJ 3'
//     }
// ];
// console.log('mulai');
// sisw.forEach(s => console.log(s.nama));
// for (let i = 0; i < 10000000;i++){
//     let date = new Date();
// }
// console.log('selesai');



// Asynchronus Callback
// function getDataSiswa(url,success,error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if ( xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response);
//             } else if ( xhr.status === 404 ) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get',url)
//     xhr.send();
// }

// console.log('mulai');
// getDataSiswa('sisw.json', results => {
//     const sisw = JSON.parse(results);
//     sisw.forEach( s => console.log(s.nama));
// }, () => {
// });
// console.log('selesai');



// Menggunakan jQuery 
console.log('mulai')
$.ajax ({
    url: 'sisw.json',
    success: (sisw) => {
        sisw.forEach( s => console.log(s.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');