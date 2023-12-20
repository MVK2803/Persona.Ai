from flask import Flask,jsonify
import genAPI
from flask_cors import CORS

app = Flask(__name__)  #flask object
CORS(app)
# Pass the required route to the decorator.
@app.route("/generate-persona",methods=['GET'])
def hello():
    print("hello")
    return jsonify(genAPI.generatePersona())
if __name__=="__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)