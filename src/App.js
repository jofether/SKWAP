import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Home, Flame, Wallet } from 'lucide-react';
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
    return (_jsxs("div", { className: "min-h-screen bg-slate-900 pb-20", children: [renderPage(), _jsx("nav", { className: "fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 z-50", children: _jsxs("div", { className: "flex justify-around items-center h-16 max-w-md mx-auto w-full", children: [_jsxs("button", { onClick: () => setCurrentPage('home'), className: "flex flex-col items-center justify-center gap-1 transition-colors duration-200", children: [_jsx(Home, { size: 24, className: currentPage === 'home' ? 'text-skwap-accent' : 'text-slate-500', strokeWidth: currentPage === 'home' ? 2 : 1.5 }), _jsx("span", { className: `text-xs font-medium ${currentPage === 'home' ? 'text-skwap-accent' : 'text-slate-500'}`, children: "Home" })] }), _jsxs("button", { onClick: () => setCurrentPage('matching'), className: "flex flex-col items-center justify-center gap-1 transition-colors duration-200", children: [_jsx(Flame, { size: 24, className: currentPage === 'matching' ? 'text-skwap-accent' : 'text-slate-500', strokeWidth: currentPage === 'matching' ? 2 : 1.5 }), _jsx("span", { className: `text-xs font-medium ${currentPage === 'matching' ? 'text-skwap-accent' : 'text-slate-500'}`, children: "Match" })] }), _jsxs("button", { onClick: () => setCurrentPage('credits'), className: "flex flex-col items-center justify-center gap-1 transition-colors duration-200", children: [_jsx(Wallet, { size: 24, className: currentPage === 'credits' ? 'text-skwap-accent' : 'text-slate-500', strokeWidth: currentPage === 'credits' ? 2 : 1.5 }), _jsx("span", { className: `text-xs font-medium ${currentPage === 'credits' ? 'text-skwap-accent' : 'text-slate-500'}`, children: "Credits" })] })] }) })] }));
}
