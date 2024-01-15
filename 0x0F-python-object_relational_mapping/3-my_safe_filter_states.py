#!/usr/bin/python3
import MySQLdb
import sys

args = sys.argv

def list_():
    db = MySQLdb.connect(host='localhost', user=args[1],
                         passwd=args[2], db=args[3], port=3306)
    cur = db.cursor()
    cur.execute("""SELECT * FROM states WHERE BINARY name = %s
     ORDER BY id ASC""", ["{}".format(args[4])])
    results = cur.fetchall()

    for state in results:
        print(state)

    cur.close()
    db.close()


if __name__ == '__main__':
    list_()
