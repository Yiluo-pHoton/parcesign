import os
from twilio.rest import Client

def send():
    account_sid = "ACe7363dba0d7e208982460906bd449764"
    auth_token = "2117648120fcb02f44493d02a73a5efe"

    client = Client(account_sid, auth_token)
    numbers = ["+18058860369", "+18182791461", "+18055703599"]

    for i in numbers:
        client.messages.create(
            to=i,
            from_="+18053015117",
            body="Your UPS package with tracking number 12d58579 from Pennsylvania has arrived. Please use the following link to provide signature to confirm it.",
            media_url="https://cops.usdoj.gov/html/dispatch/06-2015/images/doorstep-packages.png"
            )
