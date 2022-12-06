// const bimestre1 = [10, 7, 5, 4] //26
// const bimestre2 = [8, 7, 3, 6] //24
// const bimestre3 = [5, 3, 8, 7] 
// const bimestre4 = [4, 4, 3, 4]

// const notas = [bimestre1, bimestre2, bimestre3, bimestre4]

// console.log(notas)

// for(let i = 0; i < notas.length; i++){//acessando o vetor notas
//     let somanotabimestre = 0
//     let mediadobimestre = 0

//     for(let j = 0; j < notas[i].length; j++){//acessando o vetor bimestre dentro de notas
//         somanotabimestre = somanotabimestre + notas[i][j]
//     }
//     console.log("Soma do bimestre:", somanotabimestre)
//     mediadobimestre = somanotabimestre / notas.length
//     console.log("Media do bimestre:", mediadobimestre)
// }

// const filme1 = [{titulo:'O Auto da Compadecida', ano:2000, diretor:'Guel Arraes', elenco:['Selton Mello', 'Mateus Nachtergaele', 'Marco Nanini', 'Fernanda Montenegro']}]


const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ]
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ]
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ]}
]

for(let i = 0; i < filmes.length; i++){
    console.log(`Titulo: ${filmes[i].titulo}\nAno: ${filmes[i].ano}\nDiretor: ${filmes[i].diretor}`)
    for(let j = 0; j < filmes[i].elenco.length; j++){
        console.log(`Elenco ${j} : ${filmes[i].elenco[j]}`)
    }
    console.log("\n")
}
for(let i in filmes){
    console.log(`Titulo: ${filmes[i].titulo}\nAno: ${filmes[i].ano}\nDiretor: ${filmes[i].diretor}`)
    let x = 0
    for(let j of filmes[i].elenco){
        console.log(`Elenco ${x+1} : ${j}`)
        x = x + 1
    }
    console.log("\n")
}

// for([index,value] of filmes[i].elenco.entries()){ \\ver como funciona
//     console.log(`Ator: ${index}, ${value}`)
// }
