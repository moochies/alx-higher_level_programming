#!/usr/bin/python3

"""read from file module"""


def read_file(filename=""):
    """function that reads all the content of a file and prints on stdout"""
    with open(filename) as f:
        print(f.read(), end="")
