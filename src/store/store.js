import { writable } from 'svelte/store';

export const isDarkMode = writable(false);
export const likeCount = writable(0);