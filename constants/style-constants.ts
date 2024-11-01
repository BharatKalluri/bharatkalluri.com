import clsx from 'clsx';

import { Lora } from 'next/font/google';

export const serifFont = Lora({ subsets: ['latin'], weight: ['400'] });

export const H1Styles: string = clsx('text-3xl font-bold', serifFont.className);
export const H2Styles: string = clsx('text-md font-bold');
export const CardListStyles = clsx('flex flex-col space-y-5 py-4');
export const ProjectGridStyles = clsx('grid md:grid-cols-3 gap-5 py-4');
export const ButtonStyles = clsx('rounded-md font-medium text-sm hover:bg-gray-300 px-2 md:px-4 py-2');
