import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { X, Check, Flame } from 'lucide-react';
const mockMatches = [
    {
        id: '1',
        name: 'Emma Rodriguez',
        major: 'Computer Science',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
        offering: 'Advanced Python Scripting',
        lookingFor: 'Figma Mockups for Prototype',
        synergy: 95,
        bio: 'Final year CS student working on thesis project',
    },
    {
        id: '2',
        name: 'David Chen',
        major: 'Information Technology',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
        offering: 'Information Assurance & Security',
        lookingFor: 'ReactJS Fundamentals',
        synergy: 82,
        bio: 'Security specialist helping peers with cybersecurity concepts',
    },
    {
        id: '3',
        name: 'Sophie Dupont',
        major: 'Graphic Design',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
        offering: 'Poster & UI Design',
        lookingFor: 'Social Issues Course Reviewer',
        synergy: 88,
        bio: 'Creative designer passionate about impactful visual communication',
    },
];
export default function Matching({ onNavigate: _onNavigate }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [matches, setMatches] = useState(mockMatches);
    const [isAnimating, setIsAnimating] = useState(false);
    const currentMatch = matches[currentIndex];
    const handlePass = () => {
        if (isAnimating)
            return;
        setIsAnimating(true);
        setTimeout(() => {
            if (currentIndex < matches.length - 1) {
                setCurrentIndex(currentIndex + 1);
            }
            else {
                // Reset or show no more matches
                setCurrentIndex(0);
                setMatches(mockMatches);
            }
            setIsAnimating(false);
        }, 300);
    };
    const handleConnect = () => {
        if (isAnimating)
            return;
        setIsAnimating(true);
        setTimeout(() => {
            alert(`You matched with ${currentMatch.name}! 🎉`);
            handlePass();
        }, 300);
    };
    if (!currentMatch) {
        return (_jsx("div", { className: "min-h-screen bg-slate-900 flex flex-col items-center justify-center pb-24 px-4", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-20 h-20 rounded-full bg-skwap-accent-light flex items-center justify-center mb-4 mx-auto", children: _jsx(Flame, { size: 40, className: "text-skwap-accent" }) }), _jsx("h2", { className: "heading-md mb-2", children: "No More Matches Today" }), _jsx("p", { className: "text-text-secondary mb-6", children: "Come back later to find more skill-swap partners!" }), _jsx("button", { className: "btn-primary", children: "Back to Home" })] }) }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 flex flex-col pb-24", children: [_jsx("div", { className: "sticky top-0 bg-slate-800/80 backdrop-blur-sm z-10 py-4 px-4 border-b border-slate-700", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h1", { className: "heading-md text-slate-50", children: "New Match!" }), _jsxs("div", { className: "flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-900/30 border border-slate-700", children: [_jsx(Flame, { size: 16, className: "text-skwap-accent" }), _jsxs("span", { className: "text-sm font-semibold text-skwap-accent", children: [currentIndex + 1, "/", matches.length] })] })] }) }), _jsx("div", { className: "flex-1 flex items-center justify-center px-4 py-8", children: _jsx("div", { className: `w-full max-w-sm transition-all duration-300 transform ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`, children: _jsxs("div", { className: "card bg-slate-800 rounded-3xl shadow-xl overflow-hidden", children: [_jsxs("div", { className: "relative w-full h-64 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center overflow-hidden", children: [_jsx("img", { src: currentMatch.avatar, alt: currentMatch.name, className: "w-full h-full object-cover" }), _jsxs("div", { className: "absolute top-4 right-4 bg-slate-900 border border-slate-700 rounded-full shadow-lg px-4 py-2 flex items-center gap-2", children: [_jsx(Flame, { size: 18, className: "text-orange-500" }), _jsxs("span", { className: "font-bold text-slate-50", children: [currentMatch.synergy, "%"] })] })] }), _jsxs("div", { className: "p-5", children: [_jsxs("div", { className: "mb-4", children: [_jsx("h2", { className: "heading-sm mb-1 text-slate-50", children: currentMatch.name }), _jsxs("p", { className: "text-sm text-slate-400 font-medium", children: ["\uD83D\uDCDA ", currentMatch.major] }), _jsx("p", { className: "text-sm text-slate-400 mt-2 leading-relaxed", children: currentMatch.bio })] }), _jsx("div", { className: "h-px bg-slate-700 my-4" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "bg-cyan-900/30 border border-slate-700 rounded-2xl p-4", children: [_jsx("p", { className: "text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-2", children: "\u2728 Offering" }), _jsx("p", { className: "font-bold text-slate-50 text-lg", children: currentMatch.offering })] }), _jsxs("div", { className: "bg-green-900/30 border border-green-800 rounded-2xl p-4", children: [_jsx("p", { className: "text-xs font-semibold text-green-400 uppercase tracking-wide mb-2", children: "\uD83C\uDFAF Looking For" }), _jsx("p", { className: "font-bold text-green-400 text-lg", children: currentMatch.lookingFor })] })] }), _jsxs("div", { className: "mt-4 pt-4 border-t border-slate-700", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("p", { className: "text-xs font-semibold text-slate-400", children: "Match Synergy" }), _jsxs("p", { className: "text-xs font-bold text-skwap-accent", children: [currentMatch.synergy, "% Compatible"] })] }), _jsx("div", { className: "w-full bg-slate-700 rounded-full h-2 overflow-hidden", children: _jsx("div", { className: "bg-gradient-to-r from-skwap-accent to-cyan-500 h-full rounded-full transition-all duration-500", style: { width: `${currentMatch.synergy}%` } }) }), _jsxs("p", { className: "text-xs text-slate-400 mt-2", children: ["Your skills align great with ", currentMatch.name.split(' ')[0], "'s needs!"] })] })] })] }) }) }), _jsxs("div", { className: "fixed bottom-24 left-0 right-0 flex justify-center gap-8 px-4 max-w-sm mx-auto", children: [_jsx("button", { onClick: handlePass, disabled: isAnimating, className: "w-16 h-16 rounded-full bg-red-500 text-white shadow-lg flex items-center justify-center transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed", title: "Pass", children: _jsx(X, { size: 32, strokeWidth: 3 }) }), _jsx("button", { onClick: handleConnect, disabled: isAnimating, className: "w-16 h-16 rounded-full bg-skwap-accent text-white shadow-lg flex items-center justify-center transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed", title: "Connect", children: _jsx(Check, { size: 32, strokeWidth: 3 }) })] })] }));
}
