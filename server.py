from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def welcome():
	return render_template('index.html')

@app.route('/mystory')
def mystory():
	return render_template('mystory.html')

@app.route('/projects')
def projects():
	return render_template('projects.html')

@app.route('/resume')
def resume():
	return render_template('resume.html')

if __name__=="__main__":
	app.run(debug=True)