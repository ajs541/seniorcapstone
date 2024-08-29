import sqlite3

con = sqlite3.connect("zoo.sqlite")
con.execute("PRAGMA foreign_keys = ON")
cur = con.cursor()

with open('db_dump.sql') as f:
    cur.executescript(f.read())

cur.close()
con.commit()
con.close()
