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