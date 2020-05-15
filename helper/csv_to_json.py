import csv
import json
import os

def csv_to_json():
    csv_file = open('players.csv', 'r')
    json_file = open('players.json', 'w')
    fields = ['realName', 'playerName', 'asset']
    reader = csv.DictReader(csv_file, fields)
    for row in reader:
        json.dump(row, json_file)
        json_file.write('\n')

if __name__ == "__main__":
    csv_to_json()
