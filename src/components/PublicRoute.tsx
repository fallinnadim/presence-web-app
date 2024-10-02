import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicRoute: FC = () => {
    const { token } = useAuth();
    return !token ? <Outlet /> : <Navigate to="/talents" />;
}

export default PublicRoute