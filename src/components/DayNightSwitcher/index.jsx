import { Segmented } from "antd";
import { Sun, Moon } from "../Icons";
import { theme } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { selectLightMode, setColorMode } from "../../redux/colorSlice";
import { selectSegmentedSunMode, setSegmentedMode } from "../../redux/segmentedSlice"

export default function DayNightSwitcher() {
  const { token: { colorTextBase } } = theme.useToken();

  const lightMode = useSelector(selectLightMode);

  const SunMode = useSelector(selectSegmentedSunMode);

  const dispatch = useDispatch();

  const toggleColor = () => {
    dispatch(setColorMode(!lightMode)); // 切換 lightMode 狀態

    console.log(lightMode);

    dispatch(setSegmentedMode(SunMode)); // 更新 segmentedMode 狀態
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
        activeindex={SunMode === true ? 0 : 1} // 根據 lightMode 狀態選擇 activeIndex
        onChange={toggleColor}
        defaultValue={ lightMode ? "Sun" : "Moon"}
      />
    </div>
  );
}