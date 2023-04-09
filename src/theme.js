import { theme } from "antd";



const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    fontFamily: "FakePearl-Regular,Inter, system-ui, Avenir, Helvetica, Arial, sans-serif ",
    colorPrimary: "#1677ff",
    colorBgBase	: "#435759",
    colorTextBase: "#fcfafc",
    colorBgFooter: "#402A47",
    colorBgHeader:'linear-gradient(to bottom,#6c5574,#d3f3ee)',
    colorBgHeader2:'#6c5574',
    colorAvatar:"#5a9790",
    colorTopNavBar:"#ffffff",
    logoImgBar1:'/images/logobar1n.png',
    logoImgBar2:'/images/logobar2n.png',
    textShadowTopNavBar:'#6c5574 0.1em 0.1em 0.2em',
    colorProductItem:'#313837'
  },
  components: {
    Button: {
      colorPrimary: "#141b1a",
      colorPrimaryHover: "#313837",
    }
  },
};

const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    fontFamily: "FakePearl-Regular,Inter, system-ui, Avenir, Helvetica, Arial, sans-serif ",
    colorBgBase:"#fcfafc",
    colorBgFooter: "#9C7BA8",
    colorTextBase:"#4d304b",
    colorBgHeader:'linear-gradient(to bottom,#d5a2e5,#d3f3ee)',
    colorBgHeader2:'#dfaef0',
    colorAvatar:"#e9eb8a",
    colorTopNavBar:"#4d304b",
    logoImgBar1:'/images/logobar1d.png',
    logoImgBar2:'/images/logobar2d.png',
    textShadowTopNavBar:'#dfaef0 0.1em 0.1em 0.2em',
    colorProductItem:'#d3f3ee'

  },
  components: {
    Button: {
      colorPrimary: "#85c9be",
      colorPrimaryHover: "#94dfd3",
    }

  },
};

export { lightTheme, darkTheme };
