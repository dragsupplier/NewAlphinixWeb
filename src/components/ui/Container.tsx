import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  bleed?: boolean;
};

export function Container({ className, bleed, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        bleed
          ? 'mx-auto w-full max-w-[1440px] px-6 md:px-10'
          : 'mx-auto w-full max-w-[1280px] px-6 md:px-10',
        className,
      )}
      {...props}
    />
  );
}
