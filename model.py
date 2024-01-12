import pickle
import numpy as np
import pandas as pd

# Load preprocessor pipeline and model of our choice (random forest classifier)
with open("models/preprocessor.pkl", "rb") as preprocessor_file:
    preprocessor = pickle.load(preprocessor_file)

with open("models/random_forest_model.pkl", "rb") as model_file:
    random_forest_model = pickle.load(model_file)


def make_inference(**features):
    # Converting input features to a DataFrame because the preprocessing pipeline expects a DataFrame as input
    customer_info = pd.DataFrame(features, index=[0])

    # Transform the data using preprocessor by passing the DataFrame to the preprocessor pipeline
    customer_info_processed = preprocessor.transform(customer_info)

    # Make predictions as a probability term
    pred = random_forest_model.predict_proba(customer_info_processed)

    # Format prediction probability term as percentage term
    pred_pct = np.round(pred[0] * 100, 2)

    return pred_pct
