import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import Homepage from './pages/Homepage';
import Credits from './pages/Credits';
import Matching from './pages/Matching';
import TransactionSuccess from './pages/TransactionSuccess';
export default function App() {
    const [currentPage, setCurrentPage] = useState('success');
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return _jsx(Homepage, { onNavigate: setCurrentPage });
            case 'credits':
                return _jsx(Credits, { onNavigate: setCurrentPage });
            case 'matching':
                return _jsx(Matching, { onNavigate: setCurrentPage });
            case 'success':
                return _jsx(TransactionSuccess, { onNavigate: setCurrentPage });
            default:
                return _jsx(Homepage, { onNavigate: setCurrentPage });
        }
    };
    return (_jsx("div", { className: "min-h-screen bg-white", children: renderPage() }));
}
