#!/usr/bin/python3.8

def inherits_from(obj, a_class):
    """checks if a class is a subclass of another"""
    return issubclass(type(obj), a_class) and (type(obj) is not a_class)
