
function calcGeometria() {
    let dit = document.querySelector('.txtdt')
    let dil = document.querySelector('.txtdl')
    let c = document.querySelector('.txtcobrimento') 
    let bw = document.querySelector('.txtbw')
    let h = document.querySelector('.txth')

    let c1 = Number(c.value) + (Number(dit.value)/10) + (Number(dil.value)/20)
    let u = 2 * (Number(bw.value)+Number(h.value))
    let a = Number(bw.value)*Number(h.value)
    let verifc1 = 2*c1
    let verifau = a/u

    // os innerHTML são só pra testes
    res.innerHTML = `C1 = ${c1}cm, U = ${u}cm e A = ${a}cm²\n${verifc1}&le; He &le;${verifau}`
}

console.log(calcGeometria())

