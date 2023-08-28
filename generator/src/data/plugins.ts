import type {Plugin} from './types';

export const plugins: Plugin[] = [
  {
    name: 'ADLplug',
    url: 'https://github.com/jpcima/ADLplug',
    description: 'FM Chip Synthesizer — OPL & OPN',
    type: 'Instrument',
    framework: 'JUCE',
  },
  {
    name: 'Airwindows',
    url: 'https://github.com/airwindows/airwindows',
    description: 'Various small and experimental effect plugins',
    type: 'Effect',
  },
  {
    name: 'ampli-Fe',
    url: 'https://github.com/antonok-edm/ampli-Fe',
    description: 'Cross-platform VST2 plugin written in Rust',
    type: 'Effect',
    framework: 'Rust VST',
  },
  {
    name: 'amsynth',
    url: 'https://github.com/amsynth/amsynth',
    description: 'Analog-modelling (virtual analog) synthesizer',
    type: 'Instrument',
    framework: 'GTK',
  },
  {
    name: 'andes',
    url: 'https://github.com/artfwo/andes',
    description: 'Sound synthesiser plugin based on Perlin noise',
    type: 'Instrument',
    framework: 'JUCE',
  },
  {
    name: 'Argotlunar',
    url: 'https://github.com/mourednik/argotlunar',
    description: 'Real-time delay-line granulator',
    type: 'Effect',
    framework: 'JUCE',
  },
  {
    name: 'Audio Effects',
    url: 'https://github.com/juandagilc/Audio-Effects',
    description:
      'Plugins implemented from the explanations in the book “Audio Effects: Theory, Implementation and Application”',
    type: 'Effect',
    framework: 'JUCE',
  },
  {
    name: 'Bespoke',
    url: 'https://github.com/awwbees/BespokeSynth',
    description: 'Node-based modular synth with live coding',
    type: 'Instrument',
    framework: 'JUCE',
  },
  {
    name: 'BinAural VST',
    url: 'https://github.com/twoz/binaural-vst',
    description:
      'Mono-to-stereo plugin that positions sound in a 3D space using Head-Related Transfer Functions',
    type: 'Effect',
    framework: 'JUCE',
  },
  {
    name: 'BlackBird',
    url: 'https://khrykin.github.io/BlackBird',
    description: 'Analog-inspired software synth with its own voice',
    type: 'Instrument',
    framework: 'JUCE',
  },
  {
    name: 'C1Bitcrusher',
    url: 'https://github.com/datajake1999/C1Bitcrusher',
    description: 'Experimental and accurate bit reduction',
    type: 'Effect',
  },
  {
    name: 'Calf Studio Gear',
    url: 'https://github.com/calf-studio-gear/calf',
    description: 'Many LV2 and Jack audio plug-ins',
    type: 'Effect',
    framework: 'GTK',
  },
  {
    name: 'Cardinal',
    url: 'https://github.com/DISTRHO/Cardinal/',
    description: 'Virtual modular synthesizer plugin',
    type: 'Instrument',
    framework: 'DPF',
  },
  {
    name: 'CHOW',
    url: 'https://github.com/jatinchowdhury18/CHOW',
    description: 'Maximally truculent distortion effect',
    type: 'Effect',
    framework: 'JUCE',
  },
  {
    name: 'Cloud Seed',
    url: 'https://github.com/ValdemarOrn/CloudSeed',
    description:
      'Algorithmic reverb for emulating huge, endless spaces and modulated echoes',
    type: 'Effect',
  },
  {
    name: 'Cocoa Delay',
    url: 'https://github.com/tesselode/cocoa-delay',
    description: 'Warm and lively delay',
    type: 'Effect',
    framework: 'WDL-OL',
  },
  {
    name: 'Convolver',
    url: 'https://github.com/teragonaudio/Convolver',
    description: 'Impulse-response reverb',
    type: 'Effect',
    framework: 'JUCE', // +VSTGUI // TODO: add ability to add multiple frameworks
  },
  {
    name: 'cStop',
    url: 'https://github.com/calgoheen/cStop',
    description: 'Tape stop',
    type: 'Effect',
    framework: 'JUCE',
  },
];
