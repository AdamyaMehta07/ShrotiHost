export interface JourneyStep {
  step: string;
  label: string;
  title: string;
  text: string;
  tags: string[];
  cta: { label: string; href: string };
}

export interface ProductTile {
  name: string;
  text: string;
  href: string;
  flagship?: boolean;
}

export interface InfraLayer {
  title: string;
  text: string;
}

export interface ComparisonRow {
  feature: string;
  shroti: string;
  typical: string;
}