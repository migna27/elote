from flask import Flask, render_template, request
from entities.palindrome import Palindrome
from entities.convertir import Convertir
from entities.animal import Animal
from entities.sorteo import Sorteo
import random
app = Flask(__name__)

#esta será la ruta principal
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/math')
def math():
    return render_template('math.html')

@app.route('/azulejo')
def azulejo():
    return render_template('azulejo.html')

@app.route('/palindrome', methods=['GET', 'POST'])
def palindrome():
    if request.method == 'POST':
        # Obtenemos la frase del formulario
        phrase = request.form.get('input-phrase', '')
        # Usamos tu clase Palindrome para verificar
        p = Palindrome(phrase)
        result = p.is_palindrome()
        # Devolvemos el resultado a una página de resultados
        return render_template('result.html', result=result, phrase=phrase)
    # Si el método es GET, simplemente mostramos la página inicial
    return render_template('palindrome.html')


@app.route("/money", methods=['GET', 'POST'])
def money():
    if request.method == 'POST':
        # Obtener la cantidad de pesos del formulario
        pesos_str = request.form.get('input-money')
        pesos = float(pesos_str) # Ejemplo de tasa de conversión
        convert = Convertir(pesos)
        dolares = convert.convertir()
        return render_template('resultmoney.html', money=pesos, result=dolares)
    return render_template('money.html')


@app.route ('/sorteo', methods=['GET', 'POST'])
def sorteo():
    if request.method == 'POST':
        numero = random.randint(1, 100)
        num1 = request.form.get('number1')
        num2 = request.form.get('number2')
        num3 = request.form.get('number3')
        ganador = Sorteo.ganador(numero, num1, num2, num3)
        return render_template('ganador.html', ganador=ganador, numero=numero)
    return render_template('sorteo.html')

@app.route('/animals')
def animals():
    return render_template('animals.html', animals=Animal.get_list())
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002)