//Anlisis Léxico

//Contador de números primos
document.getElementById('btNumerosPrimos').addEventListener("click",nPrimos,true);

function nPrimos(){
    console.log("Empezando Proceso")
    var nInferior=document.getElementById('numero_inferior').value
    var nSuperior=document.getElementById('numero_superior').value

    var valores=`{
        "Inferior":${nInferior},
        "Superior":${nSuperior}
    }`

    console.log(valores)

    var request=new XMLHttpRequest()
    request.open('POST',`http://127.0.0.1:5000/Primos`, true)
    request.setRequestHeader('Content-type', 'application/json');
    request.onload=function(){
        var datos=JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            console.log(datos)
        } else {
            console.log('error')
        }
    }
    request.send(valores)
    
}

//Calculadora
document.getElementById('btCalculadora').addEventListener("click",Calculadora,true);

function Calculadora(){
    console.log("Empezando Proceso")
    var n1=document.getElementById('numero1').value
    var n2=document.getElementById('numero2').value
    var op=document.getElementById('operador').value

    var valores=`{
        "N1":${n1},
        "N2":${n2},
        "O":"${op}"
    }`

    console.log(valores)

    var request=new XMLHttpRequest()
    request.open('POST',`http://127.0.0.1:5000/Calculadora`, true)
    request.setRequestHeader('Content-type', 'application/json');
    request.onload=function(){
        var datos=JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            console.log(datos)
        } else {
            console.log('error')
        }
    }
    request.send(valores)
    
}