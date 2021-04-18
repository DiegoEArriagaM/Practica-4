from flask import Flask, jsonify, request
from flask_cors import CORS

app=Flask(__name__)
CORS(app)

#Primer inciso
@app.route('/Lexico', methods=['POST'])
def getlexico():
    return ''

#Segundo inciso
@app.route('/Primos',methods=['POST'])
def getPrimos():
    json=request.get_json(force=True)
    cont=0
    if not (json.get('Inferior') is None) and not(json.get('Superior') is None):
        for n in range(json.get('Inferior'),json.get('Superior')):
            for d in range(2,n):
                if n%d == 0 and n!=d:
                    cont+=1
                    break
        return jsonify({'Cantidad de Primos':cont})
    return jsonify({'response':'not Ok'})

#Tercer inciso
@app.route('/Calculadora',methods=['POST'])
def getValor():
    json=request.get_json(force=True)
    cont=0
    if not (json.get('N1') is None) and not(json.get('N2') is None) and not(json.get('O') is None):
        if json.get('O')=='+':
            cont=json.get('N1')+json.get('N2')
            return jsonify({'Valor de la suma':cont})
        elif json.get('O')=='-':
            cont=json.get('N1')-json.get('N2')
            return jsonify({'Valor de la resta':cont})
        elif json.get('O')=='*':
            cont=json.get('N1')*json.get('N2')
            return jsonify({'Valor de la multiplicacion':cont})
        elif json.get('O')=='/':
            cont=json.get('N1')/json.get('N2')
            return jsonify({'Valor de la division':cont})
    return jsonify({'response':'not Ok'})

if __name__=='__main__':
    app.run(debug=True)