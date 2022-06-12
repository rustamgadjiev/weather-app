import s from "./Preloader.module.scss";
import { ReactComponent as LoadingIcon } from "../../assets/img/icons/loading.svg";

export const Preloader = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className={s.loading}>
        <LoadingIcon />
      </div>
    );
  }

  return children;
};
