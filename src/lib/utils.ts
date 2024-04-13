// Import necessary modules and types
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Define a utility function to merge class names
export function cn(...inputs: ClassValue[]) {
  // Merge class names using clsx and then apply Tailwind CSS merge utility
  return twMerge(clsx(inputs));
}
