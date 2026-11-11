export interface DomainExtension {
  ext: string;
  firstYear: number; // rupees per year, taxes ke bina
  renewal: number;
  // live site ke words, jaise "8x first year" (renewal itna mehnga hai)
  note?: string;
}