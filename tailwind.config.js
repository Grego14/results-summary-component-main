/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      fontFamily: {
        "HankenGroteskVariable-medium": ["HankenGroteskVariable", "sans-serif"],
        "HankenGroteskVariable-bold": ["HankenGroteskVariable", "sans-serif"],
        "HankenGroteskVariable-extrabold": ["HankenGroteskVariable", "sans-serif"],
      },
    },
    variants: {
      extend: {
        fontWeight: ["medium", "bold", "extrabold"],
      },
    }
    /*    fontFamily: {
      HGMedium: ["HankenGrotesk-Medium", "sans-serif"],
      HGBold: ["HankenGrotesk-Bold", "sans-serif"],
      HGExtraBold: ["HankenGrotesk-ExtraBold", "sans-serif"],
             "HGV-Medium": [
        "HankenGrotesk-VariableFont_wght",
        {
          fontVariationSettings: "'wght' 500",
        },
      ],
      "HGV-Bold": [
        "HankenGrotesk-VariableFont_wght",
        ,
        {
          fontVariationSettings: "'wght' 700",
        },
      ],
      "HGV-ExtraBold": [
        "HankenGrotesk-VariableFont_wght",
        {
          fontVariationSettings: "'wght' 800",
        },
      ],
    }, */
    colors: {
      "violet-blue": "hsla(256, 72%, 46%, 1)",
      "persian-blue": "hsla(241, 72%, 46%, 0)",
      "light-slate-blue": "hsl(252, 100%, 67%)",
      "light-royal-blue": "hsl(241, 81%, 54%)",
      "light-red": "hsl(0, 100%, 67%)",
      "orangey-yellow": "hsl(39, 100%, 56%)",
      "green-teal": "hsl(166, 100%, 37%)",
      "cobalt-blue": "hsl(234, 85%, 45%)",
      "light-red-o": "hsl(0, 100%, 67%, .05)",
      "orangey-yellow-o": "hsl(39, 100%, 56%, .05)",
      "green-teal-o": "hsl(166, 100%, 37%, .05)",
      "cobalt-blue-o": "hsl(234, 85%, 45%, .05)",
      "dark-gray-blue-idk": "hsl(224, 30%, 27%, .5)",
      "pale-blue": "hsl(221, 100%, 96%)",
      "light-lavender": "hsl(241, 100%, 89%)",
      "dark-gray-blue": "hsl(224, 30%, 27%)",
    },
    boxShadow: {
      "container-shadow":
        "10px 10px 15px -4px hsl(221, 100%, 96%), -10px -10px 15px -4px hsl(221, 100%, 96%)",
    },
    screens: {
      mobile: { min: "320px", max: "576px" },
      "mobile-landscape": { raw: "(max-height: 550px) and (orientation: landscape)" },
      "mobile-portrait": { raw: "(max-height: 850px) and (orientation: portrait)" },
      tablet: "768px",
      laptop: "992px",
      desktop: "1200px",
    },
  },
  plugins: [],
}
