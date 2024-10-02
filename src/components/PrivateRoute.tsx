import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute: FC = () => {
    const { token } = useAuth();
    return token ? <Outlet /> : <Navigate to="/" />;
}


export default PrivateRoute