import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import pickle

#  CSV format: columns -> 'season', 'holiday', 'past_sales', 'future_demand'
data = pd.read_csv('sales_data.csv')

X = data[['season', 'holiday', 'past_sales']]
y = data['future_demand']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)

with open('demand_forecast_model.pkl', 'wb') as file:
    pickle.dump(model, file)

print("Model trained and saved!")
