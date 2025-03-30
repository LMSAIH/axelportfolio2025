import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const ExpandableDescription: React.FC<{ description: string }> = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
      <>
        <p className={`text-neutral-400 ${isExpanded ? '' : 'line-clamp-2'}`}>
          {description}
        </p>
        
        {/* Only show toggle button if description is long enough */}
        {description.length > 100 && (
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Prevent event bubbling
              setIsExpanded(!isExpanded);
            }}
            className="text-indigo-400 hover:text-indigo-300 text-sm mt-1 flex items-center transition-colors"
          >
            {isExpanded ? 'View less' : 'View more'}
            {isExpanded 
              ? <FiChevronUp className="ml-1" size={14} /> 
              : <FiChevronDown className="ml-1" size={14} />}
          </button>
        )}
      </>
    );
  };
  
  export default ExpandableDescription;