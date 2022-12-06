const bimestre1 = [10, 7, 5, 4] //26
const bimestre2 = [8, 7, 3, 6] //24
const bimestre3 = [5, 3, 8, 7] 
const bimestre4 = [4, 4, 3, 4]

const notas = [bimestre1, bimestre2, bimestre3, bimestre4]

console.log(notas)

for(let i = 0; i < notas.length; i++){//acessando o vetor notas
    let somanotabimestre = 0
    let mediadobimestre = 0

    for(let j = 0; j < notas[i].length; j++){//acessando o vetor bimestre dentro de notas
        somanotabimestre = somanotabimestre + notas[i][j]
    }
    console.log("Soma do bimestre:", somanotabimestre)
    mediadobimestre = somanotabimestre / notas.length
    console.log("Media do bimestre:", mediadobimestre)
}