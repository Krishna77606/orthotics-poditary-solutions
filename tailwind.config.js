/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fcfefe",
        primary: "#1f2b6c",
        lightsteelblue: {
          "100": "#bfd2f8",
          "200": "#a6b8de",
        },
        secondary: "#159eec",
        black: "#202124",
        gray: {
          "100": "#fafdfe",
          "200": "rgba(252, 254, 254, 0.2)",
          "300": "rgba(252, 254, 254, 0.8)",
        },
        cornflowerblue: "rgba(21, 158, 236, 0.01)",
        darkslateblue: "#525e9e",
        black1: "#000",
        silver: "#bebebe",
        turquoise: "#02ddcd",
      },
      spacing: {},
      fontFamily: {
        body: "'Work Sans'",
        "display-2": "'Yeseva One'",
      },
      borderRadius: {
        "8xs": "5px",
        "31xl": "50px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      "10xl": "29px",
      sm: "14px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },

  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fcfefe",
        primary: "#1f2b6c",
        secondary: "#159eec",
        accent: "#bfd2f8",
        black: "#202124",
        black1: "#000",
        gray: "rgba(255, 255, 255, 0.5)",
      },
      spacing: {},
      fontFamily: {
        "body-2": "'Work Sans'",
        "display-2": "'Yeseva One'",
      },
      borderRadius: {
        "31xl": "50px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      "17xl": "36px",
      lg: "18px",
      sm: "14px",
      "13xl": "32px",
      "7xl": "26px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

