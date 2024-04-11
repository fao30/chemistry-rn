import type { Dictionary } from '../../types';

export const getEnglishDictionary = (): Dictionary => ({
  solubility: {
    S: 'Soluble',
    SS: 'Slightly Soluble',
    I: 'Insoluble',
    NONE: 'Unavailable',
    R: 'Reacts with water',
  },
  reactions: {
    NR: 'No Reaction',
    NM: 'Non Metal',
    FC: 'For Comparison',
    SLR: 'Slow Reaction',
    MR: 'Moderate Reaction',
    SR: 'Strong Reaction',
    VR: 'Violent Reaction',
    VSR: 'Very Slow Reaction',
  },

  solubilities: {
    Ammonium: 'Ammonium',
    Lithium: 'Lithium',
    Sodium: 'Sodium',
    Potassium: 'Pottasium',
    Magnesium: 'Magnesium',
    Calcium: 'Calcium',
    Barium: 'Barium',
    IronII: 'Iron (II)',
    IronIII: 'Iron (III)',
    CopperII: 'Copper (II)',
    Silver: 'Silver',
    Zinc: 'Zinc',
    LeadII: 'Lead (II)',
    Aluminum: 'Aluminum',
  },

  elementSolubilities: {
    Fluoride: 'Fluoride',
    Chloride: 'Chloride',
    Bromide: 'Bromide',
    Iodide: 'Iodide',
    Chlorate: 'Chlorate',
    Hydroxide: 'Hydroxide',
    Sulfite: 'Sulfite',
    Sulfate: 'Sulfate',
    Carbonate: 'Carbonate',
    Nitrite: 'Nitrite',
    Nitrate: 'Nitrate',
    Phosphate: 'Phosphate',
    Cyanide: 'Cyanide',
    Cyanate: 'Cyanate',
    Thiocyanate: 'Thiocyanate',
    Dichromate: 'Dichromate',
    Oxide: 'Oxide',
  },

  reactivity: { CW: 'Cold Water', HW: 'How Water / Steam', DA: 'Dilute Acids' },
  navbar: {
    list: 'List',
    sortByName: 'Sort by name',
    sortByNumber: 'Sort by number',
    sortBySymbol: 'Sort by symbol',
    search: 'Search',
    compare: 'Compare',
  },
  elementCategories: {
    OTHER_NONMETALS: 'Other nonmetals',
    NOBLE_GASSES: 'Noble gasses',
    ALKALI_METALS: 'Alkali metals',
    ALKALINE_EARTH_METALS: 'Alkaline earth metals',
    POST_TRANSITION_METALS: 'Post-transition metals',
    METTALOIDS: 'Metalloids',
    ACTINIDES: 'Actinides',
    LANTHANIDES: 'Lanthanides',
    TRANSITION_METALS: 'Transition metals',
  },

  tableFounder: {
    name: 'Dmitri Ivanovich Mendeleev',
    birthDate: new Date('1834-02-09'),
    deathDate: new Date('1907-02-02'),
    history: {
      text1:
        'A brilliant Russian scientist, professor, member of the Academy of Sciences, owner of encyclopedic knowledge in chemistry, physics, geography, and economics. Scientists discovered and formulated one of the fundamental laws of nature, the periodic law of chemical elements. Mendeleev worked on his system from 1869 to 1900.',
      text2:
        'It is worth mentioning that when creating his system, Mendeleev left some cells of the table empty and anticipated the discovery of such elements as gallium, scandium, germanium, polonium, astatine, technetium, rhenium and francium. The chemist calculated their atomic masses and indicated their basic properties, but the elements themselves were discovered later.',
      text3: 'The scientist died in 1907, at the age of 72.',
    },
  },

  crystalStructures: {
    SIMPLE_ORTHORHOMBIC: 'Simple Orthorhombic',
    SIMPLE_HEXAGONAL: 'Simple Hexagonal',
    FACE_CENTERED_CUBIC: 'Face Centered Cubic',
    BODY_CENTERED_CUBIC: 'Body Centered Cubic',
    SIMPLE_TRIGONAL: 'Simple Trigonal',
    BASE_CENTERED_MONOCLINIC: 'Base Centered Monoclinic',
    TETRAHEDRAL_PACKING: 'Tetrahedral Packing',
    SIMPLE_TRICLINIC: 'Simple Triclinic',
    FACE_CENTERED_ORTHORHOMBIC: 'Face Centered Orthorhombic',
    BASE_CENTERED_ORTHORHOMBIC: 'Base Centered Orthorhombic',
    SIMPLE_MONOCLINIC: 'Simple Monoclinic',
    CENTERED_TETRAGONAL: 'Centered Tetragonal',
    SIMPLE_CUBIC: 'Simple Cubic',
  },

  colors: {
    COLORLESS: 'Colorless',
    SILVER: 'Silver',
    SLATE_GRAY: 'Slate Gray',
    BLACK: 'Black',
    GRAY: 'Gray',
    YELLOW: 'Yellow',
    COPPER: 'Copper',
    RED: 'Red',
    GOLD: 'Gold',
  },

  phase: {
    GAS: 'Gas',
    SOLID: 'Solid',
    LIQUID: 'Liquid',
  },

  unit: {
    density: 'g/cm-3',
    heatOfFusion: 'kJ/mol',
    heatOfVaporization: 'kJ/mol',
    specificHeatCapacity: 'J/g·K',
    atomicRadius: 'pm',
    ionizationPotential: 'eV',
    atomicVolume: 'cm-3_/mol',
    thermalConductivity: 'W/cm·K',
  },

  titles: {
    search: 'Search',
    details: 'Details',
    audio: 'Audio',
    solubilityChart: 'Solubility Chart',
    reactivitySeries: 'Reactivity Series',
    tables: 'Tables',
    setting: 'Setting',
    english: 'English',
    russian: 'Russian',
    language: 'Language',
    temperature: 'Temperature',
    tableWidth: 'Table Width',
    group: 'Group',
    period: 'Period',
    block: 'Block',
    protons: 'Protons',
    electrons: 'Electrons',
    neutrons: 'Neutrons',
    generalProperties: 'General Properties',
    atomicNumber: 'Atomic Number',
    atomicWeight: 'Atomic Weight',
    massNumber: 'Mass Number',
    category: 'Category',
    color: 'Color',
    radioactive: 'Radioactive',
    crystalStructure: 'Crystal Structure',
    history: 'History',
    electronConfiguration: 'Electron Configuration',
    electronsPerShell: 'Electrons per shell',
    physicalProperties: 'Physical Properties',
    abudanceInEarthCrust: "Abundance in Earth's crust",
    abudanceInUniverse: 'Abundance in Universe',
    casNumber: 'CAS Number',
    pubchem: 'PubChem CID Number',
    atomicProperties: 'Atomic Properties',
    atomicRadius: 'Atomic Radius',
    covalentRadius: 'Covalent Radius',
    electronegativity: 'Electronegativity',
    ionizationPotential: 'Ionization Potential',
    atomicVolume: 'Atomic Volume',
    thermalConductivity: 'Thermal Conductivity',
    oxidationStates: 'Oxidation States',
    applications: 'Applications',
    isotopes: 'Isotopes',
    stable: 'Stable',
    unstable: 'Unstable',
    phase: 'Phase',
    density: 'Density',
    meltingPoint: 'Melting Point',
    boilingPoint: 'Boiling Point',
    heatOfFusion: 'Heat of Fusion',
    heatOfVaporization: 'Heat of Vaporization',
    specificHeatCapacity: 'Specific Heat Capacity',
    yes: 'Yes',
    no: 'No',
    symbol: 'Symbol',
    title: 'Name',
  },

  elements: {
    H: {
      name: 'Hydrogen',
      nameOrigin: 'From the Greek word hydro (water), and genes (forming)',
      description:
        'Hydrogen is the primary component of Jupiter and the other gas giant planets',
      history:
        'Henry Cavendish was the first to distinguish hydrogen from other gases in 1766 when he prepared it by reacting hydrochloric acid with zinc.\n\nIn 1670, English scientist Robert Boyle had observed its production by reacting strong acids with metals.\n\nFrench scientist Antoine Lavoisier later named the element hydrogen in 1783.',
      applications:
        "Liquid hydrogen is used as a rocket fuel.\n\nHydrogen is commonly used in power stations as a coolant in generators.\n\nHydrogen's two heavier isotopes (deuterium and tritium) are used in nuclear fusion.\n\nUsed as a shielding gas in welding methods such as atomic hydrogen welding.",
      toxicity:
        'Hydrogen poses a number of hazards to safety, from fires when mixed with air to being an asphyxiant in its pure form',
    },
    He: {
      description:
        'Unlike any other element, helium will remain liquid down to absolute zero at normal pressures',
      name: 'Helium',
      nameOrigin: 'From the Greek word helios, the sun',
      history:
        'French astronomer Jules Janssen obtained the first evidence of helium during the solar eclipse of 1868.\n\nNorman Lockyer and Edward Frankland suggested the name helium for the new element.\n\nIn 1895, Sir William Ramsay discovered helium in the uranium mineral cleveite.\n\nIt was independently discovered in cleveite by Per Teodor Cleve and Abraham Langlet.',
      applications:
        'Helium is used as a protective gas in growing silicon and germanium crystals, in titanium and zirconium production, and in gas chromatography.\n\nHelium at low temperatures is used in cryogenics.\n\nHelium is used for filling balloons and for pressurizing liquid fuel rockets.\n\nHelium is used as a shielding gas in arc welding processes.',
      toxicity: 'Helium is not known to be toxic',
    },
    Li: {
      description:
        'Lithium is the only metal which reacts with nitrogen under normal conditions',
      name: 'Lithium',
      nameOrigin: 'From the Greek word helios, the sun',
      history:
        'Lithium was discovered by Johann Arfvedson in 1817 when he was analyzing minerals from the island of Uto in Sweden.\n\nThe pure metal was isolated the following year by both Swedish chemist William Thomas Brande and English chemist Sir Humphry Davy working independently.\n\nIn 1855, larger quantities of lithium were produced through the electrolysis of lithium chloride by Robert Bunsen and Augustus Matthiessen.',
      applications:
        'Pure lithium metal is used in rechargeable lithium ion batteries.\n\nLithium stearate is used as an all-purpose and high-temperature lubricant.\n\nLithium is used in special glasses and ceramics.\n\nMetallic lithium and its complex hydrides are used as high energy additives to rocket propellants.',
      toxicity:
        'Lithium is corrosive and requires special handling to avoid skin contact',
    },

    Be: {
      name: 'Beryllium',
      nameOrigin: 'From the Greek word beryllos, beryl',
      history:
        'Louis-Nicolas Vauquelin discovered beryllium in the oxide form in both beryl and emeralds in 1798.\n\nFriedrich Wöhler and Antoine Bussy independently isolated beryllium in 1828 by the chemical reaction of metallic potassium with beryllium chloride.\n\nThe first commercially-successful process for producing beryllium was developed in 1932 by Alfred Stock and Hans Goldschmidt.',
      applications:
        'Beryllium is used in nuclear reactors as a reflector or moderator.\n\nBeryllium metal is used for lightweight structural components in the defense and aerospace industries in high-speed aircraft, guided missiles, space vehicles and satellites.\n\nUnlike most metals, beryllium is virtually transparent to x-rays and hence it is used in radiation windows for x-ray tubes.',
      toxicity:
        'Beryllium and its salts are toxic and should be handled with the greatest of care',
      description: 'Emerald is a naturally occurring compound of beryllium',
    },

    B: {
      history:
        'Boron compounds have been known for thousands of years, but the element was not discovered until 1808 by Sir Humphry Davy and by Gay-Lussac and Thenard.\n\nBoron was not recognized as an element until it was isolated in 1808 by Sir Humphry Davy and by Joseph Louis Gay-Lussac and Louis Jacques Thénard.\n\nJöns Jakob Berzelius identified boron as an element in 1824.',
      name: 'Boron',
      nameOrigin: 'From the Arabic word Buraq, Persian Burah',
      description: 'Boron is an essential nutrient for all green plants',
      toxicity:
        'Elemental boron, boron oxide, boric acid, borates and many organoboron compounds are non-toxic',
      applications:
        'Boron oxide is used in glassmaking and ceramics.\n\nBorax is used in making fiberglass, as a cleansing fluid, a water softener, insecticide, herbicide and disinfectant.\n\nBoric acid is used as a mild antiseptic and as a flame retardant.\n\nBoron shielding is used as a control for nuclear reactors.',
    },

    C: {
      name: 'Carbon',
      nameOrigin: 'From the Latin word carbo, charcoal',
      history:
        'Carbon was discovered in prehistory and was known in the forms of soot and charcoal to the earliest human civilizations.\n\nIn 1772, Antoine Lavoisier showed that diamonds are a form of carbon; when he burned samples of charcoal and diamond and found that neither produced any water.\n\nIn 1779, Carl Wilhelm Scheele showed that graphite burned to form carbon dioxide and so must be another form of carbon.',
      applications:
        'The major use of carbon other than food and wood is in the form of hydrocarbons, most notably the fossil fuel methane gas and crude oil.\n\nGraphite is used for pencil tips, high temperature crucibles, dry cells, electrodes and as a lubricant.\n\nDiamonds are used in jewelry and in industry for cutting, drilling, grinding, and polishing.\n\nCarbon black is used as the black pigment in printing ink.',
      toxicity:
        'Pure carbon has extremely low toxicity to humans and can be handled safely in the form of graphite or charcoal',
      description: 'About 20% of the weight of living organisms is carbon',
    },

    O: {
      name: 'Oxygen',
      nameOrigin: 'From the Greek word oxys, acid, and genes, forming',
      history:
        'Carl Wilhelm Scheele obtained oxygen by heating mercuric oxide and nitrates in 1771, but did not publish his findings until 1777.\n\nJoseph Priestley also prepared this new air by 1774.\n\nThe name oxygen was coined in 1777 by Antoine Lavoisier, whose experiments with oxygen helped to discredit the then-popular phlogiston theory of combustion and corrosion.',
      applications:
        'Pure oxygen is frequently used to help breathing in patients with respiratory ailments.\n\nOxygen is used in oxyacetylene welding, as an oxidant for rocket fuel, and in methanol and ethylene oxide production.\n\nIt is also used in the production of steel, plastics and textiles.\n\nPlants and animals rely on oxygen for respiration.',
      toxicity:
        'Oxygen gas can be toxic at elevated partial pressures, leading to convulsions and other health problems',
      description:
        'Green and red colors in the Aurora Borealis are caused by oxygen atoms',
    },

    N: {
      name: 'Natrium',
      nameOrigin:
        'From the Latin word nitrum, Greek Nitron, native soda; and genes, forming',
      history:
        'Nitrogen is considered to have been discovered by Scottish physician Daniel Rutherford in 1772, who called it noxious air or fixed air.\n\nIt was also studied at about the same time by Carl Wilhelm Scheele, Henry Cavendish and Joseph Priestley.\n\nIn 1790 the French chemist Jean-Antoine-Claude Chaptal named the element nitrogen.',
      applications:
        'Nitrogen is used to produce ammonia and fertilizers, vital for current food production methods.\n\nLiquid nitrogen is used as a refrigerant.\n\nNitric acid is used as an oxidizing agent in liquid fueled rockets.\n\nNitrogen is a constituent of molecules in every major drug class in pharmacology and medicine.',
      toxicity:
        'Rapid release of nitrogen gas into an enclosed space can displace oxygen, and therefore represents an asphyxiation hazard',
      description:
        'Nitrogen is present in all living organisms, in proteins, nucleic acids and other molecules',
    },

    F: {
      name: 'Fluorine',
      nameOrigin: 'From the Latin and French fluere, flow or flux',
      history:
        'In 1529, Georigius Agricola described the use of fluorspar as a flux.\n\nIn 1670 Heinrich Schwandhard found that glass was etched when exposed to fluorspar treated with acid.\n\nIn 1810, French scientist Andre-Marie Ampere proposed that fluoric acid was a compound of hydrogen with a new element.\n\nThe element was finally isolated in 1886 by Henri Moissan.',
      applications:
        'Compounds of fluorine, including sodium fluoride, are used in toothpaste and in drinking water to prevent dental cavities.\n\nHydrochlorofluorocarbons (HCFCs) and hydrofluorocarbons (HFCs) now serve as replacements for CFC refrigerants.\n\nFluorine and its compounds are used in processing nuclear fuel.',
      toxicity: 'Fluorine is highly toxic and corrosive',
      description: 'Fluorine reacts violently with water to produce oxygen',
    },
    Ne: {
      name: 'Neon',
      nameOrigin: 'From the Greek word neos, new',
      history:
        "Neon was discovered in 1898 by the British chemists Sir William Ramsay and Morris W. Travers in London.\n\nIt was discovered when Ramsay chilled a sample of air until it became a liquid, then warmed the liquid and captured the gases as they boiled off.\n\nAfter 1902, Georges Claude's company, Air Liquide, was producing industrial quantities of neon as a byproduct of his air liquefaction business.",
      applications:
        'Neon is often used in brightly lit advertising signs.\n\nIt is also used in vacuum tubes, high-voltage indicators, lightning arrestors, wave meter tubes, television tubes, and helium-neon lasers.\n\nLiquid neon is used as a cryogenic refrigerant.',
      toxicity: 'Neon is not known to be toxic',
      description: 'In a vacuum discharge tube, neon glows reddish orange',
    },
    Na: {
      name: 'Sodium',
      nameOrigin:
        'From the English word, soda; Medieval Latin, sodanum: a headache remedy',
      history:
        "The chemical abbreviation for sodium was first published by Jöns Jakob Berzelius in his system of atomic symbols.\n\nIt is a contraction of the element's new Latin name natrium, which refers to the Egyptian natron, a natural mineral salt primarily made of hydrated sodium carbonate.\n\nIn 1807, Sir Humphry Davy isolated sodium for the first time by electrolysis of dried sodium hydroxide, which had been very slightly moistened.",
      applications:
        'Metallic sodium is vital in the manufacture of esters and in the preparation of organic compounds.\n\nSodium vapor lamps are often used for street lighting in cities.\n\nLiquid sodium is used as a heat transfer fluid in some fast reactors.\n\nSodium is also used as an alloying metal, an anti-scaling agent, and as a reducing agent for metals when other materials are ineffective.',
      toxicity:
        'Sodium metal should be handled with great care as it cannot be maintained in an inert atmosphere',
      description: 'Sodium burns in air with a brilliant yellow flame',
    },
    Mg: {
      name: 'Magnesium',
      nameOrigin: 'From Magnesia, district in Thessaly',
      history:
        'Scottish chemist Joseph Black recognized magnesium as an element in 1755.\n\nMagnesium was first isolated by Sir Humphry Davy in 1808, in London.\n\nHe used electrolysis on a mixture of magnesia and mercuric oxide.\n\nAntoine Bussy prepared it in coherent form in 1831.',
      applications:
        'Magnesium is widely used in the manufacturing of mobile phones, laptop computers, cameras, and other electronic components.\n\nThe brilliant light it produces when ignited is made use of in photography, flares, pyrotechnics and incendiary bombs.\n\nMagnesium compounds such as the hydroxide (milk of magnesia), sulfate (Epsom salts), chloride and citrate are used for medicinal purposes.',
      toxicity:
        'Because serious fires can occur, great care should be taken in handling magnesium metal',
      description:
        'When it burns in air, magnesium produces a brilliant white light',
    },
    Al: {
      name: 'Aluminum',
      nameOrigin: 'From the Latin word alumen, alum',
      history:
        'In 1761, Guyton de Morveau proposed the name alumine for the base in alum, and Antoine Lavoisier, in 1787, thought this to be the oxide of a still undiscovered metal.\n\nSir Humphry Davy identified the existence of a metal base of alum in 1808.\n\nHans Christian Ørsted was the first to isolate metallic aluminum in 1825 in impure form.\n\nFriedrich Wöhler is generally credited with having isolated the metal in 1827.',
      applications:
        'Aluminum is used in an extensive range of products from drinks cans to window frames and boats to aircraft.\n\nIt is used in electrical transmission lines.\n\nIt is also used for kitchen utensils, outside building decoration, and in thousands of industrial applications.\n\nWhen alloyed with small amounts of copper, magnesium, silicon, manganese, or other elements impart a variety of useful properties.',
      toxicity: 'Aluminum is not known to be toxic',
      description: 'Aluminum does not stick to magnets under normal conditions',
    },
    Si: {
      name: 'Silicon',
      nameOrigin: 'From the Latin word silex, silicis, flint',
      history:
        'In 1800, Sir Humphry Davy thought silica to be a compound and not an element; but in 1811, Gay Lussac and Louis Jacques Thénard probably prepared impure amorphous silicon by heating potassium with silicon tetrafluoride.\n\nIn 1824 Jöns Jakob Berzelius prepared amorphous silicon by the same general method.\n\nHenri Deville in 1854 first prepared crystalline silicon, the second allotropic form of the element.',
      applications:
        'In the form of sand and clay it is used to make concrete and brick; it is a useful refractory material for high-temperature work, and in the form of silicates it is used in making enamels, pottery, etc.\n\nSilica, as sand, is a principal ingredient of glass.\n\nSilicon chips are the basis of modern electronic and computing.\n\nSilicon carbide, more commonly called carborundum is used in abrasives.',
      toxicity:
        'If breathed in as a fine silica/silicate dust, it may cause chronic respiratory problems',
      description:
        'Silicon also has the unusual property that it expands as it freezes',
    },

    P: {
      name: 'Phosphorus',
      nameOrigin:
        'From the Greek phosphoros, light bearing; ancient name for the planet Venus when appearing before sunrise',
      history:
        'Hennig Brand discovered phosphorus in 1669, in Hamburg, Germany, preparing it from urine.\n\nIn 1769, Johan Gottlieb Gahn and Carl Wilhelm Scheele showed that calcium phosphate is found in bones, and they obtained elemental phosphorus from bone ash.\n\nAntoine Lavoisier recognized phosphorus as an element in 1777.',
      applications:
        'Many fertilisers contain a high proportion of phosphorus and are manufactured from concentrated phosphoric acids.\n\nPhosphorus is used in the manufacture of safety matches, pyrotechnics and incendiary shells.\n\nPhosphorus is also used in steel manufacture and in the production of phosphor bronze.',
      toxicity:
        'White phosphorus is highly toxic while red phosphorus is considered non-toxic',
      description:
        'Elemental phosphorus exists in two major forms - white phosphorus and red phosphorus',
    },
    S: {
      name: 'Sulfur',
      nameOrigin: 'Known to the ancients; referred to in Genesis as brimstone',
      history:
        'By the 3rd century, the Chinese discovered that sulfur could be extracted from pyrite.\n\nIndian alchemists wrote extensively about the use of sulfur in alchemical operations with mercury, from the eighth century AD onwards.\n\nIn 1777, Antoine Lavoisier helped convince the scientific community that sulfur was an element, not a compound.',
      applications:
        "Sulfur's main commercial use is as a reactant in the production of sulfuric acid.\n\nSulfur is a component of black gunpowder, and is used in the vulcanization of natural rubber and a fungicide.\n\nIt is used to make sulfite paper and other papers, to fumigate, and to bleach dried fruits.\n\nIt is also used extensively in making phosphatic fertilizers.",
      toxicity: 'Elemental sulfur is considered to be of low toxicity',
      description: 'Penicillin is a natural, sulfur-based antibiotic',
    },

    Cl: {
      name: 'Chlorine',
      nameOrigin: 'From the Greek word chloro, greenish yellow',
      history:
        'Around 1630, chlorine was recognized as a gas by the Belgian chemist and physician Jan Baptist van Helmont.\n\nElemental chlorine was first prepared and studied in 1774 by Swedish chemist Carl Wilhelm Scheele.\n\nBy 1810, the scientific consensus was that chlorine was actually a compound that contained oxygen.\n\nIn 1811, Sir Humphry Davy concluded the new gas was in fact a new element.',
      applications:
        'Chlorine is used for producing safe drinking water.\n\nIt is also extensively used in the production of paper products, dyestuffs, textiles, petroleum products, medicines, antiseptics, insecticides, food, solvents, paints, plastics, and many other consumer products.\n\nChlorinated compounds are used mostly for sanitation, pulp bleaching, disinfectants, and textile processing.',
      toxicity:
        'Elemental chlorine at high concentrations is extremely dangerous and poisonous',
      description:
        'Tree frogs have a chlorine compound in their skin that is a very powerful pain killer',
    },
    Ar: {
      name: 'Argon',
      nameOrigin: 'From the Greek argos, inactive',
      history:
        'Argon was suspected to be present in air by Henry Cavendish in 1785.\n\nIt was not isolated until 1894 by Lord Rayleigh and Sir William Ramsay in Scotland.\n\nArgon became the first member of the noble gases to be discovered.\n\nIn 1957, IUPAC agreed that the symbol should change from A to Ar.',
      applications:
        'Argon gas is used to fill conventional incandescent and fluorescent light bulbs.\n\nArgon is also used as an inert gas shield for arc welding and cutting, as blanket for the production of titanium and other reactive elements.\n\nIt is used as a protective atmosphere for growing silicon and germanium crystals.',
      toxicity: 'Argon is considered to be non-toxic',
      description: 'Argon makes a distinctive blue-green gas laser',
    },
    K: {
      name: 'Potassium',
      nameOrigin:
        'From the English word, potash - pot ashes; Latin kalium, Arab qali, alkali',
      history:
        "Potassium's symbol K comes from 'kalium' the name of the element in Germany and Scandinavia.\n\nPotassium metal was first isolated in 1807 by Sir Humphry Davy, who derived it from caustic potash by the use of electrolysis of the molten salt with the newly discovered voltaic pile.\n\nPotassium was the first metal that was isolated by electrolysis.",
      applications:
        'The greatest demand for potash has been in its use for fertilizers.\n\nPotassium is an essential constituent for plant growth and is found in most soils.\n\nPotassium nitrate is the main explosive ingredient in gunpowder.\n\nPotassium hydroxide is used in the manufacture of soft soaps and as an electrolyte in alkaline batteries.',
      toxicity:
        'Potassium must be handled with great care with full skin and eye protection',
      description:
        'People whose diets are low in potassium can suffer from hypokalemia',
    },
    Ca: {
      name: 'Calcium',
      nameOrigin: 'From the Latin word calx, lime',
      history:
        'Calcium was known as early as the first century when the Ancient Romans prepared lime as calcium oxide.\n\nCalcium was first isolated by Sir Humphry Davy in 1808 when he electrolyzed a mixture of lime and mercuric oxide.\n\nDavy was trying to isolate calcium; when he heard that Jöns Jakob Berzelius and Pontin prepared calcium amalgam by electrolyzing lime in mercury, he tried it himself.',
      applications:
        'Calcium is used to remove oxygen, sulfur and carbon from alloys.\n\nIt is also used as an alloying agent used in the production of aluminum, beryllium, copper, lead, and magnesium alloys.\n\nCalcium is used as a reducing agent in the extraction of other metals, such as uranium, zirconium, and thorium.\n\nCalcium carbonate is used in manufacturing cement and mortar, lime and limestone.',
      toxicity: 'Calcium is considered to be non-toxic',
      description:
        'The shell of an egg is made up of primarily calcium carbonate',
    },
    Sc: {
      name: 'Scandium',
      nameOrigin: 'From the Latin word Scandia, Scandinavia',
      history:
        'In 1879, Lars Fredrik Nilson and his team detected scandium in the minerals euxenite and gadolinite.\n\nNilson prepared 2 grams of scandium oxide of high purity.\n\nPer Teodor Cleve showed that scandium had properties similar to those predicted by Mendeleev for eka-boron.\n\nMetallic scandium was first prepared in 1937 by Fischer and his colleagues.',
      applications:
        'Scandium is used in sports equipment such as golf iron shafts, baseball bats, bicycle frames and fishing rods.\n\n,Scandium iodide, along with sodium iodide, when added to a modified form of mercury-vapor lamp, produces a form of metal halide lamp.',
      toxicity: 'Scandium is considered to be of low toxicity',
      description:
        'The stable form of scandium is created in supernovas via the r-process',
    },
    Ti: {
      name: 'Titanium',
      nameOrigin:
        'From the Latin titans, the first sons of the Earth, Greek mythology',
      history:
        'William Gregor found the oxide of titanium in ilmenite in 1791.\n\nMartin Heinrich Klaproth independently discovered the element in rutile in 1795 and named it.\n\nThe pure metallic form was only obtained in 1910 by Matthew A. Hunter.\n\nIn 1936, the Kroll Process made the commercial production of titanium possible.',
      applications:
        'Titanium is used in steel as an alloying element to reduce grain size and as a deoxidizer, and in stainless steel to reduce carbon content.\n\nTitanium has potential use in desalination plants for converting sea water into fresh water.\n\nTitanium is used in several everyday products such as drill bits, bicycles, golf clubs, watches and laptop computers.',
      toxicity: 'Titanium metal is considered to be non-toxic',
      description:
        'Titanium is one of the few elements that burns in pure nitrogen gas',
    },
    V: {
      name: 'Vanadium',
      nameOrigin: 'Named after Scandinavian goddess, Vanadis',
      history:
        "Vanadium was originally discovered by Andrés Manuel del Río in 1801.\n\nIn 1805, the French chemist Hippolyte Victor Collet-Descotils incorrectly declared that del Río's new element was only an impure sample of chromium.\n\nIn 1831, the Swedish chemist Nils Gabriel Sefström rediscovered the element in a new oxide he found while working with iron ores.\n\nLater that same year, Friedrich Wöhler confirmed del Río's earlier work.",
      applications:
        'Vanadium is used as an additive in steel to strengthen and protect against corrosion.\n\nTitanium-aluminum-vanadium alloy is used in jet engines and for high-speed aircraft.\n\nVanadium foil is used in cladding titanium to steel.\n\nVanadium pentoxide is used in ceramics and as a catalyst for the production of sulfuric acid.',
      toxicity: 'All vanadium compounds should be considered toxic',
      description:
        'Vanadium is mined mostly in South Africa, north-western China, and eastern Russia',
    },
    Cr: {
      name: 'Chromium',
      nameOrigin: 'From the Greek word chroma, color',
      history:
        'In 1797, Louis Nicolas Vauquelin received samples of crocoite ore.\n\nIn 1798, Vauquelin discovered that he could isolate metallic chromium by heating the oxide in a charcoal oven, making him the discoverer of the element.\n\nVauquelin was also able to detect traces of chromium in precious gemstones, such as ruby or emerald.',
      applications:
        'Chromium is used to harden steel, manufacture stainless steel, and form many useful alloys.\n\nIt is mostly used in plating to produce a hard, beautiful surface and to prevent corrosion.\n\nThe metal is also widely used as a catalyst.\n\nChromium compounds are valued as pigments for their vivid green, yellow, red and orange colors.',
      description:
        'Chromium oxide was used by the Chinese in the Qin dynasty over 2,000 years ago',
      toxicity: 'In larger amounts, chromium can be toxic and carcinogenic',
    },
    Mn: {
      name: 'Manganese',
      nameOrigin:
        'From the Latin word magnes, magnet, from magnetic properties of pyrolusite',
      history:
        'By the mid-18th century, Swedish chemist Carl Wilhelm Scheele had used pyrolusite to produce chlorine.\n\nScheele and others were aware that pyrolusite contained a new element, but they were not able to isolate it.\n\nJohan Gottlieb Gahn was the first to isolate an impure sample of manganese metal in 1774, by reducing the dioxide with carbon.',
      applications:
        'For over 2000 years, manganese dioxide has been used to make colorless glass.\n\nManganese dioxide is used as the cathode material in zinc-carbon and alkaline batteries.\n\nManganese also functions in the oxygen-evolving complex of photosynthetic plants.\n\nThe dioxide is also used in the preparation of oxygen and chlorine and in drying black paints.',
      toxicity:
        'Excess manganese, particularly inhalation of the powder, is toxic',
      description:
        'Neanderthals may have used black manganese di oxide as a cosmetic 50,000 years ago',
    },
    Fe: {
      name: 'Iron',
      nameOrigin: 'From the Latin word ferrum',
      history:
        'The first iron used by humans is likely to have come from meteorites.\n\nThe oldest known iron objects used by humans are some beads of meteoric iron, made in Egypt in about 4000 BC.\n\nThe discovery of smelting around 3000 BC led to the start of the iron age around 1200 BC and the prominent use of iron for tools and weapons.',
      applications:
        'Iron is used to manufacture steel and other alloys important in construction and manufacturing.\n\nIron is a vital constituent of plant and animal life and works as an oxygen carrier in hemoglobin.\n\nIron oxide mixed with aluminum powder can be ignited to create a thermite reaction, used in welding and purifying ores.',
      description:
        'The color of blood is due to the hemoglobin, an iron-containing protein',
      toxicity: 'Iron is considered to be non-toxic',
    },
    Co: {
      name: 'Cobalt',
      nameOrigin:
        'From the German word Kobald, goblin or evil spirit; also from the Greek cobalos, mine',
      history:
        'Cobalt compounds have been used for centuries to impart a rich blue color to glass, glazes and ceramics.\n\nThe element was first isolated by Swedish chemist George Brandt in 1735.\n\nHe showed it was the presence of the element cobalt that caused the blue color in glass, not bismuth as previously thought.',
      applications:
        'Cobalt is used in the preparation of magnetic, wear-resistant and high-strength alloys.\n\nCobalt is widely used in batteries and in electroplating.\n\nA solution of the chloride is used as a sympathetic ink.',
      description:
        "Supplemental colbalt is essential in sheep's diets to improve the wools quality",
      toxicity: 'Cobalt and its compounds are considered to be slightly toxic',
    },
    Ni: {
      name: 'Nickel',
      nameOrigin:
        "From the German word Nickel (Satan), and from kupfernickel, Old Nick's copper",
      history:
        'Artifacts made from metallic meteorites have been found dating from as early as 5000 BC.\n\nIn 1751, Baron Axel Fredrik Cronstedt was trying to extract copper from kupfernickel and instead produced the white metal.\n\nIn the early twentieth century, Ludwig Mond patented a process using nickel carbonyl to purify nickel.',
      applications:
        'Nickel is used extensively to make coins and nickel steel for armor plates and burglar-proof vaults.\n\nTubing made of copper-nickel alloy is extensively used in making desalination plants for converting sea water into fresh water.\n\nNickel is also used in batteries, ceramics and magnets.',
      toxicity: 'Nickel and its compounds are considered to be carcinogenic',
      description:
        "Nickel is 100 times more concentrated below Earth's crust than in it",
    },
    Cu: {
      name: 'Copper',
      nameOrigin: 'From the Latin word cuprum, from the island of Cyprus',
      history:
        'Copper occurs naturally as native copper and was known to some of the oldest civilizations on record.\n\nEarliest estimates of the discovery of copper suggest around 9000 BC in the Middle East.\n\nIt was one of the most important materials to humans throughout the copper and bronze ages.',
      applications:
        'Copper is often used for electrical wiring applications and for household plumbing applications.\n\nCopper sulfate is used as a fungicide and as an algicide in rivers, lakes and ponds.\n\nIt is also used in cookware and cooking utensils.\n\nCommercially important alloys such as brass and bronze are made with copper and other metals.',
      description:
        'Pure copper is orange-red and acquires a reddish tarnish when exposed to air',
      toxicity: 'Cooking acidic food in copper pots can cause toxicity',
    },
    Zn: {
      name: 'Zinc',
      history:
        'Metallic zinc was produced in the 13th century A.D. India by reducing calamine with organic substances such as wool.\n\nThe metal was rediscovered in Europe by Andreas Sigismund Marggraf in 1746.\n\nHe heated a mixture of calamine ore and carbon in a closed vessel without copper to produce the metal.',
      applications:
        'Because of its corrosion resistance, zinc is often plated to other metals in a process called galvanization.\n\nZinc is an essential trace element for animals and plants.\n\nLarge quantities of zinc are used to produce die castings, which are used extensively by the automotive, electrical, and hardware industries.',
      nameOrigin: 'From the German word Zink, of obscure origin',
      toxicity: 'Zinc is not considered to be particularly toxic',
      description: 'Zinc is referred to in nonscientific contexts as spelter',
    },
    Ga: {
      name: 'Gallium',
      nameOrigin:
        'From the Latin word Gallia, France; also from Latin, gallus, a translation of Lecoq, a cock',
      history:
        'In 1871, existence of gallium was first predicted by Russian chemist Dmitri Mendeleev and called the element eka-aluminum.\n\nGallium was discovered spectroscopically by French chemist Paul Emile Lecoq de Boisbaudran in 1875 by its characteristic spectrum in an examination of a sphalerite sample.\n\nLater that year, Lecoq obtained the free metal by electrolysis of its hydroxide in potassium hydroxide solution.',
      applications:
        'Gallium wets glass or porcelain and forms a brilliant mirror when it is painted on glass.\n\nIt is widely used in doping semiconductors and producing solid-state devices such as transistors.\n\nLow melting gallium alloys are used in some medical thermometers as non-toxic substitutes for mercury.\n\nGallium arsenide is capable of converting electricity directly into coherent light.',
      toxicity: 'Gallium is considered to be non-toxic',
      description:
        'Gallium has a strong tendency to supercool below its melting point / freezing point',
    },
    Ge: {
      name: 'Germanium',
      nameOrigin: 'From the Latin word Germania, Germany',
      history:
        'In 1869, Dmitri Mendeleev predicted its existence and some of its properties based on its position on his periodic table and called the element eka-silicon.\n\nIn 1886, Clemens Winkler found the new element along with silver and sulfur, in a rare mineral called argyrodite.\n\nThe first silicon-germanium alloys were obtained in 1955.',
      applications:
        'The most common use of germanium is as a semiconductor in electronics.\n\nGermanium is used in transistors and in integrated circuits.\n\nIt is used as an alloying agent and as a catalyst.\n\nIt is also used in infrared spectroscopes and infrared detectors.',
      toxicity: 'Germanium is not known to be toxic',
      description:
        'Germanium and the oxide are transparent to infrared radiation',
    },
    As: {
      name: 'Arsenic',
      nameOrigin: 'From the Latin word arsenicum, Greek arsenikon',
      history:
        'Greek historian Olympiodorus of Thebes roasted arsenic sulfide and obtained white arsenic during 5th century AD.\n\nAlbertus Magnus is believed to have been the first to isolate the element from a compound in 1250, by heating soap together with arsenic trisulfide.\n\nIn 1649, Johann Schröder published two ways of preparing arsenic.',
      applications:
        'The toxicity of arsenic to insects, bacteria and fungi led to its use as a wood preservative and as insecticides.\n\nArsenic is used in bronzing, pyrotechny, and for hardening and improving the sphericity of shot.\n\nGallium arsenide is a semiconductor used in laser diodes and LEDs.\n\nSmall amounts of arsenic can be used in lead alloys for ammunition.',
      toxicity: 'Arsenic and its compounds are poisonous',
      description: 'Prawns are known to contain quite high levels of arsenic',
    },
    Se: {
      name: 'Selenium',
      nameOrigin: 'From the Greek word Selene, moon',
      history:
        'Selenium was first observed in about the year 1300 by the alchemist Arnold of Villanova.\n\nSelenium was discovered in 1817 by Jöns Jacob Berzelius and Johan Gottlieb Gahn who noted the similarity of the new element to the previously-known tellurium.\n\nIn 1873, Willoughby Smith found that the electrical resistance of grey selenium was dependent on the ambient light.',
      applications:
        'Selenium is used in the glass industry to decolorize glass and to make red-colored glasses and enamels.\n\nIt is used as a catalyst in many chemical reactions.\n\nIt is also used as a photographic toner, and as an additive to stainless steel.\n\nSelenium sulfide is used in anti-dandruff shampoos.',
      toxicity:
        "Many of selenium's compounds, such as selenates and selenites, are highly toxic",
      description: 'Selenium deficiency in animals can lead to slow growth',
    },
    Br: {
      name: 'Bromine',
      nameOrigin: 'From the Greek word bromos, stench',
      history:
        'Carl Jacob Löwig discovered bromine in 1825, while still a chemistry student at Heidelberg University, Germany.\n\nAntoine Balard distilled the bromine from a solution of seaweed ash saturated with chlorine in 1824.\n\nHe finally published his results in 1826, providing evidence that the substance he had discovered was a new element.',
      applications:
        'Bromine is used in making fumigants, flameproofing agents, water purification compounds, dyes, medicines and sanitizers.\n\nPotassium bromide is used as a source of bromide ions for the manufacture of silver bromide for photographic film.\n\nBromine is also used to reduce mercury pollution from coal-fired power plants.',
      toxicity: 'Bromine is poisonous and causes skin burns',
      description:
        'Bromine is the only nonmetallic element that is liquid at ordinary temperatures',
    },
    Kr: {
      name: 'Krypton',
      nameOrigin: 'From the Greek word kryptos, hidden',
      history:
        'Scottish chemist Sir William Ramsay and his assistant English chemist Morris Travers discovered krypton in 1898 in London.\n\nThey found krypton in the residue left from evaporating nearly all components of liquid air.\n\nWilliam Ramsay was awarded the 1904 Nobel Prize in Chemistry for discovery of a series of noble gases, including krypton.',
      applications:
        'Krypton is used in certain photographic flash lamps for high-speed photography.\n\nKrypton-83 has application in magnetic resonance imaging (MRI) for imaging airways.\n\nKrypton is used as a filling gas for energy-saving fluorescent lights and as an inert filling gas in incandescent bulbs.',
      toxicity: 'Krypton is considered to be non-toxic',
      description: 'When ionized, krypton gas emits bright white light',
    },
    Rb: {
      name: 'Rubidium',
      nameOrigin: 'From the Latin word rubidus, deepest red',
      history:
        'German chemists Robert Bunsen and Gustav Kirchhoff discovered rubidium in 1861 by the newly developed method of flame spectroscopy.\n\nThe separation of the metal was tried by Bunsen, but he never got samples with more than 18% of Rubidium.\n\nThe separation of the metal was only accomplished by George de Hevesy, through the hydrolysis of melted rubidium hydroxide.',
      applications:
        'Rubidium is used as a getter in vacuum tubes and as a photocell component.\n\nRubidium compounds are sometimes used in fireworks to give them a purple color.\n\nRubidium salts are used in glasses and ceramics.\n\nRubidium-87 is slightly radioactive and has been used extensively in dating rocks.',
      toxicity: 'Rubidium is not known to be toxic',
      description: 'Rubidium burns with a reddish-violet flame color',
    },
    Sr: {
      name: 'Strontium',
      nameOrigin: 'Named after Strontian, a town in Scotland',
      history:
        'Strontium was recognized as a new element in 1790 when Adair Crawford and his colleague William Cruickshank analyzed a mineral sample from a lead mine near Strontian, Scotland.\n\nThe element was eventually isolated by Sir Humphry Davy in 1808.\n\nThe isolation was done by the electrolysis of a mixture containing strontium chloride and mercuric oxide.',
      applications:
        'The primary use for strontium is in glass for color television cathode ray tubes.\n\nStrontium salts are used in flares and fireworks for a crimson color.\n\nStrontium chloride is used in toothpaste for sensitive teeth.\n\nStrontium oxide is used to improve the quality of pottery glazes.',
      toxicity: "Strontium's non-radioactive isotopes are considered non-toxic",
      description: 'Strontium metal turns yellow when exposed to air',
    },
    Y: {
      name: 'Yttrium',
      history:
        "In 1787, Carl Axel Arrhenius found a new mineral near Ytterby in Sweden and named it ytterbite, after the village.\n\nJohan Gadolin discovered yttrium's oxide in Arrhenius' sample in 1789, and Anders Gustaf Ekeberg named the new oxide yttria.\n\nElemental yttrium was first isolated in 1828 by Friedrich Wöhler.",
      applications:
        'Yttrium is often used in alloys, increasing the strength of aluminum and magnesium alloys.\n\nYttrium is one of the elements used to make the red color in CRT televisions.\n\nIt is also used as a deoxidizer for non-ferrous metals such as vanadium.\n\nYttrium can be used in laser systems and as a catalyst for ethylene polymerization reactions.',
      toxicity:
        'Exposure to yttrium compounds in humans may cause lung disease',
      description: 'Finely divided yttrium is very unstable in air',
      nameOrigin: 'Named after Ytterby, a village in Sweden near Vauxholm',
    },
    Zr: {
      name: 'Zirconium',
      nameOrigin: 'From the Persian zargun, gold like',
      description:
        'The most common oxide is zirconium dioxide, also referred to as zirconia',
      toxicity: 'Zirconium is considered to be non-toxic',
      history:
        'Zirconium was first recognized as an element by Martin Heinrich Klaproth in 1789, in Berlin, in a sample of zircon from Sri Lanka.\n\nZirconium metal was first obtained in an impure form in 1824 by Jöns Jakob Berzelius by heating a mixture of potassium and potassium zirconium fluoride in an iron tube.\n\nDutch scientists Anton Eduard van Arkel and Jan Hendrik de Boer discovered a method for producing high purity zirconium in 1925.',
      applications:
        'Zirconium is mainly used as a refractory and opacifier, although it is used in small amounts as an alloying agent for its strong resistance to corrosion.\n\nZirconium is used as to make surgical instruments and is used in steel alloys as a hardening agent.\n\nZirconium is also used to make superconductive magnets.',
    },
    Nb: {
      name: 'Niobium',
      nameOrigin: 'Named after Niobe, the daughter of Tantalu',
      history:
        'Niobium was discovered by the English chemist Charles Hatchett in 1801 and named the new element columbium.\n\nIn 1846, German chemist Henrich Rose independently discovered the element and named it niobium.\n\nThe metal was first isolated by Swedish scientist Christian Wilhelm Blomstrand in 1864 who reduced the chloride by heating it in a hydrogen atmosphere.',
      applications:
        'Niobium is used in arc-welding rods for stabilized grades of stainless steel.\n\nNiobium alloys are strong and are often used in pipeline construction.\n\nThe metal is used in superalloys for jet engines and heat resistant equipment.\n\nNiobium is found in many medical devices such as pacemakers.',
      toxicity: 'Some niobium compounds are highly toxic',
      description: 'Brazil is the leading producer of niobium',
    },
    Mo: {
      name: 'Molybdenum',
      applications:
        'Molybdenum is used as glass furnace electrodes due to its high melting point.\n\nThe metal is also used in nuclear energy applications and for missile and aircraft parts.\n\nMolybdenum is valuable as a catalyst in the refining of petroleum.\n\nMolybdenum is used in small quantities to harden steel and is used in many alloys.',
      history:
        "Molybdenite was often confused for graphite and it was thought to contain lead.\n\nIn 1778 Swedish scientist Carl Wilhelm Scheele proved that molybdenite was not graphite nor did it contain lead.\n\nIn 1781, Scheele's friend and countryman, Peter J. Hjelm isolated the metal by using carbon and linseed oil.",
      toxicity: 'Molybdenum is toxic in all but small quantities',
      description: 'Molybdenum is essential for plant foliage health',
      nameOrigin: 'From the Greek word molybdo, lead',
    },
    Tc: {
      nameOrigin: 'From the Greek word technetos, artificial',
      name: 'Technetium',
      applications:
        "Technetium is used in nuclear medicine to carry out a number of medical tests, mainly relating to imaging and functional studies of internal bodily organs like bone scan.\n\nIt is also used industrially for equipment calibration following its approval as a standard beta emitter.\n\nMild carbon steels may be effectively protected by minute quantities of technetium, but this corrosion protection is limited to closed systems because of technetium's radioactivity.",
      history:
        'Element 43 was predicted on the basis of the periodic table, and was erroneously reported as having been discovered in 1925, at which time it was named masurium.\n\nThe element was actually discovered by Carlo Perrier and Emilio Segrè in 1937.\n\nIt was also found in a sample of molybdenum sent by Ernest Lawrence that was bombarded by deuterons in the Berkeley cyclotron.\n\n',
      description:
        'Technetium was the first element to be produced artificially',
      toxicity: 'Technetium is harmful due to its radioactivity',
    },
    Ru: {
      name: 'Ruthenium',
      toxicity:
        'Ruthenium is a suspected carcinogen and its compounds strongly stain the skin',
      description: 'Ruthenium is unaffected by air, water and acids',
      nameOrigin: 'From the Latin word Ruthenia, Russia',
      applications:
        'Ruthenium is used in platinum and palladium alloys to make wear-resistant electrical contacts.\n\nRuthenium dioxide and lead and bismuth ruthenates are used in thick-film chip resistors.\n\nFountain pen nibs are frequently tipped with alloys containing ruthenium.\n\nRuthenium is a versatile catalyst.',
      history:
        'Jędrzej Śniadecki isolated the element in 1807, but his work was not ratified.\n\nJöns Berzelius and Gottfried Osann nearly discovered ruthenium in 1827.\n\nIn 1844, Karl Ernst Claus confirmed that there was a new element and isolated ruthenium from the platinum residues of the rouble production while he was working in Kazan University, Kazan.',
    },
    Rh: {
      description:
        'Rhodium metal does not normally form an oxide, even when heated',
      name: 'Rhodium',
      toxicity: 'Rhodium is considered to be non-toxic',
      applications:
        "The element's major use is as one of the catalysts in the three-way catalytic converters in automobiles.\n\nRhodium is used as an alloying agent for hardening and improving the corrosion resistance of platinum and palladium.\n\nIt is also used as a filter in mammography systems because of the characteristic X-rays it produces.\n\nRhodium is also used for jewelry and for decorations.",
      history:
        'Rhodium was discovered in 1803 by William Hyde Wollaston in London.\n\nHe used crude platinum ore presumably obtained from South America.\n\nThe introduction of the three way catalytic converter by Volvo in 1976 increased the demand for rhodium.',
      nameOrigin: 'From the Greek word rhodon, rose',
    },
    Pd: {
      name: 'Palladium',
      history:
        'Palladium was discovered in 1803, in London, by English chemist William Hyde Wollaston.\n\nHe examined the residues left from platinum after dissolving it in aqua regia, a concentrated solution of hydrochloric and nitric acids.\n\nHe then isolated palladium in a series of chemical reactions.',
      applications:
        'The largest use of palladium is in catalytic converters in the automobile industry.\n\nFinely divided palladium is a good catalyst and is used for hydrogenation and dehydrogenation reactions.\n\nThe metal is used in dentistry, watch making, and in making surgical instruments and electrical contacts.',
      toxicity: 'Palladium is considered to be of low toxicity',
      description:
        'In the late 1800s, palladium was more expensive than platinum',
      nameOrigin:
        'Palladium was named after the asteroid Pallas; Pallas was the Greek goddess of wisdom',
    },
    Ag: {
      name: 'Silver',
      nameOrigin: 'The Latin word for silver is argentum',
      history:
        'Silver has been used for thousands of years for ornaments and utensils, for trade, and as the basis for many monetary systems.\n\nIts value as a precious metal was long considered second only to gold.\n\nSlag dumps in Asia Minor and on islands in the Aegean Sea indicate that man learned to separate silver from lead as early as 3000 BC.',
      applications:
        'Silver has long been valued as a precious metal, and is used as an investment, to make ornaments, jewelry, high-value tableware, utensils, and currency coins.\n\nIt is also used in electrical contacts and conductors, in mirrors and in catalysis of chemical reactions.\n\nIts compounds are used in photographic film, and dilute silver nitrate solutions and other silver compounds are used as disinfectants and microbiocides',
      toxicity: 'Silver is considered to be non-toxic',
      description:
        'In ancient Egypt and Medieval Europe, silver was often more valuable than gold',
    },
    Cd: {
      name: 'Cadnium',
      nameOrigin:
        'From the Latin word cadmia, Greek kadmeia - the ancient name for calamine, zinc carbonate',
      history:
        'Cadmium was discovered by German chemist Friedrich Stromeyer in 1817 as an impurity in zinc carbonate.\n\nStromeyer noted that some impure samples of calamine (zinc carbonate) changed color when heated but pure calamine did not.\n\nCadmium was independently discovered by German chemist Karl Hermann in 1818.',
      applications:
        'Cadmium is a key component in battery production.\n\nIt is also is used in electroplating.\n\nCadmium oxide is used in black and white television phosphors and in the blue and green phosphors for color television picture tubes.\n\nCadmium is used as a barrier to control neutrons in nuclear fission.',
      description: 'Cadmium is a soft metal which is easily cut with a knife',
      toxicity: 'Cadmium and its compounds are highly toxic',
    },
    In: {
      name: 'Indium',
      nameOrigin: 'From the brilliant indigo line in its spectrum',
      toxicity: 'Indium is considered to be of low toxicity',
      description: "When it is bent, indium emits a high-pitched 'cry'",
      history:
        'Ferdinand Reich and Hieronymous Theodor Richter first identified indium in sphalerite by its bright indigo-blue spectroscopic emission line.\n\nAs no element was known with a bright blue emission they concluded that a new element was present in the minerals.\n\nRichter went on to isolate the metal in 1864.',
      applications:
        "Indium's current primary application is to form transparent electrodes from indium tin oxide in liquid crystal displays and touchscreens.\n\nIt is widely used in thin-films to form lubricated layers.\n\nIt is also used for making particularly low melting point alloys, and is a component in some lead-free solders.",
    },
    Sn: {
      name: 'Tin',
      nameOrigin: 'The Latin word for tin is stannum',
      history:
        'Tin was first smelted in combination with copper around 3500 BC to produce bronze.\n\nThe oldest artifacts date from around 2000 BC.\n\nCassiterite, the tin oxide form of tin, was most likely the original source of tin in ancient times.\n\nBritish scientist Robert Boyle published a description of his experiments on the oxidation of tin in 1673.',
      toxicity:
        'Tin is considered to be non-toxic but most tin salts are toxic',
      applications:
        'Tin is used as a coating on the surface of other metals to prevent corrosion.\n\nIt has long been used as a solder in the form of an alloy with lead.\n\nTin salts sprayed onto glass are used to produce electrically conductive coatings.\n\nTin chloride is used as a mordant in dyeing textiles and for increasing the weight of silk.',
      description:
        'When a bar of tin is bent, a crackling sound known as the tin cry can be heard',
    },
    Sb: {
      name: 'Antimony',
      applications:
        'The largest applications for metallic antimony are as alloying material for lead and tin and for lead antimony plates in lead-acid batteries.\n\nAlloying lead and tin with antimony improves the properties of the alloys which are used in solders, bullets and plain bearings.\n\nAntimony trioxide is used as a flame retardant in adhesives, plastics, rubber and textiles.',
      history:
        "One of antimony's minerals, stibnite was recognized in predynastic Egypt as an eye cosmetic as early as about 3100 BC.\n\nThe first European description of a procedure for isolating antimony is in the book De la pirotechnia of 1540 by Vannoccio Biringuccio.\n\nThe first natural occurrence of pure antimony in the Earth's crust was described by the Swedish scientist and local mine district engineer Anton von Swab in 1783.",
      toxicity: 'Antimony and many of its compounds are toxic',
      description: 'Antimony is a poor conductor of heat and electricity',
      nameOrigin:
        'From the Greek word anti plus monos - a metal not found alone',
    },
    Te: {
      name: 'Tellurium',
      history:
        'Tellurium was discovered in Transylvania in 1782 by Franz-Joseph Müller von Reichenstein in a mineral containing tellurium and gold.\n\nIn 1789, another Hungarian scientist, Pál Kitaibel, also discovered the element independently in an ore from Deutsch-Pilsen which had been regarded as argentiferous molybdenite.\n\nIn 1798, it was named by Martin Heinrich Klaproth who earlier isolated it from the mineral calaverite.',
      applications:
        'The primary use of tellurium is in alloys, foremost in steel and copper to improve machinability.\n\nTellurium is used as a basic ingredient in blasting caps, and is added to cast iron for chill control.\n\nIt is used in vulcanizing rubber and in catalysts for petroleum cracking.\n\nTellurium is used as a coloring agent in ceramics.',
      description:
        'In air, tellurium burns with a greenish-blue flames, forming the dioxide',
      toxicity:
        'Tellurium and tellurium compounds are considered to be mildly toxic',
      nameOrigin: 'From the Latin word tellus, earth',
    },
    I: {
      name: 'Iodine',
      history:
        'Iodine was discovered by French chemist Bernard Courtois in 1811.\n\nHe treated the liquor obtained from the extraction of kelp, with sulfuric acid to produce a vapour with a violet color.\n\nIn 1812, Joseph Louis Gay-Lussac demonstrated that iodine was an element and its chemical relationship to chlorine.',
      applications:
        'Iodine compounds are important in organic chemistry and very useful in medicine.\n\nA solution containing potassium iodide and iodine in alcohol is used to disinfect external wounds.\n\nSilver iodide is a major ingredient to traditional photographic film.\n\nIodine is added to table salt to prevent thyroid disease.',
      toxicity: 'Elemental iodine is toxic if taken orally',
      description:
        'Kelp was the main source of natural iodine in the 18th and 19th centuries',
      nameOrigin: 'From the Greek word iodes, violet',
    },
    Xe: {
      name: 'Xenon',
      nameOrigin: 'From the Greek word xenon, stranger',
      history:
        'Xenon was discovered in England by the Scottish chemist William Ramsay and English chemist Morris Travers in 1898.\n\nThey found xenon in the residue left over from evaporating components of liquid air.\n\nSpectroscopic analysis showed the previously unseen beautiful blue lines that indicated the presence of a new element.',
      applications:
        'Xenon is used in flash lamps and arc lamps, and in photographic flashes.\n\nXenon is used in medicine as a general anesthetic and in medical imaging.\n\nIn nuclear energy applications, xenon is used in bubble chambers, probes, and in other areas where a high molecular weight and inert nature is desirable.',
      description: "If inhaled, xenon can cause a person's voice to deepen",
      toxicity: 'Xenon is not toxic, but its compounds are highly toxic',
    },
    Cs: {
      name: 'Cesium',
      nameOrigin: 'From the Latin word caesius, sky blue',
      history:
        'Robert Bunsen and Gustav Kirchhoff were the first to suggest finding cesium in 1860 by spectrum analysis.\n\nThey discovered cesium by its two blue emission lines in a sample of Dürkheim mineral water.\n\nThe pure metal was eventually isolated by the German chemist Carl Setterberg while working on his doctorate with Kekulé and Bunsen.',
      applications:
        'The radioactive isotope cesium-137 has a half-life of about 30 years and is used in medical applications, industrial gauges, and hydrology.\n\nCesium is also used in photoelectric cells and as a catalyst in the hydrogenation of organic compounds.\n\nCesium vapor thermionic generators are low-power devices that convert heat energy to electrical energy.',
      toxicity: 'Cesium compounds are considered to be mildly toxic',
      description:
        'Cesium was the first element discovered using a spectroscope',
    },
    Ba: {
      applications:
        'Barium is used as a flashed getter in vacuum tubes to remove the last traces of gases.\n\nIt is often used in barium-nickel alloys for spark plug wire.\n\nBarium sulfate is important to the petroleum industry as a drilling fluid in oil and gas wells.\n\nBarium is also used in medicine to detect abnormalities in the digestive system.',
      history:
        'Barium was identified as a new element in 1774 by Carl Wilhelm Scheele.\n\nBarium was first isolated by electrolysis of molten barium salts in 1808, by Sir Humphry Davy in England.\n\nRobert Bunsen and Augustus Matthiessen obtained pure barium by electrolysis of a molten mixture of barium chloride and ammonium chloride.',
      toxicity: 'Water-soluble barium compounds are poisonous',
      description: 'At low doses, barium acts as a muscle stimulant',
      nameOrigin: 'From the Greek word barys, heavy',
      name: 'Barium',
    },
    La: {
      name: 'Lanthanum',
      nameOrigin: 'From the Greek word lanthanein, to lie hidden',
      history:
        'Lanthanum was discovered in 1839 by Swedish chemist Carl Gustav Mosander.\n\nHe partially decomposed a sample of cerium nitrate by heating and treating the resulting salt with dilute nitric acid.\n\nFrom the resulting solution, he obtained a pale brick colored oxide of the new rare earth.\n\nLanthanum was isolated in relatively pure form in 1923.',
      applications:
        'Lanthanum is used in large quantities in batteries for hybrid automobiles.\n\nIt is also used to make night vision goggles.\n\nSmall amounts of lanthanum, as an additive, can be used to produce nodular cast iron.\n\nLanthanum carbonate is used to reduce blood levels of phosphate in patients with kidney disease.',
      toxicity:
        'Lanthanum and its compounds are considered to be moderately toxic',
      description: 'Lanthanum is the most reactive of the rare earth metals',
    },
    Hf: {
      nameOrigin: 'From Hafinia, the Latin name for Copenhagen',
      history:
        'In 1911, Georges Urbain claimed to have found the element in rare-earth residues which was shown later to be a mixture of already discovered lanthanides.\n\nDirk Coster and George de Hevesy found it by X-ray spectroscopic analysis in Norwegian zircon in 1922.\n\nAnton Eduard van Arkel and Jan Hendrik de Boer were the first to prepare metallic hafnium by passing hafnium tetra-iodide vapor over a heated tungsten filament in 1924.',
      applications:
        'Hafnium oxide-based compounds are being introduced into silicon-based chips to produce smaller, more energy efficient and performance packed processors.\n\nMost of the hafnium produced is used in the production of control rods for nuclear reactors.\n\nHafnium is also used in photographic flash bulbs, light bulb filaments, and in electronic equipment as cathodes and capacitors.',
      toxicity: 'Hafnium is considered to be non-toxic',
      description:
        'In powdered form, hafnium is pyrophoric and can ignite spontaneously in air',
      name: 'Hafnium',
    },
    Ta: {
      name: 'Tantalum',
      nameOrigin:
        'Named after Tantalos, a Greek mythological character, father of Niobe',
      history:
        "Tantalum was discovered in Sweden in 1802 by Anders Ekeberg in the minerals tantalite from Finland and yttrotantalite from Sweden.\n\nUnfortunately, William Hyde Wollaston claimed Ekeberg's new element was actually niobium, which had also been discovered in 1802.\n\nIn 1846, German chemist Heinrich Rose finally proved beyond doubt that tantalum and niobium were different elements.",
      applications:
        'Tantalum is used in the electronics industry for capacitors and high power resistors.\n\nThe high melting point and oxidation resistance lead to the use of the metal in the production of vacuum furnace parts.\n\nTantalum oxide is used to make special glass with high index of refraction for camera lenses.',
      toxicity: 'Tantalum is considered to be non-toxic',
      description:
        'Tantalum occurs principally in the mineral columbite-tantalite',
    },
    W: {
      name: 'Tungsten',
      nameOrigin: 'From Swedish, tung sten meaning heavy stone',
      history:
        'Torbern Bergman obtained from scheelite an oxide of a new element in 1781.\n\nIn 1783, José and Fausto Elhuyar found an acid made from wolframite that was identical to tungstic acid.\n\nLater that year, in Spain, the brothers succeeded in isolating tungsten by reduction of this acid with charcoal, and they are credited with the discovery of the element.',
      applications:
        'Tungsten and its alloys are widely used for filaments in electric bulbs and electronic tubes.\n\nTungsten carbide is of great importance to the metal-working, mining, and petroleum industries.\n\nTungsten oxides are used in ceramic glazes and calcium/magnesium tungstates are used widely in fluorescent lighting.',
      description:
        'The chemical symbol, W, comes from the original name of the element, Wolfram',
      toxicity: 'Tungsten is considered to be of low toxicity',
    },
    Re: {
      name: 'Rhenium',
      nameOrigin: 'From the Latin word Rhenus meaning Rhine',
      history:
        'In 1908, Japanese chemist Masataka Ogawa announced that he discovered the 43rd element.\n\nHowever, later analysis indicated the presence of rhenium (element 75), not element 43.\n\nIn 1922, Walter Noddack, Ida Eva Tacke and Otto Berg announced its separation from gadolinite and gave it the present name.',
      applications:
        'Rhenium is widely used as filaments for mass spectrographs and ion gauges.\n\nIt is also used with platinum as catalysts in the production of lead-free, high-octane gasoline.\n\nNickel-based superalloys of rhenium are used in the combustion chambers, turbine blades, and exhaust nozzles of jet engines.',
      description: "Chile has the world's largest rhenium reserves",
      toxicity: 'Very little is known about the toxicity of rhenium',
    },
    Os: {
      name: 'Osmium',
      nameOrigin: 'From the Greek word osme, meaning smell',
      history:
        'Osmium was discovered in 1803 by English chemist Smithson Tennant in London.\n\nChemists who studied platinum dissolved it in aqua regia to create soluble salts and observed a small amount of a dark, insoluble residue.\n\nSmithson Tennant analyzed the insoluble residue and concluded that it must contain a new metal.',
      applications:
        'Osmium is used alloyed with other metals in the platinum group to produce very hard alloys.\n\nOsmium alloys are used in the tips of fountain pens, instrument pivots, and electrical contacts.\n\nOsmium tetroxide has been used in fingerprint detection and in staining fatty tissue for optical and electron microscopy.',
      toxicity:
        'Even low concentrations in air can cause lung congestion, skin damage, or eye damage',
      description:
        "Osmium is the least abundant stable element in the Earth's crust",
    },
    Ir: {
      name: 'Iridium',
      nameOrigin: 'From the Latin word iris meaning rainbow',
      history:
        'Iridium was discovered in 1803 by English chemist Smithson Tennant in London.\n\nChemists who studied platinum dissolved it in aqua regia to create soluble salts and observed a small amount of a dark, insoluble residue.\n\nSmithson Tennant analyzed the insoluble residue and concluded that it must contain a new metal.',
      applications:
        'Iridium is used in making crucibles and other equipment that is used at high temperatures.\n\nIridium is also used as a hardening agent in platinum alloys.\n\nIts resistance to arc erosion makes iridium alloys ideal for electrical contacts for spark plugs.\n\nRadioactive isotopes of iridium are used in radiation therapy for the treatment of cancer.',
      toxicity: 'Iridium is considered to be of low toxicity',
      description: 'Iridium is the most corrosion-resistant metal known',
    },
    Pt: {
      nameOrigin: 'From the Spanish word platina, meaning silver',
      name: 'Platinum',
      history:
        'Platinum was first used by pre-Columbian South American natives to produce artifacts.\n\nAntonio de Ulloa published his findings about platinum in 1748, but Sir Charles Wood also investigated the metal in 1741.\n\nFirst reference to it as a new metal was made by William Brownrigg in 1750.',
      applications:
        'The most common use of platinum is as a catalyst in chemical reactions.\n\nPlatinum is used in jewelry, decoration and dental work.\n\nPlatinum-cobalt, an alloy of roughly three parts platinum and one part cobalt, is used to make relatively strong permanent magnets.\n\nPlatinum-based anodes are used in ships, pipelines, and steel piers.',
      toxicity: 'Platinum is considered to be non-toxic',
      description:
        'Platinum exists in higher abundances on the Moon and in meteorites',
    },
    Au: {
      name: 'Gold',
      nameOrigin: 'From the Latin word aurum meaning gold',
      history:
        'Gold has been known since prehistoric times and was the first metal used by humans.\n\nGold artifacts dated to 5000 years ago have been found in Egyptian tombs.\n\nGold of 98% purity has been found in Nahal Qunah in the ancient kingdom of Israel, dating from about 6000 years ago.',
      applications:
        'Gold is used in coinage and is a standard for monetary systems in many countries.\n\nIt is also extensively used for jewelry, decoration, dental work, and for plating.\n\nGold is used widely in microelectronic circuits to ensure reliable, corrosion-resistant and static-free performance.\n\nGold leaf, flake or dust is used in some gourmet foods as decorative ingredient.',
      toxicity: 'Gold is considered to be non-toxic',
      description: "India is the world's largest single consumer of gold",
    },
    Hg: {
      name: 'Mercury',
      nameOrigin: 'From the Latin word hydrargyrum meaning liquid silver',
      history:
        'Mercury was known to the ancient Chinese and Indians and has been found in Egyptian tombs dating back to about 1500 BC.\n\nAlchemists thought of mercury as the First Matter from which all metals were formed.\n\nThey believed that different metals could be produced by varying the quality and quantity of sulfur contained within the mercury.',
      applications:
        "Mercury is used in barometers and manometers because of its high density.\n\nGaseous mercury is used in mercury-vapor lamps and some 'neon sign' type advertising signs and fluorescent lamps.\n\nMercury is also found in liquid mirror telescopes.\n\nGaseous mercury is also found in some electron tubes, including ignitrons, thyratrons, and mercury arc rectifiers.",
      toxicity: 'Mercury and most of its compounds are highly toxic',
      description:
        'Mercury is the only metal that is liquid at room temperature',
    },
    Tl: {
      name: 'Thallium',
      nameOrigin: 'From Greek thallos, meanin a green shoot or twig',
      history:
        'Thallium was discovered spectroscopically by Sir William Crookes in 1861, in London.\n\nIn 1862, Claude-Auguste Lamy used a spectrometer to determine the composition of a selenium-containing substance which was deposited during the production of sulfuric acid from pyrite.\n\nHe noticed the new green line in the spectra and concluded that a new element was present.',
      applications:
        'Thallium selenide has been used in a bolometer for infrared detection.\n\nThallium is also used in gamma radiation detection equipment.\n\nThallium oxide has been used to produce glasses with a high index of refraction, and is used in the manufacture of photo cells.\n\nSome of the electrodes in dissolved oxygen analyzers contain thallium.',
      description:
        "Agatha Christie made use of thallium's toxicity in her novel The Pale Horse",
      toxicity: 'Thallium and its compounds are highly toxic',
    },
    Pb: {
      name: 'Lead',
      nameOrigin: 'From the Latin word plumbum',
      history:
        'Metallic lead beads dating back to 6400 BC have been found in Çatalhöyük in modern-day Turkey.\n\nThe Romans also used lead in molten form to secure iron pins that held together large limestone blocks in certain monumental buildings.\n\nIn alchemy, lead was thought to be the oldest metal and was associated with the planet Saturn.',
      applications:
        'Large quantities of lead, both as the metal and as the dioxide, are used in storage batteries.\n\nLead is used as electrodes in the process of electrolysis.\n\nIt is added to brass to reduce machine tool wear.\n\nLead, in either pure form or alloyed with tin, or antimony is the traditional material for bullets and shot in firearms use.',
      toxicity: 'Lead and its compounds are poisonous',
      description:
        'Pencil leads in wooden pencils have never been made from lead',
    },
    Bi: {
      name: 'Bismuth',
      nameOrigin: 'From the German Weisse Masse, meaning white mass',
      applications:
        'Bismuth is used in producing malleable irons and is used as a catalyst for making acrylic fibers.\n\nBismuth oxychloride is used in cosmetics, as a pigment in paint for eye shadows, hair sprays and nail polishes.\n\nIt has also been used as a replacement for lead in shot, bullets and less-lethal riot gun ammunition.',
      history:
        'Bismuth has been known since ancient times, so no one person is credited with its discovery.\n\nThe element was confused in early times with tin and lead because of its resemblance to those elements.\n\nIn 1753, French chemist Claude François Geoffroy demonstrated that this metal is distinct from lead and tin.',
      toxicity: 'Bismuth is considered to be non-toxic',
      description:
        'Bismuth has unusually high electrical resistance for a metal',
    },
    Po: {
      name: 'Polonium',
      nameOrigin: 'Named after Poland, native country of Madam Curie',
      history:
        'Polonium was discovered by Marie and Pierre Curie in 1898 in Paris.\n\nThis element was the first one discovered by the Curies while they were investigating the cause of pitchblende radioactivity.\n\nThe dangers of working with radioactive elements were not known when the Curies made their discoveries.',
      applications:
        'Polonium is used to eliminate static electricity produced during processes such as rolling paper, wire and sheet metal.\n\nPolonium can be mixed or alloyed with beryllium to provide a source of neutrons.\n\nIt is also used in anti-static brushes to eliminate dust on photographic film.',
      toxicity: 'Polonium is highly dangerous and radioactive',
      description:
        'Polonium is obtained by irradiating bismuth with high-energy neutrons or protons',
    },
    At: {
      description:
        'Astatine is preferentially concentrated in the thyroid gland',
      toxicity: 'Astatine is highly radioactive',
      name: 'Astatine',
      history:
        'In 1869, existence of astatine was first predicted by Russian chemist Dmitri Mendeleev and called the element eka-iodine.\n\nIn 1940, Dale R. Corson, Kenneth Ross MacKenzie, and Emilio Segrè isolated the element at the University of California, Berkeley.\n\nInstead of searching for the element in nature, the scientists created it by bombarding bismuth-209 with alpha particles.',
      applications:
        'The newly formed astatine-211 is important in nuclear medicine.\n\nOnce produced, astatine must be used quickly, as it decays with a half-life of 7.2 hours.\n\nAstatine-211 can be used for targeted alpha particle radiotherapy, since it decays either via emission of an alpha particle.',
      nameOrigin: 'From the Greek astatos meaning unstable',
    },
    Rn: {
      name: 'Radon',
      nameOrigin:
        'The name was derived from radium; called niton at first, from the Latin word nitens meaning shining',
      history:
        'Radon was discovered in 1900 by Friedrich Ernst Dorn in Halle, Germany.\n\nHe reported some experiments in which he noticed that radium compounds emanate a radioactive gas.\n\nIn 1910, Sir William Ramsay and Robert Whytlaw-Gray isolated radon, determined its density, and determined that it was the heaviest known gas.',
      applications:
        'Radon is used in hydrologic research that studies the interaction between ground water and streams.\n\nRadon has been produced commercially for use in radiation therapy.\n\nRadon has been used in implantable seeds, made of gold or glass, primarily used to treat cancers.',
      toxicity: 'Radon is highly radioactive and a carcinogen',
      description:
        'Upon condensation, radon glows because of the intense radiation it produces',
    },
    Fr: {
      name: 'Francium',
      history:
        'Francium was discovered in 1939 by Marguerite Perey of the Curie Institute in Paris, France.\n\nIt was discovered when she was researching the radioactive decay of actinium-227.\n\nMarguerite Perey discovered that francium-223 is made naturally when actinium-227 emits an alpha-particle.',
      applications:
        'Due to its instability and rarity, there are no commercial applications for francium.\n\nIt has been used for research purposes in the fields of biology and of atomic structure.\n\nIts use as a potential diagnostic aid for various cancers has also been explored, but this application has been deemed impractical.',
      toxicity: 'Francium is highly radioactive',
      description:
        'Francium was the last element discovered in nature, rather than by synthesis',
      nameOrigin: 'Francium was named after France',
    },
    Ra: {
      name: 'Radium',
      toxicity: 'Radium is highly radioactive and carcinogenic',
      description: 'Radium imparts a carmine red color to a flame',
      history:
        'Radium was discovered by Marie Curie and Pierre Curie in 1898.\n\nThey extracted the radium compound from a uraninite sample.\n\nRadium was isolated in its metallic state by Marie Curie and André-Louis Debierne in 1910 through the electrolysis of radium chloride by using a mercury cathode and distilling in an atmosphere of hydrogen gas.',
      applications:
        'Radium was formerly used in self-luminous paints for watches, nuclear panels, aircraft switches, clocks, and instrument dials.\n\nRadium chloride was used in medicine to produce radon gas which in turn was used as a cancer treatment.\n\nThe isotope 223-Ra is currently under investigation for use in medicine as a cancer treatment of bone metastasis.',
      nameOrigin: 'From the Latin word radius meaning ray',
    },
    Ac: {
      name: 'Actinium',
      nameOrigin: 'From the Greek aktis, aktinos, meaning beam or ray',
      history:
        'André-Louis Debierne, a French chemist, discovered actinium in 1899.\n\nHe separated it from pitchblende residues left by Marie and Pierre Curie after they had extracted radium.\n\nFriedrich Oskar Giesel independently discovered actinium in 1902 as a substance being similar to lanthanum.',
      applications:
        'Actinium is used as an active element of radioisotope thermoelectric generators, for example in spacecraft.\n\nThe medium half-life of 227-Ac makes it very convenient radioactive isotope in modeling the slow vertical mixing of oceanic waters.\n\n225-Ac is applied in medicine to produce 213-Bi in a reusable generator or can be used alone as an agent for radiation therapy.\n\n',
      toxicity: 'Actinium is highly radioactive',
      description: 'Actinium glows in the dark with a pale blue light',
    },
    Rf: {
      name: 'Rutherfordium',
      nameOrigin:
        'Named after Ernest Rutherford, the physicist and chemist from New Zealand',
      history:
        'Rutherfordium was reportedly first detected in 1964 at the Joint Institute of Nuclear Research at Dubna.\n\nThe element was synthesized by Albert Ghiorso, Matti Nurmia, James Andrew Harris, Kari Eskola and Pirkko Eskola in 1968 at the University of California, Berkeley.\n\nIt was produced by the bombardment of californium with carbon atoms.',
      applications:
        'Rutherfordium is used for scientific research purposes only.',
      toxicity: 'Rutherfordium is harmful due to its radioactivity',
      description: 'Rutherfordium is the first transactinide element',
    },
    Db: {
      name: 'Dubnium',
      nameOrigin: 'Named after the Russian town of Dubna',
      history:
        'Dubnium was reportedly first discovered in 1968 at the Joint Institute for Nuclear Research at Dubna.\n\nResearchers there bombarded an americium-243 target with neon-22 ions.\n\nIn the same year, a team led by Albert Ghiorso working at the University of California, Berkeley conclusively synthesized the element by bombarding a californium-249 target with nitrogen-15 ions.',
      applications: 'Dubnium is used for scientific research purposes only.',
      toxicity: 'Dubnium is harmful due to its radioactivity',
      description:
        'The Berkeley team proposed the name hahnium for the element',
    },
    Sg: {
      nameOrigin:
        'Named after Glenn Seaborg, American nuclear chemist and Nobel prize winner',
      applications: 'Seaborgium is used for scientific research purposes only.',
      toxicity: 'Seaborgium is harmful due to its radioactivity',
      history:
        'Scientists working at the Joint Institute for Nuclear Research in Dubna, USSR reported their discovery of element 106 in June 1974.\n\nSynthesis was also reported in September 1974 at the Lawrence Berkeley Laboratory by the workers of the Lawrence Berkeley and Livermore Laboratories led by Albert Ghiorso and E. Kenneth Hulet.\n\nIt was produced by collisions of californium-249 with oxygen atoms.',
      description: 'There are 12 known isotopes of seaborgium',
      name: 'Seaborgium',
    },
    Bh: {
      history:
        'Bohrium was first convincingly synthesized in 1981 by a German research team led by Peter Armbruster and Gottfried Münzenberg at the Institute for Heavy Ion Research (Gesellschaft für Schwerionenforschung) in Darmstadt.\n\nThe team bombarded a target of bismuth-209 with accelerated nuclei of chromium-54 to produce 5 atoms of the isotope bohrium-262.',
      applications: 'Bohrium is used for scientific research purposes only.',
      toxicity: 'Bohrium is harmful due to its radioactivity',
      description:
        'The only confirmed example of isomerism in bohrium is in the isotope 262-Bh',
      name: ' Bohrium',
      nameOrigin: 'Named after Niels Bohr, the Danish physicist',
    },
    Hs: {
      nameOrigin: 'From the Latin word Hassias meaning Hess, the German state',
      history:
        'Hassium was first synthesized in 1984 by a German research team led by Peter Armbruster and Gottfried Münzenberg at the Institute for Heavy Ion Research (Gesellschaft für Schwerionenforschung) in Darmstadt.\n\nThe team bombarded a target of lead-208 with accelerated nuclei of iron-58 to produce 3 atoms of the isotope hassium-265.',
      applications: 'Hassium is used for scientific research purposes only.',
      toxicity: 'Hassium is harmful due to its radioactivity',
      description:
        'More than 100 atoms of hassium have been synthesized to date',
      name: 'Hassium',
    },
    Mt: {
      nameOrigin: 'Named after Lise Meitner, the Austrian physicist',
      history:
        'Meitnerium was first synthesized in 1982 by a German research team led by Peter Armbruster and Gottfried Münzenberg at the Institute for Heavy Ion Research (Gesellschaft für Schwerionenforschung) in Darmstadt.\n\nThe team bombarded a target of bismuth-209 with accelerated nuclei of iron-58 and detected a single atom of the isotope meitnerium-266.',
      applications: 'Meitnerium is used for scientific research purposes only.',
      description: 'Meitnerium has 7 isotopes whose half-lives are known',
      toxicity: 'Meitnerium is harmful due to its radioactivity',
      name: 'Meitnerium',
    },
    Ds: {
      name: 'Darmstadtium',
      nameOrigin: 'Named after the German city of Darmstadt',
      history:
        'Darmstadtium was first created in 1994, at the Institute for Heavy Ion Research (Gesellschaft für Schwerionenforschung) in Darmstadt, Germany, by Peter Armbruster and Gottfried Münzenberg, under the direction of Sigurd Hofmann.\n\nThe team bombarded a lead-208 target with accelerated nuclei of nickel-62 and detected a single atom of the isotope darmstadtium-269.',
      applications:
        'Darmstadtium is used for scientific research purposes only.',
      toxicity: 'Darmstadtium is harmful due to its radioactivity',
      description: 'Darmstadtium has no stable or naturally-occurring isotopes',
    },
    Rg: {
      name: 'Roentgenium',
      nameOrigin: 'Named after Wilhelm Conrad Röntgen, the German physicist',
      history:
        'Roentgenium was first synthesized by an international team led by Sigurd Hofmann at the Institute for Heavy Ion Research (Gesellschaft für Schwerionenforschung) in Darmstadt, Germany in 1994.\n\nThe team bombarded a target of bismuth-209 with accelerated nuclei of nickel-64 and detected a single atom of the isotope roentgenium-272.',
      applications:
        'Roentgenium is used for scientific research purposes only.',
      description: 'Roentgenium has no stable or naturally-occurring isotopes',
      toxicity: 'Roentgenium is harmful due to its radioactivity',
    },
    Cn: {
      history:
        'Copernicium was first created on February 9, 1996, at the Institute for Heavy Ion Research (Gesellschaft für Schwerionenforschung) in Darmstadt, Germany, by Sigurd Hofmann, Victor Ninov et al.\n\nThis element was created by firing accelerated zinc-70 nuclei at a target made of lead-208 nuclei in a heavy ion accelerator.\n\nA single atom of copernicium was produced with a mass number of 277.',
      name: 'Copernicium',
      applications:
        'Copernicium is used for scientific research purposes only.',
      description: 'Copernicium has no stable or naturally-occurring isotopes',
      toxicity: 'Copernicium is harmful due to its radioactivity',
      nameOrigin: 'Named after the astronomer Nicolaus Copernicus',
    },
    Nh: {
      name: 'Nihonium',
      history:
        'Nihonium was identified in 2003 as an alpha decay product of element 115, moscovium by a team composed of Russian scientists at Joint Institute for Nuclear Research, Dubna and American scientists at the Lawrence Livermore National Laboratory.\n\nThe Dubna-Livermore collaboration has strengthened their claim for the discovery of nihonium by conducting chemical experiments on the final decay product 268-Db.',
      nameOrigin: 'The name comes from the common Japanese name for Japan',
      description: 'Nihonium is historically known as eka-thallium',
      toxicity: 'Nihonium is harmful due to its radioactivity',
      applications: 'Nihonium is used for scientific research purposes only.',
    },
    Fl: {
      name: 'Flerovium',
      nameOrigin:
        'Named after the founder of the Flerov Laboratory of Nuclear Reactions, the Soviet physicist Georgy Flyorov',
      history:
        'Ununquadium (Uuq) was the temporary IUPAC systematic element name.\n\nIn 1998, a team led by Yuri Oganessian and Vladimir Utyonkov at the Joint Institute for Nuclear Research, Dubna produced flerovium by bombarding plutonium with calcium.\n\nIn an experiment lasting 40 days, 5 x (10 x 18) atoms of calcium to be fired at plutonium to produce a single atom of flerovium.',
      description: 'The longest-lived isotope currently known is 289-Fl',
      toxicity: 'Flerovium is harmful due to its radioactivity',
      applications: 'Flerovium is used for scientific research purposes only.',
    },
    Mc: {
      name: 'Moscovium',
      nameOrigin: 'Named after Moscow Oblast where Dubna is located',
      history:
        'Moscovium was identified in 2004 by a team composed of Russian scientists at the Joint Institute for Nuclear Research in Dubna, and American scientists at the Lawrence Livermore National Laboratory.\n\nThe team reported that they bombarded americium-243 with calcium-48 ions to produce four atoms of moscovium.\n\nThese atoms decayed by emission of alpha-particles to nihonium in approximately 100 milliseconds.',
      description: 'Moscovium is historically known as eka-bismuth',
      toxicity: 'Moscovium is harmful due to its radioactivity',
      applications: 'Moscovium is used for scientific research purposes only.',
    },
    Lv: {
      name: 'Livermorium',
      history:
        'Ununhexium (Uuh) was the temporary IUPAC systematic element name.\n\nLivermorium was identified in 2000 by a team composed of Russian scientists at Joint Institute for Nuclear Research, Dubna and American scientists at the Lawrence Livermore National Laboratory led by Yuri Oganessian and Ken Moody.',
      description: 'Livermorium is historically known as eka-polonium',
      nameOrigin:
        'Named after the Lawrence Livermore National Laboratory, within the city of Livermore, California',
      toxicity: 'Livermorium is harmful due to its radioactivity',
      applications:
        'Livermorium is used for scientific research purposes only.',
    },
    Ts: {
      name: 'Tennessine',
      history:
        'Tennessine was identified in 2010 by a team composed of Russian scientists at Joint Institute for Nuclear Research, Dubna and American scientists at the Lawrence Livermore National Laboratory.\n\nIt was produced by the bombardment of berkelium with calcium.\n\nUnunseptium was the temporary IUPAC systematic element name.',
      description: 'Tennessine is historically known as eka-astatine',
      nameOrigin: 'Named after the region of Tennessee',
      toxicity: 'Tennessine is harmful due to its radioactivity',
      applications: 'Tennessine is used for scientific research purposes only.',
    },
    Og: {
      name: 'Oganesson',
      history:
        'Oganesson was identified in 2002 by a team composed of Russian scientists at Joint Institute for Nuclear Research, Dubna and American scientists at the Lawrence Livermore National Laboratory.\n\nIt was produced by the bombardment of californium with calcium.\n\nUnunoctium was the temporary IUPAC systematic element name.',
      description: 'Oganesson is historically known as eka-radon',
      nameOrigin: 'Named after the Russian nuclear physicist Yuri Oganessian',
      toxicity: 'Oganesson is harmful due to its radioactivity',
      applications: 'Oganesson is used for scientific research purposes only.',
    },
    Ce: {
      name: 'Cerium',
      history:
        'Jöns Jakob Berzelius and Wilhelm Hisinger discovered the element in ceria in 1803 in Sweden.\n\nKlaproth discovered it simultaneously and independently in some tantalum samples in Germany.\n\nCarl Gustaf Mosander, who worked closely with Berzelius, prepared metallic cerium in 1825.',
      applications:
        'Cerium is used in carbon-arc lighting, especially in the motion picture industry.\n\nCerium oxide is an important component of glass polishing powders and phosphors used in screens and fluorescent lamps.\n\nCerium compounds are also used in the manufacture of glass, both as a component and as a decolorizer.',
      description: 'Seawater contains 1.5 parts per trillion of cerium',
      toxicity: 'Cerium is considered to be moderately toxic',
      nameOrigin: 'Cerium was named for the asteroid Ceres',
    },
    Pr: {
      nameOrigin: 'From the Greek word prasios, green, and didymos, twin',
      name: 'Praseodymium',
      history:
        'Praseodymium was first identified in 1885, in Vienna, by the Austrian chemist Carl Auer von Welsbach.\n\nIt was discovered in didymium, a substance incorrectly said by Carl Gustav Mosander to be a new element in 1841.\n\nPure metallic praseodymium was first produced in 1931.',
      applications:
        'Praseodymium is used as an alloying agent with magnesium to create high-strength metals that are used in aircraft engines.\n\nMisch metal, used in making cigarette lighters, contains about 5% praseodymium metal.\n\nPraseodymium is used to make specialized yellow glass goggles for glass blowers and welders.',
      toxicity: 'Praseodymium is considered to be moderately toxic',
      description:
        'Praseodymium is usually stored under a light mineral oil or sealed in glass',
    },
    Nd: {
      name: 'Neodymium',
      description: "Most of the world's neodymium is mined in China",
      nameOrigin: 'From the Greek word neos meaning new, and didymos, twin',
      history:
        'Neodymium was first identified in 1885, in Vienna, by the Austrian chemist Carl Auer von Welsbach.\n\nIt was discovered in didymium, a substance incorrectly said by Carl Gustav Mosander to be a new element in 1841.\n\nPure neodymium metal was isolated in 1925.',
      applications:
        'Neodymium is used to make specialized goggles for glass blowers.\n\nNeodymium magnets appear in products such as microphones, professional loudspeakers, in-ear headphones, guitar and bass guitar pick-ups and computer hard disks.\n\nGlass containing neodymium can be used as a laser material to produce coherent light.',
      toxicity: 'Neodymium is considered to be moderately toxic',
    },
    Pm: {
      name: 'Promethium',
      nameOrigin:
        'Named after the Greek Prometheus, who, according to mythology, stole fire from heaven',
      history:
        'The existence of an element between neodymium and samarium was first predicted by Czech chemist Bohuslav Brauner in 1902.\n\nPromethium was first produced and characterized at Oak Ridge National Laboratory in 1945 by Jacob A. Marinsky, Lawrence E. Glendenin and Charles D. Coryell.\n\nIt was produced by the separation and analysis of the fission products of uranium fuel irradiated in a graphite reactor.',
      applications:
        'Promethium is also used in atomic batteries for spacecraft and guided missiles.\n\nPromethium is also used to measure the thickness of materials by evaluating the amount of radiation from a promethium source that passes through the sample.\n\nIt has possible future uses in portable X-ray sources, and as auxiliary heat or power sources for space probes and satellites.',
      description:
        'Promethium is the only lanthanide that has no stable isotopes',
      toxicity: 'Promethium is harmful due to its radioactivity',
    },
    Sm: {
      name: 'Samarium',
      nameOrigin:
        'From samarskite, a mineral named after Russian mine official, Col. Samarski',
      history:
        'In 1853, Jean Charles Galissard de Marignac discovered samarium when he found lines in mineral spectra.\n\nPaul Émile Lecoq de Boisbaudran isolated a samarium salt in Paris in 1879 from the mineral samarskite and identified a new element in it via sharp optical absorption lines.\n\nThe pure element was produced only in 1901 by Eugène-Anatole Demarçay.',
      applications:
        "Samarium's main use is in samarium-cobalt alloy magnets for headphones, small motors and pickups for some electric guitars.\n\nRadioactive samarium-153 is used to kill cancer cells in the treatment of lung cancer, prostate cancer, breast cancer and osteosarcoma.\n\nSamarium and its compounds are also used as catalyst and chemical reagent.",
      toxicity: 'Samarium is considered to be moderately toxic',
      description:
        'Samarium metal can be produced by reducing the oxide with lanthanum',
    },
    Eu: {
      name: 'Europium',
      nameOrigin: 'Europium was named after Europe',
      applications:
        'Europium is used in the manufacture of fluorescent glass.\n\nIt is also used in the anti-counterfeiting phosphors in Euro banknotes.\n\nEuropium-doped plastic has been used as a laser material.\n\nEuropium isotopes are good neutron absorbers and are used in nuclear reactor control rods.',
      history:
        "Europium was first found by Paul Émile Lecoq de Boisbaudran in 1890.\n\nIn 1896, French chemist Eugène-Antole Demarçay identified spectroscopic lines in ‘samarium' caused by europium.\n\nHe successfully isolated europium in 1901 using repeated crystallizations of samarium magnesium nitrate.",
      toxicity: 'Europium is considered to be mildly toxic',
      description: 'Europium is the most reactive rare earth element',
    },
    Gd: {
      name: 'Gadolinium',
      description:
        'Gadolinium has the highest neutron cross-section among any stable nuclides',
      toxicity: 'Gadolinium is considered to be moderately toxic',
      history:
        'Gadolinium was first detected spectroscopically in 1880 by the Swiss chemist Jean Charles Galissard de Marignac who separated its oxide.\n\nHe observed spectroscopic lines due to gadolinium in samples of gadolinite and in the separate mineral cerite.\n\nThe metal was isolated by Paul Emile Lecoq de Boisbaudran in 1886.',
      applications:
        'Gadolinium is used to make gadolinium yttrium garnets which have microwave applications.\n\nIt is also used in intravenous radiocontrast agents in magnetic resonance imaging (MRI).\n\nGadolinium compounds are used for making green phosphors for color TV tubes, and in manufacturing compact discs.',
      nameOrigin:
        'From gadolinite, a mineral named for Gadolin, a Finnish chemist',
    },
    Tb: {
      applications:
        'Terbium is used in alloys and in the production of electronic devices.\n\nIt is also used as a dopant for materials in solid-state devices and optical fibers.\n\nTerbium oxide is in fluorescent lamps and TV tubes.\n\nThe brilliant fluorescence allows terbium to be used as a probe in biochemistry.',
      history:
        'Terbium was discovered in 1843 by Swedish chemist Carl Gustaf Mosander, who detected it as an impurity in yttria.\n\nUsing ammonium hydroxide he precipitated fractions of different basicity from yttria.\n\nIn these fractions he found that the fraction that was essentially colorless in solution, but gave a brown-tinged oxide was terbium.\n\n',
      description: 'Terbium is soft enough to be cut with a knife',
      name: 'Terbium',
      toxicity: 'Terbium is considered to be moderately toxic',
      nameOrigin: 'Terbium was named after Ytterby, a town in Sweden',
    },
    Dy: {
      name: 'Dysprosium',
      applications:
        'Dysprosium oxide-nickel cermets are used in neutron-absorbing control rods in nuclear reactors.\n\nDysprosium is used in data storage applications such as compact discs and hard discs.\n\nIt is also used in dosimeters for measuring ionizing radiation.\n\nDysprosium iodide and dysprosium bromide are used in high intensity metal-halide lamps.',
      history:
        'French chemist Paul Émile Lecoq de Boisbaudran, while working with holmium oxide, separated dysprosium oxide from it in Paris in 1886.\n\nHis procedure for isolating the dysprosium involved dissolving dysprosium oxide in acid, then adding ammonia to precipitate the hydroxide.\n\nIt was not isolated in pure form until the development of ion exchange techniques in the 1950s.',
      nameOrigin: 'From the Greek word dysprositos, meaning hard to get at',
      description: 'Naturally occurring dysprosium is composed of 7 isotopes',
      toxicity: 'Dysprosium is considered to be moderately toxic',
    },
    Ho: {
      name: 'Holmium',
      history:
        'Holmium was discovered by Swiss chemists Marc Delafontaine and Jacques-Louis Soret in 1878.\n\nThey noticed the aberrant spectrographic absorption bands of the then-unknown element.\n\nLater in 1878, Per Teodor Cleve independently discovered the element while he was working on erbia earth.',
      applications:
        'Holmium is used to create the strongest artificially generated magnetic fields, when placed within high-strength magnets as a magnetic pole piece.\n\nIt is one of the colorants used for cubic zirconia and glass, providing yellow or red coloring.\n\nHolmium isotopes are good neutron absorbers and are used in nuclear reactor control rods.',
      toxicity: 'Holmium is considered to be of low toxicity',
      description:
        'Holmium has the highest magnetic strength of any naturally occurring element',
      nameOrigin: 'From the Latin word Holmia meaning Stockholm',
    },
    Er: {
      name: 'Erbium',
      toxicity: 'Erbium is considered to be moderately toxic',
      description:
        'The highest concentration of erbium in humans is in the bones',
      history:
        'Erbium was discovered in 1843 by Swedish chemist Carl Gustaf Mosander, who detected it as an impurity in yttria.\n\nUsing ammonium hydroxide he precipitated fractions of different basicity from yttria.\n\nIn these fractions he found that the fraction that contained the pink color was erbium.',
      applications:
        'Erbium is used in photographic filters to absorb infrared light.\n\nErbium oxide gives a pink color and has been used as a colorant in glasses and porcelain enamel glazes.\n\nIt is also used in nuclear technology in neutron-absorbing control rods.\n\nErbium is used in alloys especially with vanadium to decrease the hardness of metals.',
      nameOrigin: 'Erbium was named after Ytterby, a town in Sweden',
    },
    Tm: {
      name: 'Thulium',
      history:
        'Thulium was discovered by Swedish chemist Per Teodor Cleve in 1879 by looking for impurities in the oxides of other rare earth elements.\n\nThe first researcher to obtain nearly pure thulium was Charles James, a British expatriate working on a large scale at New Hampshire College in Durham.\n\nHigh-purity thulium oxide was first offered commercially in the late 1950s.',
      applications:
        'Thulium is used to dope yttrium aluminum garnets used in lasers.\n\nIt has also been used in high-temperature superconductors similarly to yttrium.\n\nThulium has use in ferrites, ceramic magnetic materials that are used in microwave equipment.\n\nThulium is used in euro banknotes for its blue fluorescence under UV light to defeat counterfeiters.',
      toxicity: 'Thulium is considered to be non-toxic',
      description: 'Thulium ore occurs most commonly in China',
      nameOrigin: 'Named after Thule, the earliest name for Scandinavia',
    },
    Yb: {
      name: 'Ytterbium',
      nameOrigin: 'Ytterbium was named after Ytterby, a town in Sweden',
      history:
        'Ytterbium was discovered by the Swiss chemist Jean Charles Galissard de Marignac in the year 1878.\n\nIn 1907, in Paris, George Urbain separated ytterbia into two constituents.\n\nYtterbium metal was first made in 1937 by Klemm and Bonner by heating ytterbium chloride and potassium together.\n\nA relatively pure sample of the metal was obtained only in 1953.',
      applications:
        'Ytterbium fiber laser amplifiers are used in marking and engraving.\n\nYtterbium compounds are also used as catalysts in the organic chemical industry.\n\nYtterbium can be used as a dopant to help improve the grain refinement, strength, and other mechanical properties of stainless steel.',
      toxicity: 'Ytterbium is considered to be moderately toxic',
      description: 'Ytterbium is recovered commercially from monazite sand',
    },
    Lu: {
      nameOrigin: 'Lutetia is the ancient name for Paris',
      history:
        'French chemist Georges Urbain successfully separated lutetium from ytterbia in 1907 in Paris.\n\nAustrian scientist Carl Auer von Welsbach and American chemist Charles James also succeeded in isolating lutetium independently in the same year.\n\nPure lutetium metal was first produced in 1953.',
      applications:
        'Lutetium oxide is used to make catalysts for cracking hydrocarbons in the petrochemical industry.\n\nLutetium aluminum garnet has been proposed for use as a lens material in high refractive index immersion lithography.\n\nLutetium is used as a phosphor in LED light bulbs.',
      toxicity: 'Lutetium is considered to be non toxic',
      description:
        'Lutetium was the last natural rare earth element to be discovered',
      name: 'Lutetium',
    },
    Th: {
      name: 'Thorium',
      nameOrigin: 'Named after Thor, Scandinavian god of war',
      history:
        'Thorium was discovered by Jöns Jacob Berzelius in 1828, in Stockholm, Sweden.\n\nThorium was first observed to be radioactive in 1898, independently, by Polish-French physicist Marie Curie and German chemist Gerhard Carl Schmidt.\n\nThe crystal bar process was discovered by Anton Eduard van Arkel and Jan Hendrik de Boer in 1925 to produce high-purity metallic thorium.',
      applications:
        'Thorium is used to coat tungsten filaments in light bulbs.\n\nIt is also used in its oxide form in gas tungsten arc welding to increase the high-temperature strength of tungsten electrodes and improve arc stability.\n\nThorium-magnesium alloys are used in the aerospace industry for aircraft engines.',
      description:
        'Thorium fuel research is continuing in several countries including the USA and India',
      toxicity: 'Thorium is highly radioactive',
    },
    Pa: {
      name: 'Protactinium',
      description:
        'Protactinium is one of the rarest and most expensive naturally occurring elements',
      nameOrigin: 'From the Greek protos meaning first',
      history:
        'In 1900, William Crookes isolated protactinium as an intensely radioactive material from uranium\n\nProtactinium was first identified in 1913 by Kasimir Fajans and Oswald Helmuth Göhring in Germany.\n\nA more stable isotope of protactinium was discovered in 1917 by Otto Hahn and Lise Meitner at the Kaiser Wilhelm Institute in Berlin.',
      applications:
        'Owing to its scarcity, high radioactivity and high toxicity, there are currently no uses for protactinium outside of scientific research.\n\nWith the advent of highly sensitive mass spectrometers, an application of 231-Pa as a tracer in geology and paleoceanography has become possible.\n\nProtactinium-231 combined with the thorium-230 can be used to date marine sediments.',
      toxicity: 'Protactinium is toxic and highly radioactive',
    },
    U: {
      name: 'Uranium',
      nameOrigin: 'Named after the planet Uranus',
      history:
        'Uranium was discovered in 1789 by the German chemist Martin Heinrich Klaproth.\n\nIn 1841, Eugène-Melchior Péligot isolated the first sample of uranium metal by heating uranium tetrachloride with potassium.\n\nAntoine Henri Becquerel discovered radioactivity by using uranium in 1896.',
      applications:
        'Uranium is used as fuel for nuclear power plants.\n\nUranium is used as a colorant in uranium glass, producing orange-red to lemon yellow hues.\n\nIt was also used for tinting and shading in early photography.\n\nThe major application of uranium in the military sector is in high-density penetrators.',
      toxicity: 'Uranium is toxic and highly radioactive',
      description:
        'Uranium-235 was the first isotope that was found to be fissile',
    },
    Np: {
      name: 'Neptunium',
      nameOrigin: 'Named after the planet Neptune',
      history:
        'Neptunium was the first synthetic transuranium element of the actinide series to be discovered.\n\nNeptunium was first produced by Edwin McMillan and Philip H. Abelson in 1940 at Berkeley Radiation Laboratory of the University of California.\n\nThe team produced the neptunium isotope 239-Np by bombarding uranium with slow moving neutrons.',
      applications:
        'Neptunium is used mainly for research purposes.\n\nWhen bombarded with neutrons 237-Np is used to produce 238-Pu which is used for spacecraft generators and terrestrial navigation beacons.\n\n237-Np is used in devices for detecting high-energy neutrons.',
      toxicity: 'Neptunium is harmful due to its radioactivity',
      description:
        'Neptunium is obtained as a by-product from nuclear reactors',
    },
    Pu: {
      name: 'Plutonium',
      history:
        'Plutonium was first produced in 1940 by Glenn T. Seaborg, Edwin M. McMillan, Joseph W. Kennedy and Arthur Wahl.\n\nPlutonium-238 was produced by deuteron bombardment of uranium-238 in the 60-inch cyclotron at the University of California, Berkeley.\n\nThe Berkeley team made neptunium-238 which decayed to plutonium-238.',
      applications:
        'The isotope plutonium-239 is a key fissile component in nuclear weapons, due to its ease of fission and availability.\n\nPlutonium-238 has also been used successfully to power artificial heart pacemakers, to reduce the risk of repeated surgery.\n\nPlutonium-238 mixed with beryllium is used to generate neutrons for research purposes.',
      toxicity: 'Plutonium is harmful due to its radioactivity',
      description:
        'The atomic bomb dropped on Nagasaki, Japan in 1945 had a plutonium core',
      nameOrigin: 'Named after the planet Pluto',
    },
    Am: {
      nameOrigin: 'Named after America',
      name: 'Americium',
      description:
        'Americium often enters landfills from discarded smoke detectors',
      history:
        'Americium-241 was first identified in 1944 by Glenn T. Seaborg, Ralph A. James, Leon O. Morgan and Albert Ghiorso at the metallurgical laboratory at the University of Chicago.\n\nIt was produced by irradiating plutonium with neutrons during the Manhattan Project.\n\nAmericium was first isolated as a pure compound by Burris Cunningham in 1945, at the University of Chicago.',
      applications:
        'Americium is used in commercial ionization chamber smoke detectors, as well as in neutron sources and industrial gauges.\n\nAmericium-241 has been used as a portable source of both gamma rays and alpha particles for a number of medical and industrial uses.\n\nIt is also used as a target material in nuclear research to make even heavier elements.',
      toxicity: 'Americium is harmful due to its radioactivity',
    },
    Cm: {
      name: 'Curium',
      nameOrigin:
        'Curium is named after Madame Curie and her husband Pierre Curie',
      history:
        'Curium was discovered by Glenn T. Seaborg, Ralph A. James and Albert Ghiorso in 1944 at the University of California, Berkeley.\n\nIt was produced by bombarding plutonium with alpha particles during the Manhattan Project.\n\nCurium metal was produced only in 1951 by reduction of curium fluoride with barium.',
      description:
        'Curium accumulates in the bones, lungs and liver, where it promotes cancer',
      toxicity: 'Curium is harmful due to its radioactivity',
      applications:
        'Curium is mainly used for scientific research purposes.\n\nCurium is a common starting material for the production of higher transuranic elements and transactinides.\n\nThe most practical application of 244-Cm is as α-particle source in the alpha particle X-ray spectrometers (APXS).',
    },
    Bk: {
      name: 'Berkelium',
      nameOrigin: 'Named after Berkeley, California, the city of its discovery',
      history:
        'Berkelium was discovered by Glenn T. Seaborg, Albert Ghiorso and Stanley G. Thompson in 1949 at the University of California, Berkeley.\n\nIt was produced by the bombardment of americium with alpha particles.\n\nBerkelium was isolated in greater quantities for the first time by Burris Cunningham and Stanley Thompson in 1958.',
      applications:
        'Berkelium is mainly used for scientific research purposes.\n\nBerkelium-249 is a common target nuclide to prepare still heavier transuranic elements and transactinides, such as lawrencium, rutherfordium and bohrium.\n\nIt is also useful as a source of the isotope californium-249.',
      description:
        'Just over one gram of berkelium has been produced in the United States since 1967',
      toxicity: 'Berkelium is harmful due to its radioactivity',
    },
    Cf: {
      name: 'Californium',
      applications:
        'Californium is used as a portable neutron source for discovery of metals such as gold or silver by on-the-spot activation analysis.\n\nNeutrons from californium are employed as a treatment of certain cervical and brain cancers where other radiation therapy is ineffective.\n\nNeutron moisture gauges use californium-252 to find water and petroleum layers in oil wells.',
      history:
        'Californium was discovered by Stanley G. Thompson, Kenneth Street, Jr., Albert Ghiorso and Glenn T. Seaborg in 1950 at the University of California, Berkeley.\n\nIt was produced by the bombardment of curium with alpha particles.\n\nCalifornium was isolated in macro quantities for the first time by Burris Cunningham and Stanley Thompson in 1958.',
      description:
        'Californium is produced in nuclear reactors and particle accelerators',
      toxicity: 'Californium is harmful due to its radioactivity',
      nameOrigin: 'Named after California and the University of California',
    },
    Es: {
      name: 'Einsteinium',
      history:
        'Einsteinium was discovered as a component of the debris of the first hydrogen bomb explosion in 1952.\n\nIt was identified by Albert Ghiorso and co-workers at the University of California, Berkeley in collaboration with the Argonne and Los Alamos National Laboratories, in the fallout from the Ivy Mike nuclear test.\n\nThe new element was produced by the nuclear explosion in miniscule amounts by the addition of 15 neutrons to uranium-238.',
      applications:
        'Einsteinium is mainly used for scientific research purposes.\n\nThe rare isotope einsteinium-254 is favored for production of ultraheavy elements.\n\nEinsteinium-254 was used as the calibration marker in the chemical analysis spectrometer of the Surveyor 5 lunar probe.',
      toxicity: 'Einsteinium is harmful due to its radioactivity',
      description:
        'Einsteinium is the first divalent metal in the actinide series',
      nameOrigin: 'Named after Albert Einstein',
    },
    Fm: {
      name: 'Fermium',
      history:
        'Fermium was discovered as a component of the debris of the first hydrogen bomb explosion in 1952.\n\nIt was identified by Albert Ghiorso and co-workers at the University of California, Berkeley in collaboration with the Argonne and Los Alamos National Laboratories, in the fallout from the Ivy Mike nuclear test.\n\nThe new element was produced by the nuclear fission of 17 neutrons with uranium-238.',
      nameOrigin:
        'Named after Nobel laureate Enrico Fermi, one of the pioneers of nuclear physics',
      applications: 'Fermium is used for scientific research purposes only.',
      description: 'Sixteen isotopes of fermium are known to exist',
      toxicity: 'Fermium is harmful due to its radioactivity',
    },
    Md: {
      name: 'Mendelevium',
      nameOrigin:
        'Named after Dmitri Mendeleev, who created the Periodic Table',
      history:
        'Mendelevium was discovered by Albert Ghiorso, Glenn T. Seaborg, Gregory R. Choppin, Bernard G. Harvey and Stanley G. Thompson in 1955 at the University of California, Berkeley.\n\nIt was produced by the bombardment of einsteinium with helium.\n\nMendelevium was identified by chemical analysis in an ion exchange experiment.',
      applications:
        'Mendelevium is used for scientific research purposes only.',
      toxicity: 'Mendelevium is harmful due to its radioactivity',
      description:
        'Mendelevium was the first element to be produced one atom at a time',
    },
    No: {
      name: 'Nobelium',
      applications: 'Nobelium is used for scientific research purposes only.',
      nameOrigin:
        'Named after of Alfred Nobel, Swedish chemist who discovered dynamite and founder of the Nobel Prizes',
      history:
        'Nobelium was discovered by Albert Ghiorso, Glenn T. Seaborg, John R. Walton and Torbjørn Sikkeland in 1958 at the University of California, Berkeley.\n\nIt was produced by the bombardment of curium with carbon atoms.\n\nIt was correctly identified in 1966 by scientists at the Flerov Laboratory of Nuclear Reactions in Dubna, Soviet Union.',
      description: 'Nobelium is a divalent ion in aqueous solution',
      toxicity: 'Nobelium is harmful due to its radioactivity',
    },
    Lr: {
      name: 'Lawrencium',
      nameOrigin: 'Named after Ernest O. Lawrence, inventor of the cyclotron',
      history:
        'Lawrencium was discovered by Albert Ghiorso, Torbjørn Sikkeland, Almon Larsh and Robert M. Latimer in 1961 at the University of California, Berkeley.\n\nIt was produced by the bombardment of californium with boron atoms.\n\nLawrencium was the last member of the actinide series to be discovered.',
      description: 'Lawrencium is a trivalent ion in aqueous solution',
      toxicity: 'Lawrencium is harmful due to its radioactivity',
      applications: 'Lawrencium is used for scientific research purposes only.',
    },
  },
});
