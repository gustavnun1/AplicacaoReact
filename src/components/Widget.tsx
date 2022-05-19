import {ChatTeardropDots} from 'phosphor-react';

export function Widget(){
    <div className ="absolute bottom-4 right-4">
        <button className ="bg-violet-500 rounded-full px-3 h-12 text-white flex itens-center group">
            <ChatTeardropDots className="w-6 h-6"/>
        </button>
        <span className = "max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
           <span className = "pl-2"></span> 
           Feedback
        </span>
    </div>
}