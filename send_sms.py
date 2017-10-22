import os
from twilio.rest import Client

account_sid = os.environ["TWILIO_ACCOUNT_SID"]
auto_token = os.environ["TWILIO_AUTO_TOKEN"]

client = Client(account_sid, auth_token)

client.messages.create(
    to=os.environ["MY_PHONE_NUMBER"],
    from_="+18053015117",
    body="This is the shit that works first time."
)
