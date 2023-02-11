from flask import Flask,jsonify
import requests
import base64
import api as persona
from flask_cors import CORS
import urllib.request
from PIL import Image
import json
app = Flask(__name__)  #flask object
CORS(app)
# Pass the required route to the decorator.
@app.route("/get_info",methods=['GET'])
def hello():
    x=persona.generator()
    text = {'message': x[0]}
    image_url = x[1]
    image_response = requests.get(image_url)
    image_data = image_response.content
    image = base64.b64encode(image_data).decode('utf-8')
    response = {'text': text, 'image': image}
    return jsonify(response)
if __name__ == "__main__":
    app.run(debug=True)