/*!
 * This example implements is _stealed_ from:
 * - Tailwind CSS Grid System: https://tailwindcss.com/docs/grid-*
 *
 * NOTE: This is just a cheap copy of tailwindcss utility, and also not using *any* tailwindcss core code.
 *
 * NOTE: Use tailwindcss instead for more features
 */

const property = {
  "grid-t-col":"gridTemplateColumns",
  "grid-t-row":"gridTemplateRows",
  'grid-cols': {
    property: 'gridTemplateColumns',
    value: 'repeat({0}, minmax(0, 1fr))'
  },
  'grid-rows': {
    property: 'gridTemplateRows',
    value: 'repeat({0}, minmax(0, 1fr))'
  },
  'col-start': 'gridColumnStart',
  'col-end': 'gridColumnEnd',
  'row-start': 'gridRowStart',
  'row-end': 'gridRowEnd',
  'col-span': {
    property: 'gridColumn',
    value: 'span {0} / span {0}'
  },
  'row-span': {
    property: 'gridRow',
    value: 'span {0} / span {0}'
  }
}

const aliases = {
  grid: '[display]-grid',
  'grid-cols-none': '[gridTemplateColumns]-none',
  'grid-rows-none': '[gridTemplateColumns]-none',
  'col-span-full': '[gridColumn]-[1_/_-1]]'
}
