import { cn } from '@/lib/utils';
import { ProductCart, Title } from './index';
import React from 'react';

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  listClassName?: string;
  className?: string;
}

export const ProductGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  listClassName,
  className,
}) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
          <ProductCart
            id={product.id}
            name={product.name}
            price={product.price}
            // price={product.item[0]}
            imageUrl={product.imageUrl}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};
