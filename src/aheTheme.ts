import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin'

export const aheTheme: CustomThemeConfig = {
	name: 'aheTheme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Noto Sans`,
		'--theme-font-family-heading': `Jura`,
		'--theme-font-color-base': 'var(--color-surface-900)',
		'--theme-font-color-dark': 'var(--color-primary-50)',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '2px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #46c62f
		'--color-primary-50': '227 246 224', // #e3f6e0
		'--color-primary-100': '218 244 213', // #daf4d5
		'--color-primary-200': '209 241 203', // #d1f1cb
		'--color-primary-300': '181 232 172', // #b5e8ac
		'--color-primary-400': '126 215 109', // #7ed76d
		'--color-primary-500': '70 198 47', // #46c62f
		'--color-primary-600': '63 178 42', // #3fb22a
		'--color-primary-700': '53 149 35', // #359523
		'--color-primary-800': '42 119 28', // #2a771c
		'--color-primary-900': '34 97 23', // #226117
		// secondary | #1a9fff
		'--color-secondary-50': '221 241 255', // #ddf1ff
		'--color-secondary-100': '209 236 255', // #d1ecff
		'--color-secondary-200': '198 231 255', // #c6e7ff
		'--color-secondary-300': '163 217 255', // #a3d9ff
		'--color-secondary-400': '95 188 255', // #5fbcff
		'--color-secondary-500': '26 159 255', // #1a9fff
		'--color-secondary-600': '23 143 230', // #178fe6
		'--color-secondary-700': '20 119 191', // #1477bf
		'--color-secondary-800': '16 95 153', // #105f99
		'--color-secondary-900': '13 78 125', // #0d4e7d
		// tertiary | #c6462f
		'--color-tertiary-50': '246 227 224', // #f6e3e0
		'--color-tertiary-100': '244 218 213', // #f4dad5
		'--color-tertiary-200': '241 209 203', // #f1d1cb
		'--color-tertiary-300': '232 181 172', // #e8b5ac
		'--color-tertiary-400': '215 126 109', // #d77e6d
		'--color-tertiary-500': '198 70 47', // #c6462f
		'--color-tertiary-600': '178 63 42', // #b23f2a
		'--color-tertiary-700': '149 53 35', // #953523
		'--color-tertiary-800': '119 42 28', // #772a1c
		'--color-tertiary-900': '97 34 23', // #612217
		// success | #46c62f
		'--color-success-50': '227 246 224', // #e3f6e0
		'--color-success-100': '218 244 213', // #daf4d5
		'--color-success-200': '209 241 203', // #d1f1cb
		'--color-success-300': '181 232 172', // #b5e8ac
		'--color-success-400': '126 215 109', // #7ed76d
		'--color-success-500': '70 198 47', // #46c62f
		'--color-success-600': '63 178 42', // #3fb22a
		'--color-success-700': '53 149 35', // #359523
		'--color-success-800': '42 119 28', // #2a771c
		'--color-success-900': '34 97 23', // #226117
		// warning | #B9A074
		'--color-warning-50': '245 241 234', // #f5f1ea
		'--color-warning-100': '241 236 227', // #f1ece3
		'--color-warning-200': '238 231 220', // #eee7dc
		'--color-warning-300': '227 217 199', // #e3d9c7
		'--color-warning-400': '206 189 158', // #cebd9e
		'--color-warning-500': '185 160 116', // #B9A074
		'--color-warning-600': '167 144 104', // #a79068
		'--color-warning-700': '139 120 87', // #8b7857
		'--color-warning-800': '111 96 70', // #6f6046
		'--color-warning-900': '91 78 57', // #5b4e39
		// error | #A34C25
		'--color-error-50': '241 228 222', // #f1e4de
		'--color-error-100': '237 219 211', // #eddbd3
		'--color-error-200': '232 210 201', // #e8d2c9
		'--color-error-300': '218 183 168', // #dab7a8
		'--color-error-400': '191 130 102', // #bf8266
		'--color-error-500': '163 76 37', // #A34C25
		'--color-error-600': '147 68 33', // #934421
		'--color-error-700': '122 57 28', // #7a391c
		'--color-error-800': '98 46 22', // #622e16
		'--color-error-900': '80 37 18', // #502512
		// surface | #171d25
		'--color-surface-50': '220 221 222', // #dcddde
		'--color-surface-100': '209 210 211', // #d1d2d3
		'--color-surface-200': '197 199 201', // #c5c7c9
		'--color-surface-300': '162 165 168', // #a2a5a8
		'--color-surface-400': '93 97 102', // #405877
		'--color-surface-500': '23 29 37', // #171d25
		'--color-surface-600': '21 26 33', // #151a21
		'--color-surface-700': '17 22 28', // #11161c
		'--color-surface-800': '14 17 22', // #0e1116
		'--color-surface-900': '11 14 18' // #0b0e12
	}
}
