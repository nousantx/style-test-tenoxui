/*!
 * This example implements is _stealed_ from:
 * - Tailwind CSS Box Shadow utilities: https://tailwindcss.com/docs/box-shadow
 * - Tailwind CSS Ring utilities: https://tailwindcss.com/docs/ring-width
 *
 * NOTE: This is a custom implementation and doesn't use Tailwind CSS directly.
 * NOTE: Use tailwindcss instead for more features
 */

// To use this implementation, put this inside the highest node of your element's -
// class to set default styles for ring. (html or body tags)
// class='[--ring-offset]-[0_0_0_0_transparent] [--ring-offset-width]-0px [--ring-color]-[0_0_0] [--ring-offset-color]-[0_0_0]'

const property = {
  shadow: '--shadow-color',
  ring: '--ring-color',
  'ring-offset': '--ring-offset-color'
}

const classes = {
  '--ring-offset-width': {
    'ring-offset-0': '0px',
    'ring-offset-1': '1px',
    'ring-offset-2': '2px',
    'ring-offset-4': '4px',
    'ring-offset-8': '8px'
  },
  '--ring-offset': {
    'ring-offset-0': '0 0 0 var(--ring-offset-width) rgb(var(--ring-offset-color, 0 0 0))',
    'ring-offset-1': '0 0 0 var(--ring-offset-width) rgb(var(--ring-offset-color, 0 0 0))',
    'ring-offset-2': '0 0 0 var(--ring-offset-width) rgb(var(--ring-offset-color, 0 0 0))',
    'ring-offset-4': '0 0 0 var(--ring-offset-width) rgb(var(--ring-offset-color, 0 0 0))',
    'ring-offset-8': '0 0 0 var(--ring-offset-width) rgb(var(--ring-offset-color, 0 0 0))'
  },
  boxShadow: {
    // shadow
    'shadow-sm': '0 1px 2px 0 rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.05))',
    shadow:
      '0 1px 3px 0 rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1)), 0 1px 2px -1px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1))',
    'shadow-md':
      '0 4px 6px -1px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1)), 0 2px 4px -2px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1))',
    'shadow-lg':
      '0 10px 15px -3px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1)), 0 4px 6px -4px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1))',
    'shadow-xl':
      '0 20px 25px -5px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1)), 0 8px 10px -6px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1))',
    'shadow-2xl': '0 25px 50px -12px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.25))',
    'shadow-inner': 'inset 0 2px 4px 0 rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.05))',
    'shadow-none': '0 0 #0000',
    // ring
    'ring-0':
      'var(--ring-offset), 0 0 0 calc(0px + var(--ring-offset-width)) rgb(var(--ring-color, 0 0 0))',
    'ring-1':
      'var(--ring-offset), 0 0 0 calc(1px + var(--ring-offset-width)) rgb(var(--ring-color, 0 0 0))',
    'ring-2':
      'var(--ring-offset), 0 0 0 calc(2px + var(--ring-offset-width)) rgb(var(--ring-color, 0 0 0))',
    ring: 'var(--ring-offset), 0 0 0 calc(3px + var(--ring-offset-width)) rgb(var(--ring-color, 0 0 0))',
    'ring-4':
      'var(--ring-offset), 0 0 0 calc(4px + var(--ring-offset-width)) rgb(var(--ring-color, 0 0 0))',
    'ring-8':
      'var(--ring-offset), 0 0 0 calc(8px + var(--ring-offset-width)) rgb(var(--ring-color, 0 0 0))'
  }
}
