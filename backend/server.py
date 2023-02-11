from flask import Flask
import api as persona
from flask_cors import CORS
app = Flask(__name__)  #flask object
CORS(app)
# Pass the required route to the decorator.
@app.route("/get_info",methods=['GET'])
def hello():
    x=persona.generator()
    
    return x
if __name__ == "__main__":
    app.run(debug=True)