import Link from 'next/link';
import React from 'react';
import { Title } from './index';
import { Button } from '../ui/index';
import { Plus } from 'lucide-react';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCart: React.FC<Props> = ({ id, name, price, imageUrl, className }) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-4 bg-secondary rounded-lg h-[260px]">
          <img className="rounded-4xl" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold"></Title>
        <p className="text-sm text-gray-400">
          Цыпленок, моцарелла, сыры какие нибудь, куличик от Джема (фирменный)
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant={'secondary'} className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
