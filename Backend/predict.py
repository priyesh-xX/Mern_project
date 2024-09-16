import sys
import pickle
import numpy as np

# Load the trained model
with open('demand_forecast_model.pkl', 'rb') as file:
    model = pickle.load(file)

# Get input arguments (season, holiday, past_sales) from Node.js
season = float(sys.argv[1])
holiday = float(sys.argv[2])
past_sales = float(sys.argv[3])

# Prepare the input data
input_data = np.array([[season, holiday, past_sales]])

# Make the prediction
predicted_demand = model.predict(input_data)

# Return the prediction result
print(predicted_demand[0])
