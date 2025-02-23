import { writable } from 'svelte/store';

// Check if user prefers dark mode
const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
export const isDarkMode = writable(prefersDark); 