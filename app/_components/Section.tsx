import { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

export default function Section(
  props: PropsWithChildren<{ className?: string }>
) {
  return (
    <section className={cn('max-w-7xl md:px-4 m-auto', props.className)}>
      {props.children}
    </section>
  );
}
