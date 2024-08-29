## made with LOTS of help from Luna Smith

import flask
import sqlite3
import json

app = flask.Flask(__name__)

DATABASE = 'zoo.sqlite'

def get_db():
    db = getattr(flask.g, '_database', None)
    if db is None:
        db = flask.g._database = sqlite3.connect(DATABASE)
        def make_dicts(cursor, row):
            return dict((cursor.description[idx][0], value) for idx, value in enumerate(row))

        db.row_factory = make_dicts
        db.execute("PRAGMA foreign_keys = ON")
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(flask.g, '_database', None)
    if db is not None:
        db.close()

@app.route("/")
def home():
    return "ok!"

@app.route("/habitats")
def get_habitat_list():
    cur = get_db().cursor()
    res = cur.execute("SELECT * FROM HABITATS;")
    return res.fetchall()

@app.route("/habitats/<name>")
def get_animals_in_habitat(name)    :
    cur = get_db().cursor()
    name = name.replace("_", " ")
    name = "%" + name + "%" # fix case sensitivity and the like
    
    res = cur.execute("SELECT * FROM animals WHERE habitat_id = (SELECT id FROM HABITATS WHERE name LIKE ? ORDER BY ID LIMIT 1);", (name,))
    return res.fetchall()

@app.route("/animals")
def get_animal_list():
    cur = get_db().cursor()
    res = cur.execute("SELECT * FROM animals;")
    return res.fetchall()

@app.route("/animals/<name>")
def get_animal(name):
    cur = get_db().cursor()
    res = cur.execute("SELECT * FROM animals WHERE name = ?;", (name,))
    return res.fetchall()

if __name__ == "__main__":
    app.run()
