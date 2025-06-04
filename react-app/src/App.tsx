import { Button, Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import type { GetProps } from "antd";
import React from "react";

type SearchProps = GetProps<typeof Input.Search>;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const BrandGuidelines: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col md:flex-row relative overflow-hidden">
      {/* 左侧文字区 */}

      {/* LOGO MARK 区域 */}

      {/* Footer 区域 */}
      <footer className="absolute bottom-0 left-0 w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-4 bg-transparent z-20">
        <div className="flex items-center space-x-4">
          <span
            className="text-[#9DA2B3] text-[16px] font-semibold"
            style={{ fontFamily: "Manrope" }}
          >
            © 2024 Ddream.land All rights reserved
          </span>
        </div>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <span
            className="text-[#9DA2B3] text-[16px] font-semibold"
            style={{ fontFamily: "Manrope" }}
          >
            Index Content
          </span>
          <img src="/figma/arrow1.svg" alt="arrow1" className="w-4 h-4 mx-1" />
          <span
            className="text-[#9DA2B3] text-[16px] font-semibold"
            style={{ fontFamily: "Manrope" }}
          >
            Brand Logo
          </span>
          <img src="/figma/arrow2.svg" alt="arrow2" className="w-4 h-4 mx-1" />
          <span
            className="text-[#9DA2B3] text-[16px] font-semibold"
            style={{ fontFamily: "Manrope" }}
          >
            2.0
          </span>
          <img src="/figma/arrow3.svg" alt="arrow3" className="w-4 h-4 mx-1" />
          <span
            className="text-[#9DA2B3] text-[16px] font-semibold"
            style={{ fontFamily: "Manrope" }}
          >
            06
          </span>
        </div>
      </footer>
    </div>
  );
};

class Example extends React.Component<{}, { val: number }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      val: 0,
    };
  }

  componentDidMount() {
    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val); // 第 1 次 log

    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val); // 第 2 次 log

    setTimeout(() => {
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val); // 第 3 次 log

      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val); // 第 4 次 log
    }, 0);
  }

  render() {
    return null;
  }
}

const App = () => {
  return (
    <>
      <BrandGuidelines />
      <div className="bg-primary">11</div>
      <Example />
    </>
  );
};
export default App;
