////////////////////////////////////////////////////////////////////////////////
//COIN GRAPH
////////////////////////////////////////////////////////////////////////////////

export interface Coin {
  coin: string;
  network_hashrate: number;
  algorithm: string;
  ratedPower: number;
}

export interface ResponsivePieInterface {
  id: string;
  label: string;
  value: number;
  color: number;
}

export interface CoinData{
  algorithm: string;
  coin: string;
  difficulty: number;
  id: string;
  name: string;
  network_hashrate: number;
  price: number;
  reward: number;
  reward_block: number;
  reward_unit: string;
  type: string;
  updated: number;
  volume: number;
};

////////////////////////////////////////////////////////////////////////////////
//LANGUAGE TEMPLATE
////////////////////////////////////////////////////////////////////////////////
// export interface Language {
//     title: string;
//     authors: string;
//     header: Header;
//     side_bar: SideBar;
//     settings: Settings;
//     sections: Sections;
//   }
//   export interface Header {
//     energy: string;
//     carbon_emissions: string;
//     e_waste: string;
//   }
//   export interface SideBar {
//     tab1: string;
//     tab2: string;
//     tab3: string;
//   }
//   export interface Settings {
//     title: string;
//     choose: string;
//   }
//   export interface Sections {
//     energy: Energy;
//     carbon_emissions: CarbonEmissions;
//     e_waste: E_waste;
//   }
//   export interface Energy {
//     title: string;
//   }
//   export interface CarbonEmissions {
//     title: string;
//   }
//   export interface E_waste {
//     title: string;
//   }

export interface Language {
  title: string
  authors: string
  header: Header
  settings: Settings
  sections: Sections
  others: Others
}

export interface Header {
  energy: string
  carbon_emissions: string
  e_waste: string
}

export interface Settings {
  title: string
  choose: string
  en: string
  ru: string
  fi: string
  de: string
  es: string
  fr: string
  ge: string
}

export interface Sections {
  energy: Energy
  carbon_emissions: CarbonEmissions
  e_waste: EWaste
}

export interface Energy {
  InfraEnergies_h2: string
  InfraEnergies_p: string
  PersonalEnergies_h2: string
  PersonalEnergies_pp: string
  CryptoEnergies_h2: string
  CryptoEnergies_p: string
  CryptoEnergies_p2: string
  EnergyConclusion_h2: string
  EnergyConclusion_p: string
}

export interface CarbonEmissions {
  CarbonIntro_h1: string
  CarbonIntro_p: string
  CarbonMapTons: string
  CarbonMapYear: string
  SiberianGlobalWarming: string
  SiberianGlobalWarming_h1: string
  SiberianGlobalWarming_h2: string
  SiberianGlobalWarming_li1: string
  SiberianGlobalWarming_li2: string
  SiberianGlobalWarming_li3: string
  CarbonConclusion_h1: string
  CarbonConclusion_p: string
}

export interface EWaste {
  Legend1: string
  Legend2: string
  Legend3: string
  MapDescription: string
  p1: string
  p2: string
  p3: string
  href1: string
  href2: string
  href3: string
  href4: string
}

export interface Others {
  video: string
}
