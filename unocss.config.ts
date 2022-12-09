import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', `
      transition
      px-4
      py-1
      rounded
      inline-block
      bg-green-100
      text-green-500
      hover:text-green-700
      hover:bg-green-200
      cursor-pointer
      disabled:cursor-not-allowed
      disabled:bg-gray-3
      disabled:opacity-50
      disabled:text-gray-400
    `],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        'sans': 'Roboto',
        'sans-quicksand': 'Quicksand',
        'sans-lato': 'Lato',
        'serif': 'DM Serif Display',
        'mono': 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
