import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const date_string_to_days_since_epoch = (date: string) => {
	return dayjs.utc(date).valueOf() / (1000 * 60 * 60 * 24);
};

export const days_since_epoch_to_date_string = (days: number) => {
	return dayjs.utc(days * 1000 * 60 * 60 * 24).format();
};