

function pencet(tombol_id) {
    let tombol = document.getElementById(tombol_id)
    tombol.style.backgroundColor = `#A8A8A8`;
    comp(tombol_id);
}



function comp(tombol_id) {
    const pilihan = ['batu', 'gunting', 'kertas']
    const randNum = Math.floor(Math.random() * 3);
    const musuh = document.getElementById(`tombolmusuh${randNum}`)
    musuh.style.backgroundColor = '#A8A8A8'
    //batu
    if(tombol_id === 'tombol1' && randNum === 0) {
        sama()
    } else if (tombol_id === 'tombol1' && randNum === 1) {
        menang()
    } else if (tombol_id === 'tombol1' && randNum === 2){
        kalah()
    }
    //gunting
    if(tombol_id === 'tombol2' && randNum === 1) {
        sama()
    } else if (tombol_id === 'tombol2' && randNum === 2) {
        menang()
    } else if (tombol_id === 'tombol2' && randNum === 0) {
        kalah()
    }

    //gunting
    if(tombol_id === 'tombol3' && randNum === 2) {
        sama()
    } else if (tombol_id === 'tombol3' && randNum === 0) {
        menang()
    } else if (tombol_id === 'tombol2' && randNum === 1){
        kalah()
    }

}

function sama() {
    document.getElementById("hasil").textContent = "DRAW"
    document.getElementById("hasil").style.backgroundColor = "#AFE1AF"
    
}

function menang() {
    document.getElementById("hasil").textContent = "PLAYER WINS"
    document.getElementById("hasil").style.backgroundColor = "#AFE1AF"
}

function kalah() {
    document.getElementById("hasil").textContent = "COM WINS"
    document.getElementById("hasil").style.backgroundColor = "#AFE1AF"
}

function ulang() {
    document.getElementById("hasil").textContent = "VS"
    const ulang = document.querySelectorAll("button");
    for(let i = 0; i < ulang.length; i++) {
        ulang[i].style.backgroundColor = "transparent"
    }
    
}
