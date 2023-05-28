import { theme } from "antd";



const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    fontFamily: "FakePearl-Regular,Inter, system-ui, Avenir, Helvetica, Arial, sans-serif ",
    colorPrimary: "#fcfafc",/*文字顏色 */
    colorBgBase	: "#202124", /*背景色 */

    colorLogo:"#DFAEF0",/*logo顏色 */

    colorBgFooter: "#6C5574",/*footer背景色 */

    colorTopNavBar:"#ffffff",/*topnavbar的文字顏色 */

    colorProductItem:'#2E2E2E',/*productItem背景色 */

    novelImg:'/images/noveln.png', /*網站介紹頁icon */
    mangaImg:'/images/mangan.png',
    figureImg:'/images/figuren.png',
    otherImg:'/images/othern.png',

    colorQaHeaderBig:'#313837',
    colorQaHeaderSmall:'#141b1a',
    
    badgeColor:'#c88ade', /*購物車的badge色 */

    colorFillQuaternary:'#6C5574',
    colorPrimaryBg:'#DFAEF0',/*focus input框的顏色 */
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
    colorPrimary:"#4d304b",
    colorBgBase:"#fcfafc",/*背景色 */

    colorLogo:"#3B837A",/*logo顏色 */

    colorBgFooter: "#DFAEF0",/*footer背景色 */
 
    colorTopNavBar:"#4d304b",/*topnavbar的文字顏色 */

    colorProductItem:'#FFFFFF',/*productItem背景色 */

    novelImg:'/images/noveld.png', /*網站介紹頁icon */
    mangaImg:'/images/mangad.png',
    figureImg:'/images/figured.png',
    otherImg:'/images/otherd.png',

    colorQaHeaderBig:'#F0F7F6',/*購物車的badge色 */
    colorQaHeaderSmall:'#D5E6E3',

    badgeColor:'#c88ade',

    colorFillQuaternary:'#dfaef0',
    colorPrimaryBg:'#DFAEF0', /*focus input框的顏色 */
    colorBgTextHover:'#E9EB8A', /*hover超連結的顏色 */

    colorPrimary:'#4d304b'

  },
  components: {
    Button: {
      colorPrimary: "#dfaef0",
      colorPrimaryHover: "#94dfd3",
    },


  },


};

export { lightTheme, darkTheme };
