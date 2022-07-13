var ulang = true;
while (ulang){
        // pilihan user
    var user = prompt('Pilih: batu, gunting, atau kertas !');

    // pilihan comp
    // random
    var comp = Math.random();

    if (comp < 0.33){
        comp = 'batu';
    }else if(comp >= 0.33 && comp< 0.66){
        comp = 'gunting';
    }else{
        comp ='kertas';
    }

    // menetukan rules
    var hasil = '';
    if (user == comp){
        hasil = 'SERI !';
    }else if (user == 'batu'){
        // if (comp == 'gunting'){
        //     hasil = 'MENANG YEAY';
        // }else if (comp == 'kertas'){
        //     hasil = 'YAHH KALAH'
        // }
        hasil = (comp == 'gunting') ? 'MENANG YEAY':'YAHH KALAH';
    }else if (user == 'gunting'){
        hasil = (comp == 'kertas') ? 'MENANG YEAY':'YAHH KALAH';
    }else if (user == 'kertas'){
        hasil = (comp == 'batu') ? 'MENANG YEAY':'YAHH KALAH';
    }else{
        hasil = 'Kamu yang bener dong milihnya!'
    }
    // menampilkan hasil
    
    alert("kamu memilih " + user + " dan computer memilih " + comp + '\nJadi, '+ user + ' VS ' +  comp + '\nHasilnya ~' + hasil);
    ulang = confirm('lagi ?');
}
