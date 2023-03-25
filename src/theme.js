import { theme } from "antd";

const lightTheme = {
    algorithm: theme.defaultAlgorithm,
    token: {
      colorBgFooter: "#3e3f97",
      colorTextFooter: '#ffffff',
    },
    components: {
      Button: {
        colorPrimary: "#6366f2;",   /*調整按鈕顏色 */
        colorPrimaryHover: "#9192f5",
      },
    },
  };
  
  export { lightTheme, darkTheme };