import s from "./Background.module.scss";
import { getRandomImageUrl } from "../../utils/helpers";
import { useMemo } from "react";

export const Background = () => {
  const imageUrl = useMemo(() => {
    return getRandomImageUrl();
  }, []);

  return (
    <>
      <div className={s.blur}></div>
      <img className={s.background} src={imageUrl} alt="background" />
    </>
  );
};
