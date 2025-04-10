import React from 'react';
import { FilterCheckboxProps } from './filter-checkbox';

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItem?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (value: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItem,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  onChange,
  defaultValue,
  className,
}) => {
  return <div className={className}></div>;
};
