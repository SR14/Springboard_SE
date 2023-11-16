from flask import Flask, request
from operations import *

# Put your app in here.
app = Flask(__name__)

@app.route('/add')
# add two numbers
def app_add():
    a = int(request.args['a'])
    b = int(request.args['b'])
    total = add(a, b)
    
    html = f"<html><body>{total}</body></html>"
    return html

@app.route('/sub')
# add two numbers
def app_sub():
    a = int(request.args['a'])
    b = int(request.args['b'])
    total = sub(a, b)
    
    html = f"<html><body>{total}</body></html>"
    return html

@app.route('/mult')
# mult two numbers
def app_mult():
    a = int(request.args['a'])
    b = int(request.args['b'])
    total = mult(a, b)
    
    html = f"<html><body>{total}</body></html>"
    return html

@app.route('/div')
# div two numbers
def app_div():
    a = int(request.args['a'])
    b = int(request.args['b'])
    total = div(a, b)
    
    html = f"<html><body>{total}</body></html>"
    return html

@app.route('/math/<operation>')
# get all operations in one route
def app_all(operation):
    a = int(request.args['a'])
    b = int(request.args['b'])
    total = None
    if operation == 'add':
        total = add(a, b)
    elif operation == 'sub':
        total = sub(a, b)
    elif operation == 'mult':
        total = mult(a, b)
    else:
        total = div(a, b)
        
    html = f"<html><body>{total}</body></html>"
    return html
        
