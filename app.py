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

@app.route("/photographer")
def photographer():
    return render_template('photographer.html')

@app.route("/podcast")
def podcast():
    return render_template('podcast.html')

@app.route("/restaurant")
def restaurant():
    return render_template('restaurant.html')

@app.route("/swePackage")
def swePackage():
    return render_template('swePackage.html')

#Articles
@app.route("/breakingTheCycle")
def breakingTheCycle():
    return render_template('articles/breakingthecycle.html')

@app.route("/booksChangedMyLife")
def booksChangedMyLife():
    return render_template('articles/booksChangedMyLife.html')

@app.route("/startupStruggles")
def startupStruggles():
    return render_template('articles/startupStruggles.html')

if __name__ == "__main__":
    app.run(debug=True)
    print('yeah')