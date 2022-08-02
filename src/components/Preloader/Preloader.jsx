import s from "./Preloader.module.scss";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export const Preloader = ({ isLoading, children }) => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  if (isLoading) {
    return (
      <div className={s.loading}>
        <Spin indicator={antIcon} />
      </div>
    );
  }

  return children;
};
