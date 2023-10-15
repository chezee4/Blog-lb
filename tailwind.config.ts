import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "custom-color" : "#424242",
        "custom-red": "#D05270",
        "custom-red-seofriendly": "#AD1338"
      },
      screens: {
        'mm': '480px',
        'mx': "940px",
        'mmm': "340px" 
      },
      
    },
  },
  plugins: [],
}
export default config
