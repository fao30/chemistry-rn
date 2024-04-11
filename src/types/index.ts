import type {
  COLOR_SETTING,
  ELEMENT_DATA_COMPLETE,
  ELEMENT_SOLUBILITY,
  REACTIONS,
  REACTIONS_DATA,
  SOLUBILITIES,
  SOLUBILITY_DATA,
} from '../lib/constants';

export type Lang = 'ru' | 'en';
export type ElementCategory =
  | 'ALKALI_METALS'
  | 'ALKALINE_EARTH_METALS'
  | 'TRANSITION_METALS'
  | 'POST_TRANSITION_METALS'
  | 'OTHER_NONMETALS'
  | 'METTALOIDS'
  | 'NOBLE_GASSES'
  | 'LANTHANIDES'
  | 'ACTINIDES';

export type Color =
  | 'COLORLESS'
  | 'SILVER'
  | 'SLATE_GRAY'
  | 'BLACK'
  | 'GRAY'
  | 'YELLOW'
  | 'COPPER'
  | 'RED'
  | 'GOLD';
export type ColorSetting = keyof typeof COLOR_SETTING;
export type TableWidth = '80' | '85' | '90' | '95' | '100';
export type Phase = 'GAS' | 'SOLID' | 'LIQUID';

export type CrystalStructure =
  | 'SIMPLE_HEXAGONAL'
  | 'FACE_CENTERED_CUBIC'
  | 'BODY_CENTERED_CUBIC'
  | 'SIMPLE_TRIGONAL'
  | 'BASE_CENTERED_MONOCLINIC'
  | 'TETRAHEDRAL_PACKING'
  | 'SIMPLE_TRICLINIC'
  | 'FACE_CENTERED_ORTHORHOMBIC'
  | 'BASE_CENTERED_ORTHORHOMBIC'
  | 'SIMPLE_MONOCLINIC'
  | 'CENTERED_TETRAGONAL'
  | 'SIMPLE_CUBIC'
  | 'SIMPLE_ORTHORHOMBIC';

// key
export type ElementKey = (typeof ELEMENT_DATA_COMPLETE)[number]['symbol'];
export type DictionaryKey = keyof Dictionary;
export type ReactionKey = keyof typeof REACTIONS_DATA | undefined;
export type SolubilityKey = keyof typeof SOLUBILITY_DATA;

// main
export type Element = (typeof ELEMENT_DATA_COMPLETE)[number];
export type Dictionary = {
  crystalStructures: Record<CrystalStructure, string>;
  phase: Record<Phase, string>;
  navbar: {
    list: string;
    compare: string;
    sortByNumber: string;
    sortByName: string;
    sortBySymbol: string;
    search: string;
  };
  colors: Record<Color, string>;
  elements: Record<
    ElementKey,
    {
      name: string;
      nameOrigin: string;
      description: string;
      history: string;
      applications: string;
      toxicity: string;
    }
  >;
  elementCategories: Record<ElementCategory, string>;
  tableFounder: {
    name: string;
    birthDate: Date;
    deathDate: Date;
    history: {text1: string; text2: string; text3: string};
  };
  titles: {
    search: string;
    details: string;
    audio: string;
    solubilityChart: string;
    reactivitySeries: string;
    tables: string;
    setting: string;
    group: string;
    period: string;
    block: string;
    history: string;
    protons: string;
    electrons: string;
    neutrons: string;
    generalProperties: string;
    atomicNumber: string;
    atomicWeight: string;
    massNumber: string;
    category: string;
    color: string;
    radioactive: string;
    crystalStructure: string;
    electronsPerShell: string;
    electronConfiguration: string;
    physicalProperties: string;
    phase: string;
    density: string;
    meltingPoint: string;
    boilingPoint: string;
    heatOfFusion: string;
    heatOfVaporization: string;
    specificHeatCapacity: string;
    abudanceInEarthCrust: string;
    abudanceInUniverse: string;
    casNumber: string;
    pubchem: string;
    atomicProperties: string;
    atomicRadius: string;
    covalentRadius: string;
    electronegativity: string;
    ionizationPotential: string;
    atomicVolume: string;
    thermalConductivity: string;
    oxidationStates: string;
    applications: string;
    isotopes: string;
    stable: string;
    unstable: string;
    yes: string;
    no: string;
    symbol: string;
    title: string;
    english: string;
    russian: string;
    language: string;
    tableWidth: string;
    temperature: string;
  };

  unit: {
    density: string;
    heatOfFusion: string;
    heatOfVaporization: string;
    specificHeatCapacity: string;
    atomicRadius: string;
    ionizationPotential: string;
    atomicVolume: string;
    thermalConductivity: string;
  };

  reactivity: Record<(typeof REACTIONS)[number], string>;
  reactions: Record<keyof typeof REACTIONS_DATA, string>;
  solubility: Record<SolubilityKey, string>;
  solubilities: Record<(typeof SOLUBILITIES)[number], string>;
  elementSolubilities: Record<(typeof ELEMENT_SOLUBILITY)[number], string>;
};
