import requests
import hashlib
import json
import csv
import re
import itertools

cataloguejson = f'https://raw.githubusercontent.com/margelle/algorithmic-art-tasks/main/task4/catalogue.json'

response = requests.get(cataloguejson)
introcolours = []
hashes = []
if response.status_code == 200:
    catalogue = json.loads(response.text)
    for piece in catalogue:
        if piece['code'] !='None':
            code = requests.get(piece['code'])
            #print(code)            
            h = hashlib.shake_256(code.content)
            #print(piece['artist'], piece['colour'], h.hexdigest(1800))
            print(piece['artist'], piece['colour'])
            introcolours.append(piece['colour'].replace("#","0x")) 
            hashes.append(h.hexdigest(300))           
else:    
    print("Catalogue retrieval failed. Status code:", response.status_code)

artistlist = []
for i in range(len(catalogue)):
    splitlist = re.findall('.{1,6}', hashes[i])
    splitlist = ["0x" + x for x in splitlist]
    artistlist.append(splitlist)

outlist = list(itertools.chain(*artistlist))

with open('filename3.txt', 'w') as myfile:
    wr = csv.writer(myfile)
    wr.writerow(introcolours)
    wr.writerow(outlist)        
