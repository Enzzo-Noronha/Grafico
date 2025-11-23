const dados = {
    "nome_relatorio": "Vendas por Categoria (Últimos 6 Meses)",
    "unidade": "Milhares de Reais (R$)",
    "registros": [
    {
      "categoria": "Eletrônicos",
      "mes": "Junho",
      "valor": 120.5
    },
    {
      "categoria": "Moda & Vestuário",
      "mes": "Junho",
      "valor": 85.2
    },
    {
      "categoria": "Alimentos & Bebidas",
      "mes": "Junho",
      "valor": 45.0
    },
    {
      "categoria": "Eletrônicos",
      "mes": "Julho",
      "valor": 135.0
    },
    {
      "categoria": "Moda & Vestuário",
      "mes": "Julho",
      "valor": 90.8
    },
    {
      "categoria": "Alimentos & Bebidas",
      "mes": "Julho",
      "valor": 51.5
    },
    {
      "categoria": "Eletrônicos",
      "mes": "Agosto",
      "valor": 140.2
    },
    {
      "categoria": "Moda & Vestuário",
      "mes": "Agosto",
      "valor": 95.0
    },
    {
      "categoria": "Alimentos & Bebidas",
      "mes": "Agosto",
      "valor": 55.0
    }
  ]
}

const nome_relatorio = document.getElementById('nome_relatorio')

nome_relatorio.innerText = `${dados.nome_relatorio}`

const lista1 = document.getElementById('lista1')
const lista2 = document.getElementById('lista2')
const lista3 = document.getElementById('lista3')
const total1 = document.getElementById('total1')
const total2 = document.getElementById('total2')
const total3 = document.getElementById('total3')

let valores = []
let eletronicos = []
let moda = []
let alimentos = []

function adicionarDados(){
  //Essa poha de for vai pegar mostrar todos os dados que tiverem dentro do registro
  for(const registro of dados.registros) {
    let i = 0
    console.log(`Mês: ${registro.mes}, Categoria: ${registro.categoria}, Valor: ${registro.valor}`);//mostra a poha dos dados dentro do registro
    valores.push(registro.valor)//Guarda a poha dos valores do registro dentro da poha de um array
    
    if(registro.categoria === "Eletrônicos"){
      const li = document.createElement('li')
      console.log('1')
      lista1.innerHTML += `<div><strong>Mês:</strong><span> ${registro.mes}</span><br>
                           <strong>Categoria:</strong><span> ${registro.categoria}</span><br>
                           <strong>Valor:</strong><span> R$${registro.valor}</span><br></div>`
      lista1.appendChild(li)
      eletronicos.push(registro.valor)

    }else if(registro.categoria === "Moda & Vestuário"){
      const li = document.createElement('li')
      console.log('2')
      lista2.innerHTML += `<div><strong>Mês:</strong><span> ${registro.mes}</span><br>
                           <strong>Categoria:</strong><span> ${registro.categoria}</span><br>
                           <strong>Valor:</strong><span> R$${registro.valor}</span><br></div>`
      lista2.appendChild(li)
      moda.push(registro.valor)


    }else{
      const li = document.createElement('li')
      console.log('3')
      lista3.innerHTML += `<div><strong>Mês:</strong><span> ${registro.mes}</span><br>
                           <strong>Categoria:</strong><span> ${registro.categoria}</span><br>
                           <strong>Valor:</strong><span> R$${registro.valor}</span><br></div>`
      lista3.appendChild(li)
      alimentos.push(registro.valor)
    }
  }
}

function somaDeValores(){
  let soma1 = 0
  let soma2 = 0
  let soma3 = 0
  for(let i = 0; i < 3; i++){
    soma1 += eletronicos[i]
    soma2 += moda[i]
    soma3 += alimentos[i]
  }
  total1.innerText = `Total: R$${soma1}`
  total2.innerText = `Total: R$${soma2}`
  total3.innerText = `Total: R$${soma3}`

}

const g1 = document.getElementById('graficoPrimeiro');

  new Chart(g1, {
    type: 'bar',
    data: {
      labels: ["Junho", "Julho", "Agosto"],
      datasets: [{
        label: 'Eletronicos',
        data: [120.5, 135.5, 140.2],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
const g2 = document.getElementById('graficoSegundo');

  new Chart(g2, {
    type: 'bar',
    data: {
      labels: ["Junho", "Julho", "Agosto"],
      datasets: [{
        label: 'Moda & Vestuário',
        data: [85.2, 90.8, 95.0],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
const g3 = document.getElementById('graficoTerceiro');

  new Chart(g3, {
    type: 'bar',
    data: {
      labels: ["Junho", "Julho", "Agosto"],
      datasets: [{
        label: 'Alimentos & Bebidas',
        data: [45.0, 51.5, 55.0],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

const grafico1 = document.getElementById('grafico1')
const grafico2 = document.getElementById('grafico2')
const grafico3 = document.getElementById('grafico3')

const secaografico1 = document.getElementById('secaografico1')
const secaografico2 = document.getElementById('secaografico2')
const secaografico3 = document.getElementById('secaografico3')

grafico1.addEventListener('click', (e) =>{
  e.preventDefault()

  secaografico1.style.display = 'block'
  secaografico2.style.display = 'none'
  secaografico3.style.display = 'none'
})

grafico2.addEventListener('click', (e) =>{
  e.preventDefault()

  secaografico1.style.display = 'none'
  secaografico2.style.display = 'block'
  secaografico3.style.display = 'none'
})

grafico3.addEventListener('click', (e) =>{
  e.preventDefault()

  secaografico1.style.display = 'none'
  secaografico2.style.display = 'none'
  secaografico3.style.display = 'block'
})

adicionarDados()
somaDeValores()