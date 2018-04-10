from flask import Flask, send_file, request, make_response
import base64
import io
app = Flask(__name__)

@app.route("/message/confirm")
def tracking_pixel():
    #http://localhost:5000/message/confirm?recipient=rwillet2@emich.edu&userID=asdf1234&emailSubject=Testing%20123&messageID=123    
    print('testing')
    parse_arguments(request.args)
    gif_data_encoded = "R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    response = make_response(send_file(io.BytesIO(base64.b64decode(gif_data_encoded)), mimetype='image/gif'))
    response.headers.add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response, 200

@app.route("/message/register")
def register_message_id():
    return "", 200

@app.route("/status")
def status_page():
    return "Everything is A-OK", 200

    
def parse_arguments(args):
    data = {}
    if args is not None:
        data["recipient"] = args.get("recipient", "")
        data["user_id"] = args.get("userID", "")
        data["message_id"] = args.get("messageID", "")
        data["email_subject"] = args.get("emailSubject", "")
    print(data)
    return data

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)