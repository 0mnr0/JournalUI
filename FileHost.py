from flask import send_from_directory, send_file
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
@app.route('/<path:path>')
def send_report(path):
    print(path)
    return send_file(path)



app.run(host="0.0.0.0", port="1818")
