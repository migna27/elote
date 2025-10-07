from flask import Flask, render_template

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

if __name__ == '__main__':
    app.run()