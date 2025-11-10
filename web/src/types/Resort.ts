export interface Resort {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: string;
  shortDescription: string;
  heroImageUrl: string;
  lifts: number;
  runs: number;
  elevation: number;
  ticketPrice: number;
  snowfall: number;
  monthlySnowfall: number[];
  monthlyPrices: number[];
  reasonsToVisit: string[];
}

export interface Metrics {
  averageTicketPrice: number;
  averageMonthlySnowfall: number[];
  averageElevation: number;
}

