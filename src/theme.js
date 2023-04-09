import { theme } from "antd";



const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#1677ff",
    colorBgBase	: "#435759",
    colorTextBase: "#ffffff",
    colorTextFooter: "#ffffff",
    colorBgFooter: "#000000",
    colorBgHeader:'linear-gradient(to bottom,#6c5574,#d3f3ee)',
    colorBgHeader2:'#6c5574',
    colorAvatar:"#5a9790",
    colorTopNavBar:"#ffffff",
    logoImgBar1:'../../../public/images/logobar1n.png',
    logoImgBar2:'../../../public/images/logobar2n.png',
    textShadowTopNavBar:'#6c5574 0.1em 0.1em 0.2em',
    colorLiHover: 'lian'
  },
  components: {
    Button: {
      colorPrimary: "#6366f2",
      colorPrimaryHover: "#9192f5",
    }
  },
};

const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorBgFooter: "#3e3f97",
    colorTextFooter: '#ffffff',
    colorBgHeader:'linear-gradient(to bottom,#d5a2e5,#d3f3ee)',
    colorBgHeader2:'#dfaef0',
    colorAvatar:"#e9eb8a",
    colorTopNavBar:"#4d304b",
    logoImgBar1:'../../../public/images/logobar1d.png',
    logoImgBar2:'../../../public/images/logobar2d.png',
    textShadowTopNavBar:'#dfaef0 0.1em 0.1em 0.2em',
    colorLiHover: 'liad'
  },
  components: {
    Button: {
      colorPrimary: "#6366f2",
      colorPrimaryHover: "#9192f5",
    },

  },
};

export { lightTheme, darkTheme };
