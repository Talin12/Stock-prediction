# Stock-prediction  
*Predicting stock prices using machine learning / deep learning techniques (backend + frontend)*

## Table of Contents  
- [Introduction](#introduction)  
- [Features](#features)  
- [Architecture](#architecture)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Dependencies](#dependencies)  
- [Configuration](#configuration)  
- [Documentation](#documentation)  
- [Examples](#examples)  
- [Troubleshooting](#troubleshooting)  
- [Contributing](#contributing)  
- [License](#license)  

## Introduction  
This project implements a full-stack stock prediction system. The backend is developed with Django REST Framework (DRF) and provides APIs for retrieving historical stock data, training models, and serving predictions.  
The frontend is built in React and provides an interactive UI where users can enter stock tickers, visualize historical stock performance, and view machine learning–based predictions.

## Features  
- Fetch historical stock market data  
- Train machine-learning / deep-learning models on stock time-series data  
- REST API endpoints for predictions  
- React user interface for visualization  
- Modular backend + frontend architecture  
- Reproducible environment through requirement files  

## Architecture  
```
Stock-prediction/
│
├── backend-drf/       # Django + DRF backend
│   ├── api/           # Prediction API
│   ├── model/         # ML/DL training + prediction scripts
│   └── requirements.txt
│
└── frontend-react/    # React frontend
    ├── src/
    └── package.json
```

## Installation  

### Backend Setup  
```bash
cd backend-drf
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend Setup  
```bash
cd frontend-react
npm install        # or yarn install
npm start          # or yarn start
```

### Running the Full Stack  
- Backend: http://localhost:8000  
- Frontend: http://localhost:3000  
The frontend will automatically call the backend to fetch data and predictions.

## Usage  
1. Open the frontend UI.  
2. Enter a valid stock ticker (e.g., `AAPL`, `GOOGL`).  
3. View the historical price chart and predicted price values.  
4. Developers can call the API manually:

### Example API call  
```bash
curl -X POST http://localhost:8000/api/predict/ \
  -H "Content-Type: application/json" \
  -d '{"ticker": "MSFT", "period": 60, "predict_days": 30}'
```

## Dependencies  

### Backend  
- Django  
- Django REST Framework  
- pandas  
- numpy  
- scikit-learn or tensorﬂow/keras  

### Frontend  
- React  
- axios (or fetch)  
- A charting library such as Chart.js  

Full lists:  
- `backend-drf/requirements.txt`  
- `frontend-react/package.json`  

## Configuration  
Backend environment variables:  
```
STOCK_API_KEY=your_key
DJANGO_DEBUG=True
DATABASE_URL=your_db_url
```

Frontend environment variable:  
```
REACT_APP_API_URL=http://localhost:8000/api
```

## Documentation  
- Backend documentation inside `backend-drf` directory  
- Frontend documentation inside `frontend-react`  
- Model details located in backend model scripts  

## Examples  
- Enter “TSLA” in the UI → See historical chart + next 30 days predicted  
- API returns JSON with:
```
{
  "ticker": "TSLA",
  "predictions": [...],
  "dates": [...]
}
```

## Troubleshooting  
- **CORS issues:** Enable CORS in Django settings  
- **Frontend API errors:** Check `REACT_APP_API_URL`  
- **Slow training:** Reduce period size or disable retraining  
- **Missing data:** Ensure ticker is valid for the chosen data source  


## License  
This project is licensed under the MIT License (or update if a LICENSE file is added).
