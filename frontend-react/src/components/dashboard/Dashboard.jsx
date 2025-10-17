import { useEffect } from 'react';
import axiosInstance from '../../axiosinstance';

const Dashboard = () => {

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const response = await axiosInstance.get('/protected-view');
                console.log('Sucess: ', response.data);
            } catch (error) {
                console.error('Error fetching protected data:', error);
            } 
        }
        fetchProtectedData();
    }, []);
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 text-light">Welcome to the Dashboard</h2>
            <p className="text-center text-light">This is a placeholder for the dashboard content.</p>
        </div>
    );
};

export default Dashboard;