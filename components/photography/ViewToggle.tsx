"use client";

import { BsFillGridFill, BsList } from 'react-icons/bs';
import { ViewMode } from '../../data/photography';

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export default function ViewToggle({ viewMode, onViewModeChange }: ViewToggleProps) {
  const getGridStyles = () => {
    return viewMode === 'grid' 
      ? 'text-primary bg-secondary1 hover:bg-secondary1 hover:text-primary'
      : 'text-secondary1 bg-primary hover:bg-secondary1 hover:text-primary';
  };

  const getListStyles = () => {
    return viewMode === 'list'
      ? 'text-primary bg-secondary1 hover:bg-secondary1 hover:text-primary'
      : 'text-secondary1 bg-primary hover:bg-secondary1 hover:text-primary';
  };

  return (
    <div className="flex flex-row align-middle items-center border-b border-b-secondary1">
      <div 
        className={`flex flex-row align-middle border-r border-r-secondary1 cursor-pointer ${getGridStyles()} pt-2 pb-1 pr-2 px-1 gap-x-2 transition duration-200`}
        onClick={() => onViewModeChange('grid')}
      >
        <BsFillGridFill className="text-[20px]" />
        Grid
      </div>
      <span 
        className={`flex flex-row align-middle cursor-pointer ${getListStyles()} pt-2 pb-1 pr-2 px-1 gap-x-2 transition duration-200`}
        onClick={() => onViewModeChange('list')}
      >
        <BsList className="text-[20px]" />
        List
      </span>
    </div>
  );
}
