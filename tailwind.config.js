module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#d7d8d8",
        primary: "#f37a28",
        secondary: "#4ba85a",
        other: "#be2026",
      },
      fontFamily: {
        title: ["DBHeaventRoundedBd"],
        body: ["DBHeaventRounded"],
        text: ["DBGinSiamX", "Georgia"],
        textBold: ["DBGinSiamXBd", "Georgia"],
      },
      fontSize: {
        fsm: `clamp(0.83rem, 0.54vw + 0.62rem, 1rem)`,
        fbase: "clamp(1rem, 0.53vw + 0.9rem, 1.2rem)",
        fmd: `clamp(1.2rem, 0.64vw + 1.04rem, 1.44rem)`,
        flg: `clamp(1.44rem, 0.77vw + 1.25rem, 1.73rem)`,
        fxl: "clamp(1.73rem, 0.92vw + 1.5rem, 2.07rem)",
        f2xl: "clamp(2.07rem, 1.11vw + 1.8rem, 2.49rem)",
        f3xl: "clamp(2.49rem, 1.33vw + 2.16rem, 2.99rem)",
        f4xl: "clamp(3.5rem, 4vw + 1rem, 12rem)",
        f5xl: "3rem",
        f6xl: "4rem",
        f7xl: "5rem",
      },
    },
  },
  plugins: [],
}
