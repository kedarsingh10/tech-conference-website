import {writable} from 'svelte/store';

export const companyName = writable('FutureTechExpo');
export const currentYear = writable(new Date().getFullYear());
