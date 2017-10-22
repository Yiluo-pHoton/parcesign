import os
from flask import Flask, request, redirect
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)

@app.route("/sms", methods=['GET', 'POST'])
def sms_reply():
    resp = MessagingResponse()

    resp.message("You have a package from Amazon now! Sign your package in five minutes to allow the dropoff!")

    return str(resp)

if __name__ == "__main__":
    app.run(debug=True)
