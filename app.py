from model import make_inference
from flask import Flask, request, jsonify, render_template, redirect

app = Flask(__name__)


@app.before_request
def before_request_redirect():
    if request.path not in ("/", "/check") and not request.path.startswith("/static"):
        return redirect("/")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/check", methods=["POST"])
def check():
    form_data = request.form

    int_features = [
        "gender",
        "SeniorCitizen",
        "Partner",
        "Dependents",
        "PhoneService",
        "PaperlessBilling",
    ]
    string_features = [
        "Contract",
        "InternetService",
        "OnlineSecurity",
        "OnlineBackup",
        "DeviceProtection",
        "TechSupport",
        "StreamingTV",
        "StreamingMovies",
        "PaymentMethod",
    ]
    float_features = ["tenure", "MonthlyCharges", "TotalCharges"]

    data = {}
    for key in int_features + string_features + float_features:
        if key in int_features:
            data[key] = form_data.get(key, type=int)
        elif key in string_features:
            data[key] = form_data.get(key, "")
        else:
            data[key] = form_data.get(key, type=float)

    result = make_inference(**data)
    return jsonify({"result": str(result[0])})


if __name__ == "__main__":
    app.run(debug=True)
