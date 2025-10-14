from flask import Flask, render_template, request
from entities.palindrome import Palindrome

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

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002)