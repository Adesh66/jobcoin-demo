import { Route, Routes } from 'react-router-dom';
import RequireAuth from './auth/RequireAuth';
import JobcoinContextProvider from './context/JobcoinContext';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Transaction from './pages/Transaction';

function App() {
    const NotFound = () => <p>Page not found!</p>;
    return (
        <JobcoinContextProvider>
            <Routes>
                <Route
                    path='/'
                    element={
                        <RequireAuth>
                            <Layout />
                        </RequireAuth>
                    }
                >
                    <Route index element={<Transaction />} />
                </Route>
                <Route exact path='login' element={<Login />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </JobcoinContextProvider>
    );
}

export default App;
