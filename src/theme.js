import { theme } from "antd";



const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    fontFamily: "FakePearl-Regular,Inter, system-ui, Avenir, Helvetica, Arial, sans-serif ",
    colorPrimary: "#1677ff",
    colorBgBase	: "#435759",
    colorBgContainer: '#313837',
    colorTextBase: "#fcfafc",
    colorBgFooter: "#402A47",
    colorBgHeader:'linear-gradient(to bottom,#6c5574,#d3f3ee)',
    colorBgHeader2:'#6c5574',
    colorAvatar:"#5a9790",
    colorTopNavBar:"#ffffff",
    logoImgBar1:'/images/logobar1n.png',
    logoImgBar2:'/images/logobar2n.png',
    textShadowTopNavBar:'#6c5574 0.1em 0.1em 0.2em',
    colorProductItem:'#313837',
    novelImg:'/images/noveln.png',
    mangaImg:'/images/mangan.png',
    figureImg:'/images/figuren.png',
    otherImg:'/images/othern.png',
    colorQaHeaderBig:'#313837',
    colorQaHeaderSmall:'#141b1a',

    colorFillQuaternary:'#6C5574',
    colorPrimaryBg:'#5A9790',
    colorBgTextHover:'#5A9790',



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
    colorBgContainer: '#E1F5F2',
    colorBgFooter: "#9C7BA8",
    colorTextBase:"#4d304b",
    colorBgHeader:'linear-gradient(to bottom,#d5a2e5,#d3f3ee)',
    colorBgHeader2:'#dfaef0',
    colorAvatar:"#d3f3ee",
    colorTopNavBar:"#4d304b",
    logoImgBar1:'/images/logobar1d.png',
    logoImgBar2:'/images/logobar2d.png',
    textShadowTopNavBar:'#dfaef0 0.1em 0.1em 0.2em',
    colorProductItem:'#E1F5F2',
    novelImg:'/images/noveld.png',
    mangaImg:'/images/mangad.png',
    figureImg:'/images/figured.png',
    otherImg:'/images/otherd.png',
    colorQaHeaderBig:'#F0F7F6',
    colorQaHeaderSmall:'#D5E6E3',

    colorFillQuaternary:'#dfaef0',
    colorPrimaryBg:'#E9EB8A',
    colorBgTextHover:'#E9EB8A',

    colorPrimary:'#4d304b'

  },
  components: {
    Button: {
      colorPrimary: "#dfaef0",
      colorPrimaryHover: "#94dfd3",
    },
    Menu:{
      
    }

  },


};

export { lightTheme, darkTheme };
