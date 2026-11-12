export interface ContactChannel {
  id: string;
  name: string;
  // Live site ka description. Jab tak pata nahi, khaali chhodo, card pe nahi dikhega
  description?: string;
  // Button ka text, aur wo kahan jata hai
  actionLabel: string;
  href: string;
}