import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react';
const mockTransactions = [
    {
        id: '1',
        type: 'earned',
        amount: 20,
        description: 'Taught Python',
        timestamp: '2 hours ago',
        icon: '📚',
    },
    {
        id: '2',
        type: 'spent',
        amount: 15,
        description: 'Learned Photoshop',
        timestamp: '5 hours ago',
        icon: '🎨',
    },
    {
        id: '3',
        type: 'earned',
        amount: 35,
        description: 'Taught Web Design',
        timestamp: 'Yesterday',
        icon: '🌐',
    },
    {
        id: '4',
        type: 'spent',
        amount: 25,
        description: 'Learned Guitar',
        timestamp: 'Yesterday',
        icon: '🎸',
    },
    {
        id: '5',
        type: 'earned',
        amount: 50,
        description: 'Taught JavaScript',
        timestamp: '2 days ago',
        icon: '⚙️',
    },
    {
        id: '6',
        type: 'spent',
        amount: 10,
        description: 'Learned Photography',
        timestamp: '3 days ago',
        icon: '📷',
    },
    {
        id: '7',
        type: 'earned',
        amount: 40,
        description: 'Taught React',
        timestamp: '4 days ago',
        icon: '⚛️',
    },
];
export default function Credits({ onNavigate }) {
    const currentBalance = 150;
    const totalEarned = 145;
    const totalSpent = -45;
    const handleOfferSkill = () => {
        // Navigate to post skill page
        alert('Navigate to Post Skill page to start earning credits!');
    };
    const handleRequestSkill = () => {
        // Navigate to feed or search
        alert('Browse available skills to learn!');
    };
    return (_jsxs("div", { className: "min-h-screen bg-white pb-24", children: [_jsxs("div", { className: "sticky top-0 bg-white z-10 py-4 px-4 border-b border-gray-100 flex items-center gap-3", children: [_jsx("button", { onClick: () => onNavigate?.('home'), className: "flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-50", children: _jsx(ArrowLeft, { size: 20, className: "text-skwap-primary" }) }), _jsx("h1", { className: "heading-md", children: "My Skwap Credits" })] }), _jsxs("div", { className: "px-4 py-6", children: [_jsxs("div", { className: "relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-skwap-accent via-skwap-accent to-cyan-700 p-6 shadow-lg", children: [_jsx("div", { className: "absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20" }), _jsx("div", { className: "absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16" }), _jsxs("div", { className: "relative z-10", children: [_jsx("p", { className: "text-cyan-50 text-sm font-semibold mb-2", children: "Your Balance" }), _jsxs("div", { className: "flex items-baseline gap-2 mb-6", children: [_jsx("span", { className: "text-5xl font-bold text-white", children: currentBalance }), _jsx("span", { className: "text-xl text-cyan-100 font-semibold", children: "Credits" })] }), _jsxs("div", { className: "grid grid-cols-2 gap-3", children: [_jsxs("div", { className: "bg-white bg-opacity-20 rounded-xl px-3 py-2 backdrop-blur-sm", children: [_jsx("p", { className: "text-cyan-50 text-xs font-semibold mb-1", children: "Total Earned" }), _jsxs("p", { className: "text-white font-bold text-lg", children: ["+", totalEarned] })] }), _jsxs("div", { className: "bg-white bg-opacity-20 rounded-xl px-3 py-2 backdrop-blur-sm", children: [_jsx("p", { className: "text-cyan-50 text-xs font-semibold mb-1", children: "Total Spent" }), _jsx("p", { className: "text-white font-bold text-lg", children: totalSpent })] })] })] })] }), _jsxs("div", { className: "flex gap-3 mb-8", children: [_jsxs("button", { onClick: handleOfferSkill, className: "flex-1 py-3 px-4 rounded-2xl border-2 border-skwap-accent text-skwap-accent font-semibold transition-all duration-200 hover:bg-skwap-accent-light active:scale-95 flex items-center justify-center gap-2", children: [_jsx(TrendingUp, { size: 18 }), _jsx("span", { children: "Offer a Skill" })] }), _jsxs("button", { onClick: handleRequestSkill, className: "flex-1 py-3 px-4 rounded-2xl bg-skwap-accent text-white font-semibold transition-all duration-200 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2", children: [_jsx(TrendingDown, { size: 18 }), _jsx("span", { children: "Request a Skill" })] })] }), _jsxs("div", { children: [_jsx("h2", { className: "heading-sm mb-4", children: "Recent Activity" }), _jsx("div", { className: "space-y-2", children: mockTransactions.map((transaction) => (_jsxs("div", { className: "card-interactive flex items-center gap-3 py-3", children: [_jsx("div", { className: "flex-shrink-0 text-2xl", children: transaction.icon }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: "font-semibold text-skwap-primary truncate", children: transaction.description }), _jsx("p", { className: "text-xs text-text-secondary", children: transaction.timestamp })] }), _jsx("div", { className: "flex-shrink-0 text-right", children: _jsx("p", { className: `font-bold text-lg ${transaction.type === 'earned'
                                                    ? 'text-green-600'
                                                    : 'text-red-600'}`, children: transaction.type === 'earned'
                                                    ? `+${transaction.amount}`
                                                    : `-${transaction.amount}` }) })] }, transaction.id))) }), _jsx("button", { className: "w-full mt-4 py-3 rounded-2xl border border-gray-200 text-skwap-primary font-semibold hover:bg-gray-50 transition-all duration-200", children: "Load More" })] })] })] }));
}
