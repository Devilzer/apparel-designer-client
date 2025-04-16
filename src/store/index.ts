import {proxy} from 'valtio';

export type StateType = {
  home: boolean;
  color: string;
  isLogoTexture: boolean;
  isFullTexture: boolean;
  logoDecal: string;
  fullDecal: string;
  activeEditorTab: string;
  count: number;
  isCustomizing: boolean;
  fileName: string;
  readOnly: boolean;
};

const state = proxy<StateType>({
    home: true,
    color: '#195699',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './cat.png',
    fullDecal: './nightSky.webp',
    // for the canvas
    activeEditorTab: 'shapes',
    // for the customizer
    count: 0,
    isCustomizing: false,
    fileName: 'custom-tshirt',
    readOnly: false,
})

  export default state;