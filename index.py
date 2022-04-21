from flask import Flask, render_template;

app = Flask(__name__)
numero = int (0)

@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('index.html', numero=numero)




if __name__ == '__main__':
    app.run(debug=True)