import { swatch, fileIcon, ai, logoShirt, fullShirt, download } from '../assets';
import {StateType} from '../store'

type EditorTab = {
  name: string;
  icon: string;
};

type FilterTab = {
  name: string;
  icon: string;
};

type DecalType = {
  [key: string]: {
    stateProperty: keyof StateType;
    filterTab: 'logoShirt' | 'fullShirt';
  };
};

export const EditorTabs: EditorTab[] = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
  {
    name: "download",
    icon: download,
  }
];

export const FilterTabs: FilterTab[] = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "fullShirt",
    icon: fullShirt,
  },
];

export const DecalTypes: DecalType = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "fullShirt",
  },
};
