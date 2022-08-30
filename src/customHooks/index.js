//  自定义 hooks
import { useEffect, useState } from "react";

// 防抖hooks
export const useDebounce = (value, delay) => {
  // 根据定时器原理+hooks编写

  // 定义变量
  const [debounceValue, setDebounceValue] = useState([]);

  // 根据value值变化更改定时器
  useEffect(() => {
    // 设置定时器
    const timeOut = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timeOut);
    };
  }, [value, delay]);

  return debounceValue;
};
