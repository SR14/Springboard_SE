# -*- coding: utf-8 -*-
"""
Created on Wed Nov 29 09:15:49 2023

@author: sergi
"""
from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from stories import story

app = Flask(__name__)
app.config['SECRET_KEY'] = 'progress'
app.debug=True
debug = DebugToolbarExtension(app)


# create main landing page route
@app.route("/")
def main_page():
    """Render Main Page"""
    
    return render_template("index.html",
                           prompts=story.prompts)

# render submitted story 
@app.route("/story")
def submitted_story():
    """ render submitted story """
    text = story.generate(request.args)
    return render_template("story.html",
                           text=text)

