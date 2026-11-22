from flask import Flask, Response, json, request
import os

app = Flask(__name__)
@app.route('/translate/<word>')
def translate(word):
    dictionary_path = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    'dictionary.json'
)
    try:
        with open(dictionary_path) as f:
            dictionary = json.load(f)
    except FileNotFoundError:
        json_response = json.dumps({"error": "Dictionary file not found"})
        http_response = Response(json_response, status=500, mimetype='application/json')
        return http_response

    translation = dictionary.get(word)
    if translation:
        response = {
            "word": word,
            "translation": translation
        }
    else:
        response = {
            "error": "Translation not found"
        }

    return response
@app.errorhandler(404)
def not_found(error):
    response = {
        "message": "Invalid endpoint",
        "status": 404
    }
    json_response = json.dumps(response)
    http_response = Response(json_response, status=404, mimetype='application/json')
    return http_response

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)