from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import json
import logging
import http.client as http_client


d = 'https://msapi.top-academy.ru/api/v2/auth/login'

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def process_request():
    data = request.json
    include=data.get('includeJson')
    fetchType = data.get('reqMethod')

    url = data.get('fetchUrl')
    print('Bearer: ', (data.get('Bearer')))
    headers = {
        'Referer': 'https://journal.top-academy.ru/',
        'Origin': 'https://journal.top-academy.ru',
        'authority': 'msapi.top-academy.ru',
        'method': 'POST',
        'scheme': 'https',
        'Content-Type': 'application/json',
        'Sec-Fetch-Mode': 'cors',
        'Authorization': 'Bearer '+str(data.get('Bearer')),
        'Accept-Encoding':'gzip, deflate, br, zstd',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
    }

    

    #print("data['includeJson']: ", (type(json.loads(data['includeJson']))), data['includeJson'])

    js = {
      "application_key": "6a56a5df2667e65aab73ce76d1dd737f7d1faef9c52e8b8c55ac75f565d8e8a6",
      "id_city": None,
      "password": include.get('password'),
      "username": include.get('username')
    }

    http_client.HTTPConnection.debuglevel = 1
    # You must initialize logging, otherwise you'll not see debug output.
    logging.basicConfig()
    logging.getLogger().setLevel(logging.DEBUG)
    requests_log = logging.getLogger("requests.packages.urllib3")
    requests_log.setLevel(logging.DEBUG)
    requests_log.propagate = True

    totalCommandExecute = 'requests.'+(fetchType.lower())+'(url, headers=headers'
    if (len(include)) == 0:
        totalCommandExecute += ')'
    else:
        totalCommandExecute += ', json=include)'
    response = eval(totalCommandExecute)



    if response.status_code == 200:
        return(response.text)
    else:
        response = {'status': response.status_code}
        return jsonify(response)

    
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3234, debug=False)  # Запускаем сервер на порте 5000
