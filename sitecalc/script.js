
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