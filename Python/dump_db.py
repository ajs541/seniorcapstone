import sqlite3

con = sqlite3.connect("zoo.sqlite")
con.execute("PRAGMA foreign_keys = ON")
cur = con.cursor()
with open('db_dump.sql', 'w') as f:
    for line in con.iterdump():
        f.write('%s\n' % line)

cur.close()
con.close()
