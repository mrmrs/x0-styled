const  containerWidth = '60rem'

const breakpoints = [
  '36em', '48em', '64em'
]

const  borders = [
  '0px solid',
  '1px solid',
  '2px solid'
]

const borderWidths = [
  0,1,2
]

const radii = [
  0, 3, 5
]


const measures = [
  '20em', '30em', '34em'
]

const space = [
  0, 2, 4, 8, 16, 32, 64, 128, 256, 512
]

const fontSizes = [
  12, 14, 16, 24, 32, 48, 64, 96
]

const fontFamily = {
  serif: 'serif',
  sansSerif: 'sans-serif',
  mono: 'monaco'
}

const lineHeights = [1, 1,25, 1.5]

const letterSpacings = [ 
  '0.05em', 
  '0.075em', 
  '0.1em' 
]

const colors = {
  dark: "#393f49",
  gray: [
    "#f8f9fa",
    "#ebedef",
    "#dde0e5",
    "#ced3d9",
    "#bec4cc",
    "#acb3bd",
    "#97a0ad",
    "#7e8a9a",
    "#616d7c",
    "#393f49"
  ],
  blue: [
    "#e5f0fe",
    "#c9dffd",
    "#a8ccfc",
    "#82b6fa",
    "#5099f9",
    "#066ef7",
    "#0563de",
    "#0456c2",
    "#0347a0",
    "#023272"
  ],
  indigo: [
    "#ecebfe",
    "#d7d4fd",
    "#bebafc",
    "#a19afb",
    "#786ffa",
    "#1606f7",
    "#1305df",
    "#1104c3",
    "#0e03a2",
    "#0a0274"
  ],
  violet: [
    "#f5e9fe",
    "#ead2fd",
    "#deb6fc",
    "#cf94fb",
    "#ba67fa",
    "#8f06f7",
    "#8105df",
    "#7104c3",
    "#5d03a2",
    "#430274"
  ],
  fuschia: [
    "#feeafd",
    "#fdd4fa",
    "#fcbaf8",
    "#fb9af5",
    "#fa6ef1",
    "#f706e7",
    "#df05d1",
    "#c404b8",
    "#a30399",
    "#76026f"
  ],
  pink: [
    "#feeaf3",
    "#fdd3e5",
    "#fcb9d6",
    "#fb98c3",
    "#fa6ca9",
    "#f7066e",
    "#df0563",
    "#c40457",
    "#a30348",
    "#760234"
  ],
  red: [
    "#feebea",
    "#fdd5d2",
    "#fcbbb7",
    "#fb9c96",
    "#fa7269",
    "#f71606",
    "#df1305",
    "#c41104",
    "#a30e03",
    "#750a02"
  ],
  orange: [
    "#fef1e1",
    "#fde3c1",
    "#fbd39d",
    "#fac074",
    "#f8aa43",
    "#f78f06",
    "#df8105",
    "#c37104",
    "#a25e03",
    "#744302"
  ],
  yellow: [
    "#fcfee3",
    "#f9fdc4",
    "#f5fba0",
    "#f1fa78",
    "#edf946",
    "#e7f706",
    "#d1df05",
    "#b8c404",
    "#99a403",
    "#6f7702"
  ],
  lime: [
    "#effee4",
    "#ddfdc6",
    "#cafca4",
    "#b2fa7c",
    "#96f94a",
    "#6ef706",
    "#63df05",
    "#57c404",
    "#48a303",
    "#357702"
  ],
  green: [
    "#e9feea",
    "#d0fdd3",
    "#b4fcb9",
    "#92fb99",
    "#63fa6d",
    "#06f716",
    "#05df13",
    "#04c411",
    "#03a40e",
    "#02770a"
  ],
  teal: [
    "#e7fef4",
    "#cdfde8",
    "#affcdb",
    "#8bfbcb",
    "#5bf9b5",
    "#06f78f",
    "#05df81",
    "#04c471",
    "#03a45e",
    "#027745"
  ],
  cyan: [
    "#e6fcfe",
    "#c9f9fd",
    "#a9f6fc",
    "#83f3fb",
    "#51eef9",
    "#06e7f7",
    "#05d1df",
    "#04b8c4",
    "#0399a3",
    "#026f76"
  ],
  black: [
    'black',
    'rgba(0,0,0,.8)',
    'rgba(0,0,0,.6)',
    'rgba(0,0,0,.4)',
    'rgba(0,0,0,.2)',
    'rgba(0,0,0,.1)',
    'rgba(0,0,0,.05)',
    'rgba(0,0,0,.025)',
    'rgba(0,0,0,.0125)',
  ],
  white: [
    '#fff',
    'rgba(255,255,255,.8)',
    'rgba(255,255,255,.6)',
    'rgba(255,255,255,.4)',
    'rgba(255,255,255,.2)',
    'rgba(255,255,255,.1)',
    'rgba(255,255,255,.05)',
    'rgba(255,255,255,.025)',
    'rgba(255,255,255,.0125)',
  ]
}

const textStyles = {
  caps: {
    textTransform: 'uppercase',
    letterSpacing: '0.2em'
  }
}

const colorStyles = {
  error: {
    color: 'red.9',
    backgroundColor: 'red.4',
  },
  success: {
    color: 'green.9',
    backgroundColor: 'green.4',
  },
  warning: {
    color: 'orange.9',
    backgroundColor: 'orange.4',
  },
}

const theme = {
  containerWidth,
  breakpoints,
  borders,
  borderWidths,
  radii,
  colors,
  space,
  fontSizes,
  fontFamily,
  lineHeights,
  letterSpacings,
  measures,
  textStyles,
  colorStyles,
}

export default theme
