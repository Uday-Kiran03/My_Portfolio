import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = ({ message, type = 'info', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    error: <AlertCircle className="w-5 h-5 text-red-400" />,
    info: <Info className="w-5 h-5 text-cyan-400" />
  };

  const borders = {
    success: 'border-emerald-500/40 bg-emerald-950/80',
    error: 'border-red-500/40 bg-red-950/80',
    info: 'border-cyan-500/40 bg-slate-900/90'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
      <div className={`glass-panel px-5 py-4 rounded-2xl flex items-center gap-3 border shadow-2xl backdrop-blur-xl ${borders[type] || borders.info}`}>
        {icons[type] || icons.info}
        <span className="text-xs font-medium text-slate-100">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
