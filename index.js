let metro = parseFloat(prompt('Digite quantos metros você deseja converter: '))
const opcao = parseFloat(prompt('Selecione a opção desejada:\n1 - milímetro (mm)\n2 - centímetro (cm)\n3 - decímetro (dm)\n4 - decâmetro (dam)\n5 - hectômetro (hm)\n6 - quilômetro (km)'))

let milimetro = metro * 1000
let centímetro = metro * 100
let decímetro = metro * 10
let decâmetro = metro / 10
let hectômetro = metro / 100
let quilômetro = metro / 1000 

switch(opcao){
    case 1:
        alert('O valor de ' + metro + ' metros é de ' + milimetro + ' milímetros')
        break
    case 2:
        alert('O valor de ' + metro + ' metros é de ' + centímetro + ' centímetros')
        break
    case 3:
        alert('O valor de ' + metro + ' metros é de ' + decímetro + ' decímetros')
        break
    case 4:
        alert('O valor de ' + metro + ' metros é de ' + decâmetro + ' decâmetros')
        break
    case 5:
        alert('O valor de ' + metro + ' metros é de ' + hectômetro + ' hectômetros')
        break
    case 6:
        alert('O valor de ' + metro + ' metros é de ' + quilômetro + ' quilometros')
        break
    default:
        alert('Você digitou um número inválido')
        break
    

}