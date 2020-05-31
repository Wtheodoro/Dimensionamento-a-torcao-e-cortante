
function calcHe() {
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

    reshe1.innerHTML = `C1 = ${c1.toFixed(2)}cm, U = ${u.toFixed(2)}cm e A = ${a.toFixed(2)}cm² >>> ${verifc1.toFixed(2)}&le; He &le;${verifau.toFixed(2)}`
    reshe2.innerHTML = `Admite-se, portanto, adotar para he qualquer valor entre ${verifc1.toFixed(2)} e ${verifau.toFixed(2)} cm. Recomenda-se adotar
    primeiro o limite inferior (he=${verifc1.toFixed(2)} cm), que resultará em um dimensionamento mais econômico
    (menor área de aço). Se a verificação do concreto não for satisfeita, recalcular adotando o
    limite superior (he=${verifau.toFixed(2)} cm). Se ainda assim a verificação do concreto não for satisfeita devese alterar a seção transversal, aumentando de 5 em 5 cm a altura da seção.`
}

function calcGeometria() {
    let bw1 = document.querySelector('.txtbw')
    let h1 = document.querySelector('.txth')
    let he1 = document.querySelector('.txthe')

    let ae = (Number(bw1.value)-Number(he1.value))*(Number(h1.value)-Number(he1.value))
    let ue = 2*((Number(bw1.value)+Number(h1.value))-2*Number(he1.value))

    resge1.innerHTML = `Ae = (Bw-He).(H-He) = ${ae.toFixed(2)}cm²`
    resge2.innerHTML = `Ue = 2.(Bw+H -2.He) = ${ue.toFixed(2)}cm `
   // = (${bw1}-${He1}).(${h1}-${he1})
   // = 2.(${bw1}+${h1} -2.${he1}) 
}  

function verifDiagonal() {
    let tk = document.querySelector('.txttk')
    let concreto = document.querySelector('.txtc')
    let ae2 = document.querySelector('.txtae')
    let he2 = document.querySelector('.txthe')

    let fcd = Number(concreto.value)/14
    let tsd = 1.4*Number(tk.value)*100
    let alphav2 = -1*(Number(concreto.value)/250) + 1
    let trd2 = 0.5*alphav2*fcd*Number(ae2.value)*Number(he2.value)

    resverif.innerHTML = `Tsd = ${tsd.toFixed(2)}kN.cm e Trd2 = ${trd2.toFixed(2)}kN.cm`

    if (tsd < trd2) {
        resverif1.innerHTML = `Tsd < Trd2 Portanto não haverá esmagamento na biela comprimida`
    } else {
        resverif1.innerHTML = `Tsd => Trd2 !!!Haverá esmagamento na biela comprimida!!!`
    }
}

function calcEstribo() {
    let tk3 = document.querySelector('.txttk')
    let ca3 = document.querySelector('.txtca')
    let ae3 = document.querySelector('.txtae')

    let tsd3 = 1.4*Number(tk3.value)*100
    let fywd = Number(ca3.value)/1.15
    let a90s = tsd3/(2*fywd*Number(ae3.value))

    rescalcEstribo.innerHTML = `(A90/s) = ${a90s.toFixed(4)}cm²/cm`
}

function calcLongitude() {
    let tk4 = document.querySelector('.txttk')
    let ue4 = document.querySelector('.txtue')
    let ca4 = document.querySelector('.txtca')
    let ae4 = document.querySelector('.txtae')

    let tsd4 = 1.4*Number(tk4.value)*100
    let fywd4 = Number(ca4.value)/1.15
    let asl = (tsd4*Number(ue4.value))/(fywd4*2*Number(ae4.value))

    resCalcLong.innerHTML = `Asl = ${asl.toFixed(2)}cm²`
}
/* testando a atribuição a variavel = Number(let) que vi no site do mozilla
function calcLongitude(params) {
    let tk4 = document.querySelector('.txttk')
    let tk4n = Number(tk4)
    let ue4 = document.querySelector('.txtue')
    let ue4n = Number(ue4)
    let ca4 = document.querySelector('.txtca')
    let ca4n = Number(ca4)
    let ae4 = document.querySelector('.txtae')
    let ae4n = Number(ae4)

    let tsd4 = tk4*1.4*100
    let tsd4n = Number(tsd4)
    let fywd4 = ca4n/1.15
    let fywd4n = Number(fywd4)
    let asl = (tsd4n*ue4n)/(fywd4n*2*ae4n)
    
    resCalcLong.innerHTML = `Asl = ${asl.toFixed(2)}cm²`
}
*/
