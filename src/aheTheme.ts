import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin'

export const aheTheme: CustomThemeConfig = {
	name: 'aheTheme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Nunito Sans`,
		'--theme-font-family-heading': `Jura`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #E66B6B
		'--color-primary-50': '251 233 233', // #fbe9e9
		'--color-primary-100': '250 225 225', // #fae1e1
		'--color-primary-200': '249 218 218', // #f9dada
		'--color-primary-300': '245 196 196', // #f5c4c4
		'--color-primary-400': '238 151 151', // #ee9797
		'--color-primary-500': '230 107 107', // #E66B6B
		'--color-primary-600': '207 96 96', // #cf6060
		'--color-primary-700': '173 80 80', // #ad5050
		'--color-primary-800': '138 64 64', // #8a4040
		'--color-primary-900': '113 52 52', // #713434
		// secondary | #8198B3
		'--color-secondary-50': '236 240 244', // #ecf0f4
		'--color-secondary-100': '230 234 240', // #e6eaf0
		'--color-secondary-200': '224 229 236', // #e0e5ec
		'--color-secondary-300': '205 214 225', // #cdd6e1
		'--color-secondary-400': '167 183 202', // #a7b7ca
		'--color-secondary-500': '129 152 179', // #8198B3
		'--color-secondary-600': '116 137 161', // #7489a1
		'--color-secondary-700': '97 114 134', // #617286
		'--color-secondary-800': '77 91 107', // #4d5b6b
		'--color-secondary-900': '63 74 88', // #3f4a58
		// tertiary | #2374b5
		'--color-tertiary-50': '222 234 244', // #deeaf4
		'--color-tertiary-100': '211 227 240', // #d3e3f0
		'--color-tertiary-200': '200 220 237', // #c8dced
		'--color-tertiary-300': '167 199 225', // #a7c7e1
		'--color-tertiary-400': '101 158 203', // #659ecb
		'--color-tertiary-500': '35 116 181', // #2374b5
		'--color-tertiary-600': '32 104 163', // #2068a3
		'--color-tertiary-700': '26 87 136', // #1a5788
		'--color-tertiary-800': '21 70 109', // #15466d
		'--color-tertiary-900': '17 57 89', // #113959
		// success | #45a164
		'--color-success-50': '227 241 232', // #e3f1e8
		'--color-success-100': '218 236 224', // #daece0
		'--color-success-200': '209 232 216', // #d1e8d8
		'--color-success-300': '181 217 193', // #b5d9c1
		'--color-success-400': '125 189 147', // #7dbd93
		'--color-success-500': '69 161 100', // #45a164
		'--color-success-600': '62 145 90', // #3e915a
		'--color-success-700': '52 121 75', // #34794b
		'--color-success-800': '41 97 60', // #29613c
		'--color-success-900': '34 79 49', // #224f31
		// warning | #d2b45c
		'--color-warning-50': '248 244 231', // #f8f4e7
		'--color-warning-100': '246 240 222', // #f6f0de
		'--color-warning-200': '244 236 214', // #f4ecd6
		'--color-warning-300': '237 225 190', // #ede1be
		'--color-warning-400': '224 203 141', // #e0cb8d
		'--color-warning-500': '210 180 92', // #d2b45c
		'--color-warning-600': '189 162 83', // #bda253
		'--color-warning-700': '158 135 69', // #9e8745
		'--color-warning-800': '126 108 55', // #7e6c37
		'--color-warning-900': '103 88 45', // #67582d
		// error | #fa5f5f
		'--color-error-50': '254 231 231', // #fee7e7
		'--color-error-100': '254 223 223', // #fedfdf
		'--color-error-200': '254 215 215', // #fed7d7
		'--color-error-300': '253 191 191', // #fdbfbf
		'--color-error-400': '252 143 143', // #fc8f8f
		'--color-error-500': '250 95 95', // #fa5f5f
		'--color-error-600': '225 86 86', // #e15656
		'--color-error-700': '188 71 71', // #bc4747
		'--color-error-800': '150 57 57', // #963939
		'--color-error-900': '123 47 47', // #7b2f2f
		// surface | #455A73
		'--color-surface-50': '227 230 234', // #e3e6ea
		'--color-surface-100': '218 222 227', // #dadee3
		'--color-surface-200': '209 214 220', // #d1d6dc
		'--color-surface-300': '181 189 199', // #b5bdc7
		'--color-surface-400': '125 140 157', // #7d8c9d
		'--color-surface-500': '69 90 115', // #455A73
		'--color-surface-600': '62 81 104', // #3e5168
		'--color-surface-700': '52 68 86', // #344456
		'--color-surface-800': '41 54 69', // #293645
		'--color-surface-900': '34 44 56' // #222c38
	}
}
