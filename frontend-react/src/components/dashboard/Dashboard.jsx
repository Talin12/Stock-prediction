import axiosInstance from '../../axiosInstance';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const response = await axiosInstance.get('/protected-view');
            } catch (error) {
                console.error('Error fetching protected data:', error);
            } 
        }
        fetchProtectedData();
    }, []);

    const [ticker, setTicker] = useState('');
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [plot, setPlot] = useState();
    const [ma100, setma100] = useState();
    const [ma200, setma200] = useState();
    const [predictionPlot, setPredictionPlot] = useState();
    const [mse, setMse] = useState();
    const [rmse, setRmse] = useState();
    const [r2, setR2] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            const response = await axiosInstance.post('/predict/', { ticker: ticker });
            console.log('Stock prediction:', response.data);
            const backendRoot = import.meta.env.VITE_BACKEND_ROOT
            const plotUrl = `${backendRoot}${response.data.plot_img}`;
            const ma100Url = `${backendRoot}${response.data.plot_100_dma}`;
            const ma200Url = `${backendRoot}${response.data.plot_200_dma}`;
            const predictionUrl = `${backendRoot}${response.data.plot_prediction}`;
            setPlot(plotUrl);
            setma100(ma100Url);
            setma200(ma200Url);
            setPredictionPlot(predictionUrl);
            setMse(response.data.mse);
            setRmse(response.data.rmse);
            setR2(response.data.r2);

            if(response.data.error){
                setError(response.data.error);
            }
        } catch (error) {
            console.error('Error fetching stock prediction:', error);
        } finally{
            setLoading(false);
        }
    }
    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-6 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <input type="text" className='form-control' placeholder='Enter Stock Ticker' onChange={(e) => setTicker(e.target.value)} required/>
                        <small>{error && <div className='text-danger'>{error}</div>}</small>
                        <button type='submit' className='btn btn-info mt-3'>
                            {loading ? (
                                <span><FontAwesomeIcon icon={faSpinner} spin /> Predicting...</span>
                            ) : (
                                'Predict'
                            )}
                        </button>
                    </form>
                </div>
                
                {predictionPlot && (

                    <div className='prediction mt-5'>
                        <div className='p-5'>
                            {plot && (
                                <img src={plot} alt="Stock Prediction Plot" className='img-fluid' />
                            )}
                        </div>
                        <div className='p-5'>
                            {ma100 && (
                                <img src={ma100} alt="MA100 Plot" className='img-fluid' />
                            )}
                        </div>
                        <div className='p-5'>
                            {ma200 && (
                                <img src={ma200} alt="MA200 Plot" className='img-fluid' />
                            )}
                        </div>

                        <div className='p-5'>
                            {predictionPlot && (
                                <img src={predictionPlot} alt="Prediction Plot" className='img-fluid' />
                            )}
                        </div>

                        <div className="text-light p-3">
                            <h4>Model Evaluation</h4>
                            <p>Mean Squared Error (MSE): {mse}</p>
                            <p>Root Mean Squared Error (RMSE): {rmse}</p>
                            <p>R Squared (R2): {r2}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;