#!/usr/bin/python3
"""module load from json file."""
import json


def load_from_json_file(filename):
    """loads json data from a file"""
    with open(filename, "r", encoding="utf-8") as f:
        return json.load(f)
