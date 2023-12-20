from flask import Flask,jsonify
import requests
import base64
import genAPI
from flask_cors import CORS
import urllib.request
from PIL import Image
import json
app = Flask(__name__)  #flask object
CORS(app)
# Pass the required route to the decorator.
@app.route("/generate-persona",methods=['GET'])
def hello():
    return jsonify(genAPI.generatePersona())
if __name__ == "__main__":
    app.run(debug=True)