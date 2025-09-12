import React from "react";

const Main = () => {
    return(
        <>
         <div className="container">
            <div className="p-5 text-center bg-light-dark rounded">
                <h1 className="text-light">Stock Prediction Portal</h1>
                <p className="text-light lead">
                    This stock prediction application utilizs machine learning techniques, specially employing Keras, and LSTM model, integrated within the Django framework. It forecasts future stock prices by analysing 100-day and 200 day moving averages, essential indicators widely used by stock analysts to inform trading and investment decisions.
                </p>
                <Button text='Login' class='btn-outline-info' />
            </div>
         </div>
        </>
    )
}

export default Main;