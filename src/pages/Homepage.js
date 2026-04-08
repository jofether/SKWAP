import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import { Bell, Search, ChevronRight, Flame } from 'lucide-react';
const mockCategories = [
    'Programming',
    'Academics',
    'Design',
    'Languages',
    'Music',
    'Writing',
    'Business',
];
const mockRecommendedUsers = [
    {
        id: '1',
        name: 'Sarah Chen',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        skillOffering: 'Python & Data Processing',
        rating: 4.8,
    },
    {
        id: '2',
        name: 'Alex Rivera',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
        skillOffering: 'Information Assurance Tutoring',
        rating: 4.9,
    },
    {
        id: '3',
        name: 'Jamie Lee',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie',
        skillOffering: 'UI/UX Thesis Help',
        rating: 4.7,
    },
    {
        id: '4',
        name: 'Marcus Johnson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
        skillOffering: 'React Frontend Dev',
        rating: 4.6,
    },
];
export default function Homepage({ onNavigate }) {
    const [selectedCategory, setSelectedCategory] = useState('Programming');
    const scrollContainerRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');
    const handleCategoryScroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 200;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-slate-900 pb-24", children: [_jsxs("div", { className: "px-4 pt-4 pb-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsxs("div", { children: [_jsx("p", { className: "text-slate-400 text-sm font-medium", children: "Welcome back" }), _jsx("h1", { className: "heading-lg mt-1", children: "Hello, Student!" })] }), _jsxs("button", { className: "relative flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-all border border-slate-700", children: [_jsx(Bell, { size: 22, className: "text-skwap-accent" }), _jsx("span", { className: "absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" })] })] }), _jsxs("div", { className: "relative", children: [_jsx(Search, { size: 18, className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" }), _jsx("input", { type: "text", placeholder: "What do you want to learn today?", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "input-field pl-12 text-sm" })] })] }), _jsx("div", { className: "px-4 mb-8", children: _jsxs("button", { onClick: () => onNavigate?.('matching'), className: "w-full card-interactive bg-gradient-to-r from-skwap-accent to-cyan-500 p-5 flex items-center justify-between group", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-12 h-12 rounded-2xl bg-slate-900 bg-opacity-40 flex items-center justify-center", children: _jsx(Flame, { size: 24, className: "text-white" }) }), _jsxs("div", { className: "text-left", children: [_jsx("p", { className: "font-bold text-white", children: "Find Your Match" }), _jsx("p", { className: "text-sm text-cyan-100", children: "Discover compatible skill-swap partners" })] })] }), _jsx(ChevronRight, { size: 20, className: "text-white group-hover:translate-x-1 transition-transform" })] }) }), _jsxs("div", { className: "mb-8", children: [_jsxs("div", { className: "flex items-center justify-between px-4 mb-3", children: [_jsx("h2", { className: "heading-sm", children: "Categories" }), _jsx("button", { className: "text-skwap-accent font-semibold text-sm hover:text-opacity-80", children: "See All" })] }), _jsx("style", { children: `
          .category-scroll-container {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .category-scroll-container::-webkit-scrollbar {
            display: none;
          }
        ` }), _jsxs("div", { className: "relative", children: [_jsx("div", { ref: scrollContainerRef, className: "category-scroll-container flex gap-2 px-4 overflow-x-auto scroll-smooth", children: mockCategories.map((category) => (_jsx("button", { onClick: () => setSelectedCategory(category), className: `flex-shrink-0 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 whitespace-nowrap ${selectedCategory === category
                                        ? 'bg-skwap-accent text-slate-900 shadow-md shadow-cyan-500/50'
                                        : 'bg-slate-800 text-skwap-accent hover:bg-slate-700 border border-slate-700'}`, children: category }, category))) }), _jsx("button", { onClick: () => handleCategoryScroll('left'), className: "absolute -left-2 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 shadow-md border border-slate-700", children: _jsx(ChevronRight, { size: 16, className: "rotate-180 text-slate-50" }) }), _jsx("button", { onClick: () => handleCategoryScroll('right'), className: "absolute -right-2 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 shadow-md border border-slate-700", children: _jsx(ChevronRight, { size: 16, className: "text-slate-50" }) })] })] }), _jsxs("div", { className: "px-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h2", { className: "heading-sm", children: "Recommended for You" }), _jsxs("button", { className: "text-skwap-accent font-semibold text-sm hover:text-opacity-80 flex items-center gap-1", children: ["View All", _jsx(ChevronRight, { size: 16 })] })] }), _jsx("div", { className: "space-y-3", children: mockRecommendedUsers.map((user) => (_jsx("div", { className: "card-interactive", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("img", { src: user.avatar, alt: user.name, className: "w-14 h-14 rounded-full object-cover flex-shrink-0 ring-2 ring-slate-700" }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("h3", { className: "font-semibold text-slate-50 truncate", children: user.name }), _jsx("p", { className: "text-sm text-slate-400 truncate mb-1", children: user.skillOffering }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx("span", { className: "text-yellow-500 font-semibold text-sm", children: "\u2605" }), _jsx("span", { className: "text-xs font-semibold text-slate-50", children: user.rating })] })] }), _jsx("button", { className: "flex-shrink-0 px-4 py-2 bg-skwap-accent text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:shadow-md active:scale-95", children: "View" })] }) }, user.id))) })] }), _jsx("div", { className: "px-4 mt-8 mb-4", children: _jsxs("div", { className: "grid grid-cols-2 gap-3", children: [_jsxs("button", { onClick: () => onNavigate?.('credits'), className: "card-interactive text-center py-4", children: [_jsx("p", { className: "text-3xl font-bold text-skwap-accent mb-1", children: "128" }), _jsx("p", { className: "text-xs text-slate-400 font-semibold", children: "Skills Available" })] }), _jsxs("div", { className: "card text-center py-4", children: [_jsx("p", { className: "text-3xl font-bold text-skwap-accent mb-1", children: "2.4K" }), _jsx("p", { className: "text-xs text-slate-400 font-semibold", children: "Active Students" })] })] }) })] }));
}
