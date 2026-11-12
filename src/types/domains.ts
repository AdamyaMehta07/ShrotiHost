// Live site ke chhote labels (jaise ".us.cc" pe "Sale")
export type DomainLabel = "Sale" | "New" | "Hot";

export interface DomainPrice {
  ext: string;
  firstYear: number; // rupees, taxes ke bina
  renewal: number;
  transfer: number;
  // Zyada tar extensions 1 saal ke hote hain. .ai 2 saal ke term mein bikta hai
  termYears?: number;
  label?: DomainLabel;
}

// Homepage ke grid ke liye (ye pehle se tha)
export interface DomainExtension {
  ext: string;
  firstYear: number;
  renewal: number;
  note?: string;
}