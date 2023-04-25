import { Segmented } from "antd";
import { Sun, Moon } from "../Icons";
import { theme } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { selectLightMode, setColorMode } from "../../redux/colorSlice";
import '../../App.css';



export default function DayNightSwitcher() {
  const { token: { colorTextBase } } = theme.useToken();

  const lightMode = useSelector(selectLightMode);


  const dispatch = useDispatch();

  const toggleColor = () => {
    dispatch(setColorMode(!lightMode)); // 切換 lightMode 狀態

    console.log(lightMode);

  };


  return (
    <div>
      <Segmented
        options={[
          {
            value: 'Sun',
            icon: <Sun color={colorTextBase} />,
          },
          {
            value: 'Moon',
            icon: <Moon color={colorTextBase} />,
          },
        ]}
        size="small"
        onChange={toggleColor}
        defaultValue={ lightMode ? "Sun" : "Moon"}
        style={{borderRadius:'100px'}}
      />
    </div>
  );
}