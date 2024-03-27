import requests
import hashlib
import json

#cataloguejson = f'https://raw.githubusercontent.com/rethread-studio/algorithmic-art-course/main/cartels/data.json'
cataloguejson = f'https://raw.githubusercontent.com/margelle/algorithmic-art-tasks/main/task4/catalogue.json'

response = requests.get(cataloguejson)
if response.status_code == 200:
    catalogue = json.loads(response.text)
    for piece in catalogue:
        if piece['code'] !='None':
            code = requests.get(piece['code'])
            print(code)            
            h = hashlib.shake_256(code.content)
            print(piece['artist'], piece['colour'], h.hexdigest(1800))
else:
    print("File retrieval failed. Status code:", response.status_code)