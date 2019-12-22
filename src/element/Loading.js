import React from "react";
import { Spin, Icon } from "antd";
const antIcon = <Icon type="loading" style={{ fontSize: 50 }} spin />;

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        height: window.innerHeight,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Spin indicator={antIcon} />
    </div>
  );
};

export { Loading };
