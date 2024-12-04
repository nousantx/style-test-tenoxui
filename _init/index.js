const useConfig = ({ property, values, classes, aliases }) => {
  return __nsx_styler.createConfig({
    property: {
      ...property,
      bg: 'background',
      p: 'padding',
      br: 'borderRadius',
      tr: 'transition',
      box: ['width', 'height']
    },
    color: {
      red: '#e63b3b',
      blue: '#3b75e6',
      green: '#3af12d',
      yellow: '#e6d93b',
      purple: '#bc32f1',
      primary: '#32f1db'
    },
    classes,
    values,
    aliases,
    breakpoints: [
      { name: 'max-sm', max: 640 },
      { name: 'sm', min: 640 },
      { name: 'max-md', max: 767.9 },
      { name: 'md', min: 768 },
      { name: 'max-lg', max: 1023.9 },
      { name: 'lg', min: 1024 },
      { name: 'max-xl', max: 1279.9 },
      { name: 'xl', min: 1280 },
      { name: 'max-2xl', max: 1535.9 },
      { name: '2xl', min: 1536 }
    ]
  })
}
