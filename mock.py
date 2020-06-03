from flask import Flask, request, abort, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return 'I am a mock server. Nice to meet you.'


@app.route('/receiveCard', methods=['POST'])
def receive_card():
    if not request.json:
        abort(400)
    print(request.json)
    return request.json, 201


if __name__ == '__main__':
    app.run(debug=True)


