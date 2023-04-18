Prerequisites:

* Python 3

Running the backend locally:

Note: The following steps assume you have built the frontend application (run `yarn build`) and have a `..dist` directory. 

1. Create a virtual environment by running the command `python -m venv venv`. This will create a folder named venv in your directory that will contain the virtual environment.

2. Activate the virtual environment by running the command source `venv/bin/activate` on Unix/Linux systems or `venv\Scripts\activate` on Windows.

3. Install package requirements with `pip install -r requirements.txt`

4. With the virtual environment running, run the Flask application by running the command `flask run`.

5. Open a web browser and navigate to `http://localhost:5000/`. This should display the index.html file located in the `../dist/` directory.

6. To test the `/sanity` route, navigate to `http://localhost:5000/sanity`. This should return a JSON object with a key `hi` and value `there`.