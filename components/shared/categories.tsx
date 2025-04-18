import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

const categories = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты'];
const activeIndex = 3;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categories.map((category, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5 cursor-pointer',
            activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          key={index}>
          <button className="cursor-pointer">{category}</button>
        </a>
      ))}
    </div>
  );
};
