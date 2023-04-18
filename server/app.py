from flask import Flask, send_from_directory, jsonify

app = Flask(__name__, static_folder='dist', template_folder='dist')

@app.route('/')
def serve():
    return send_from_directory(app.template_folder, 'index.html')


@app.route('/sanity')
def sanity_check():
    return jsonify({"hi": "there"})


@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(host='0.0.0.0')