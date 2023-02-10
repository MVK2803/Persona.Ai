from flask import Flask
import api as persona
from flask_cors import CORS
app = Flask(__name__)  #flask object
CORS(app, resources={r"http://127.0.0.1:5000/get_info": {"origins": "http://localhost:3000"}})
# Pass the required route to the decorator.
@app.route("/get_info")
def hello():
    x=persona.generator()
    return x
if __name__ == "__main__":
    app.run(debug=True)