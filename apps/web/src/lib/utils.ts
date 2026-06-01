<<<<<<< HEAD
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
=======
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
>>>>>>> c90f8b8 (remove api, add hero tooltip and height adjustments, add skills section, refine navbar section, refactor entire project directory)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
