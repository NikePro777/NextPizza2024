import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'inline-flex items-center bg-gray-50 rounded-2xl h-[52px] p-4 gap-1.5 cursor-pointer',
        className,
      )}>
      <ArrowUpDown size={16} />
      <b>Сортировка:</b>
      <b className="text-primary">рейтингу</b>
    </div>
  );
};
