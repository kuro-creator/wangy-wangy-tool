function inputnama(){
    document.getElementById("p")
    const nama = document.getElementById("name").value ;
    document.getElementById("p").innerHTML = "nama yang akan digunakan : " + nama ;
}

function template1(){
    const nama = document.getElementById("name").value ;
    var templateA = 'Buruan, panggil gue SIMP, ato BAPERAN. ini MURNI PERASAAN GUE. Gue pengen genjot bareng '+  nama + '. Ini seriusan, suaranya yang imut, mukanya yang cantik, apalagi badannya yang aduhai ningkatin gairah gue buat genjot '+  nama + '. Setiap lapisan kulitnya pengen gue jilat. Saat gue mau crot, gue bakal moncrot sepenuh hati, bisa di perut, muka, badan, teteknya, sampai lubang burit pun bakal gue crot sampai puncak klimaks. Gue bakal meluk dia abis gue moncrot, lalu nanya gimana kabarnya, ngrasain enggas bareng saat telanjang. Dia bakal bilang kalau genjotan gue mantep dan nyatain perasaannya ke gue, bilang kalo dia cinta ama gue. Gue bakal bilang balik seberapa gue cinta ama dia, dan dia bakal kecup gue di pipi. Terus kita ganti pakaian dan ngabisin waktu nonton film, sambil pelukan ama makan hidangan favorit. Gue mau '+  nama + ' jadi pacar, pasangan, istri, dan idup gue. Gue cinta dia dan ingin dia jadi bagian tubuh gue. Lo kira ini copypasta? Kagak cok. Gue ngetik tiap kata nyatain prasaan gue. Setiap kali elo nanya dia siapa, denger ini baik-baik : DIA ISTRI GUE. Gue sayang '+  nama + ', dan INI MURNI PIKIRAN DAN PERASAAN GUE.'; 
    document.getElementById('hasil').innerHTML = templateA ;
};

function template2() {
    const nama = document.getElementById("name").value ;
    var templateB = 'GW BENAR-BENAR PENGEN JILATI KAKI ' +
    nama + '. GW PENGEN BANGET MENJILAT SETIAP BAGIAN KAKINYA SAMPAI AIR LIUR GW BERCUCURAN KAYAK AIR KERINGAT LALU NGENOD DENGANNYA SETIAP HARI SAMPAI TUBUH KITA MATI RASA YA TÜHAN. GW INGIN MEMBUAT ANAK-ANAK DENGAN ' +
    nama + ' SEBANYAK SATU TÌM SEPAK BOLA DAN MEMBUAT SATU TIM SEPAK BOLA LAINNYA UNTUK MELAWAN ANAK-ANAK TIM SEPAK BOLA PERTAMA GW YANG GW BUAT SAMA ' +
    nama + '. GW PENGEN MASUK KE SETIAP LUBANG TUBUHNYA, MAU ITU LUBANG HIDUNG, LUBANG TELINGA, RONGGA MATA MAUPUN PUSAR, KECUALI PORI-PORI KULIT. KEMUDIAN GW AKAN MENJADIKANNYA MANUSIA YANG TIDAK BISA HIDUP KALO TIDAK GW KENTOG SETIAP HARI. DAN KALAU GUA DISEPONG GUA RELA KONTL GUA PUTUS.';
    document.getElementById('hasil').innerHTML = templateB ;
};

function template3() {
    const nama = document.getElementById("name").value ;
    var templateC = nama + ' ' + nama + ' ' + nama + ' ' +' ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut ' + nama +' wangi aku mau nyiumin aroma wanginya ' + nama +' AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~~~ AAAAAH ' + nama +' keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ' + nama +' AAAAA LUCCUUUUUUUUUUUUUUU............' + nama+' AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ' + nama +' itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ' + nama +' gw ...' + nama +' di laptop ngeliatin gw, ' + nama +' .. kamu percaya sama aku ? aaaaaaaaaaah syukur ' + nama +' aku gak mau merelakan '+ nama +' aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ' + nama +' SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH';
    document.getElementById('hasil').innerHTML = templateC ;
};

function template4 (){
    const nama = document.getElementById("name").value ;
    var templateD = 'watashi mencintai '+nama+' dengan tulus dan penuh kasih sayang, watashi tidak tahan dengan hinaan kalian yg kalian berikan terhadap '+nama+'. '+nama+' selalu menangis dikamarnya setiap malam karena hinaan kalian. "shine, shine, shine" hanya kata itulah yang ada dipikiran watashi tpi watashi hanya manusia lemah yang tak berdaya jika dikroyok banyak orang. Suatu saat kemudian ada orang biadab memfitnah '+nama+' dengan membuat video skandal lalu menyebarkannya di website pornografi. Amarah dan aura merah menyelimuti watashi tanpa disadari darah menetes dari mata watashi secepat kilat watashi menengok cermin lalu watashi melihat rambut watashi belahan menjadi putih lalu ada kagune di punggung watashi lalu sosok kaneki muncul dari dalam cermin tanpa berkata apapun dia memberikan maskernya dan langsung pergi melompati jendela. Watashi langung mencuci masker itu karena bau tengik mulut kaneki membekas di masker itu. Perut Watashi tiba tiba merasa lapar, watashi mencoba indomie buatan '+nama+' lalu watashi muntah muntah 😖, lalu terlintas dipikiran watashi jadi berita itu benar ! ghoul memang harus memakan manusia karena watashi masih mempunya jiwa manusia akhirnya watashi memakan tangan sendiri. Meskipun tidak menghilangkan rasa lapar setidaknya ini cukup untuk berdiri lalu memangsa siapapun yang menghina istri watashi. no mercy no cry u must die, watashi tak segan segan membunuh kalian jika kalian menghina '+nama+'.'
    document.getElementById("hasil").innerHTML = templateD ;
}

function copysemua(elementId) {

    // Create a "hidden" input
    var aux = document.createElement("input");
  
    // Assign it the value of the specified element
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
  
    // Append it to the body
    document.body.appendChild(aux);
  
    // Highlight its content
    aux.select();
  
    // Copy the highlighted text
    document.execCommand("copy");
  
    // Remove it from the body
    document.body.removeChild(aux);

    // kalo udah sukses
    alert("sip sudah di copy");
  
}

clickEnter();
function clickEnter(){
    var input_1 = document.getElementById("name");

    // Execute a function when the user releases a key on the keyboard
    input_1.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
    // Cancel the default action, if needed
        event.preventDefault();
    // Trigger the button element with a click
        document.getElementById("btnAddName").click();
        document.getElementById("btnAddName").click(template1());
        }
    });
}
