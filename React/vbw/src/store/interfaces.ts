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
export interface Language {
    title: string;
    authors: string;
    header: Header;
    side_bar: SideBar;
    settings: Settings;
    sections: Sections;
  }
  export interface Header {
    energy: string;
    carbon_emissions: string;
    e_waste: string;
  }
  export interface SideBar {
    tab1: string;
    tab2: string;
    tab3: string;
  }
  export interface Settings {
    title: string;
    choose: string;
  }
  export interface Sections {
    energy: Energy;
    carbon_emissions: CarbonEmissions;
    e_waste: E_waste;
  }
  export interface Energy {
    title: string;
  }
  export interface CarbonEmissions {
    title: string;
  }
  export interface E_waste {
    title: string;
  }