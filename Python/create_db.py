import sqlite3
import sys
import os

if sys.argv[1] != 'force':
    ans = input('Are you sure? This will overwrite zoo.db! [y/N] ')

    if ans.lower() != 'y':
        print('Exiting...')
        exit()

if os.path.exists('zoo.sqlite'):
    os.remove('zoo.sqlite')

con = sqlite3.connect("zoo.sqlite")
con.execute("PRAGMA foreign_keys = ON")
cur = con.cursor()

with open('db_dump.sql') as f:
    cur.executescript(f.read())

cur.close()
con.commit()
con.close()
