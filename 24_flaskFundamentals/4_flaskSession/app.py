# -*- coding: utf-8 -*-
"""
Created on Wed Nov 29 09:15:49 2023

@author: sergi
"""
from flask import Flask, request, redirect, flash, session, render_template
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey
# initialize flask app
app = Flask(__name__)
app.config['SECRET_KEY'] = 'progress'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

# get general survey information
# num questions (id)
num_questions = len(satisfaction_survey.questions)
# survey title
title = satisfaction_survey.title
# survey instructions
instructions = satisfaction_survey.instructions


# create main landing page route
@app.route("/")
def display_questionnaire():
    """ Display Questionnaire Details """
    

    
    return render_template("index.html",
                           title=title,
                           instructions=instructions)

# create session storage
@app.route("/session_storage", methods=["POST"])
def create_storage():
    """ Create Session Storage and Initialize """
    
    # initialize responses in session
    session['responses'] = []
    
    # redirect to first question
    return redirect("/questions/0")

# create a questions route
@app.route("/questions/<int:question_id>")
def show_question(question_id):
    """Show current question and choices """
    # get RESPONSES variable
    RESPONSES = session['responses']
    # correct question id
    correct_id = len(RESPONSES)
    # if requested question page matches correct question
    if question_id == correct_id:
        # if all questions answered
        if question_id >= num_questions:
            return render_template('thankYou.html')
        # if still more questions to come
        else:
            # next id
            next_id = question_id + 1
            # get current question object
            question_obj = satisfaction_survey.questions[question_id]
            # get current question
            curr_question = question_obj.question
            # get current answer choices
            choice_one = question_obj.choices[0]
            choice_two = question_obj.choices[1]
            
            # render next question
            return render_template("question.html",
                                       question_id = next_id,
                                       question = curr_question,
                                       choice_one = choice_one,
                                       choice_two = choice_two,
                                       next_id = next_id)
        
    # if question id does not match correct id
    else:
        # override question id
        question_id = correct_id
        # if all questions answered
        if question_id >= num_questions:
            return render_template('thankYou.html')
        # if more questions to come
        else:
            # next id
            next_id = question_id
            # get current question object
            question_obj = satisfaction_survey.questions[question_id]
            # get current question
            curr_question = question_obj.question
            # get current answer choices
            choice_one = question_obj.choices[0]
            choice_two = question_obj.choices[1]
            
            # flash message
            flash("Don't skip questions")            
            
            # return same question
            return render_template("question.html",
                                       question_id = next_id,
                                       question = curr_question,
                                       choice_one = choice_one,
                                       choice_two = choice_two,
                                       next_id = next_id)
        
    
# post route when answer is submitted
@app.route("/answer", methods=["POST"])
def post_answer():
    
    # get session responses variable
    RESPONSES = session['responses']
    
    # check if answer was selected
    if 'choice' in request.form:
        # append answer to RESPONSES
        RESPONSES.append(request.form['choice'])
        # save new response list to session
        session['responses'] = RESPONSES
        
        # get referer and next question id
        referer = request.headers['Referer']
        next_question_id = str(int(referer.split('/')[-1][0]) + 1)
        
        # override with number of questions answered
        next_question_id = str(len(RESPONSES))
        # create redirecting route string
        redirect_str = "/questions/" + next_question_id
        
    
        return redirect(redirect_str)
    
    # if choice not selected, redirect back to page
    # and flash message
    else:
        # next question id for redirect
        next_question_id = str(len(RESPONSES))
        # create redirecting route string
        redirect_str = "/questions/" + next_question_id
        
        flash("Select an Option Please!!")
        return redirect(redirect_str)
        
    
    
    
    
    
    
    
    