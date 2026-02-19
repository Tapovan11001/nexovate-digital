import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_LINK =
  "https://wa.me/918802868821?text=Hi%20Nexovate!%20I'd%20like%20to%20discuss%20a%20project.";
