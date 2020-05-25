
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
    resg1.innerHTML = `C1 = ${c1}cm, U = ${u}cm e A = ${a}cm² >>> ${verifc1}&le; He &le;${verifau}`
    resg2.innerHTML = `Admite-se, portanto, adotar para he qualquer valor entre ${verifc1} e ${verifau} cm. Recomenda-se adotar
    primeiro o limite inferior (he=${verifc1} cm), que resultará em um dimensionamento mais econômico
    (menor área de aço). Se a verificação do concreto não for satisfeita, recalcular adotando o
    limite superior (he=${verifau} cm). Se ainda assim a verificação do concreto não for satisfeita devese alterar a seção transversal, aumentando de 5 em 5 cm a altura da seção.`
}
