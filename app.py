from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/digitalbrand")
def digitalbrand():
    return render_template('digitalbrand.html')

@app.route("/game")
def game():
    return render_template('game.html')

@app.route("/healthcare")
def healthcare():
    return render_template('healthcare.html')

@app.route("/podcast")
def podcast():
    return render_template('podcast.html')

@app.route("/restaurant")
def restaurant():
    return render_template('restaurant.html')

@app.route("/swePackage")
def swePackage():
    return render_template('swePackage.html')

if __name__ == "__main__":
    app.run(debug=True)