from flask import Flask, render_template
# import the function connectToMySQL from the file mysqlconnection.py
from sqlconnection import connectToMySQL

app = Flask(__name__)

# invoke the connectToMySQL function and pass it the name of the database we're using
# connectToMySQL returns an instance of MySQLConnection, which we will store in the variable 'mysql'
mysql = connectToMySQL('mydb')
# now, we may invoke the query_db method
print("all the users", mysql.query_db("SELECT * FROM users;"))

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