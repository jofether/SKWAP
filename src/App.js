import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import Homepage from './pages/Homepage';
import Credits from './pages/Credits';
import Matching from './pages/Matching';
export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return _jsx(Homepage, { onNavigate: setCurrentPage });
            case 'credits':
                return _jsx(Credits, { onNavigate: setCurrentPage });
            case 'matching':
                return _jsx(Matching, { onNavigate: setCurrentPage });
            default:
                return _jsx(Homepage, { onNavigate: setCurrentPage });
        }
    };
    return (_jsx("div", { className: "min-h-screen bg-white", children: renderPage() }));
}
