import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './index';
import Image from 'next/image';
import { Button } from '../ui/index';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть*/}
        <div className="flex items-center gap-4">
          <Image src={'/logo.png'} alt="Logo" width={35} height={35}></Image>{' '}
          <div>
            <h1 className="text-2xl uppercase font-black">next pizza</h1>
            <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
          </div>
        </div>
        {/* Правая часть*/}
        <div className="flex items-center gap-3">
          <Button variant={'outline'}>Войти</Button>
        </div>
      </Container>
    </header>
  );
};
