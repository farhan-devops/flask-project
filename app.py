from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Check the user's credentials
        username = request.form['username']
        password = request.form['password']
        if username == 'bsoft' and password == 'devops':
            # Redirect to the chess game page if the login is successful
            return redirect('/chess')
        else:
            # Show an error message if the login is unsuccessful
            error = 'Invalid username or password'
            return render_template('login.html', error=error)
    else:
        # Show the login form
        return render_template('login.html')

@app.route('/chess')
def chess():
    # Render the chess game template
    return render_template('chess.html')

