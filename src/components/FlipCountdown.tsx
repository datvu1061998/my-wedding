import React from "react";
export interface IFlipCountdownProps {}

export default function FlipCountdown(props: IFlipCountdownProps) {
  return (
    <div>
      <div
        className="tick max-md:w-[340px] w-[40svh] mx-auto mb-[30px]"
        data-did-init="handleTickInit"
      >
        <div
          data-repeat="true"
          data-layout="horizontal fit"
          data-transform="preset(d, h, m, s) -> delay"
        >
          <div className="tick-group">
            <div
              data-key="value"
              data-repeat="true"
              data-transform="pad(00) -> split -> delay"
            >
              <span data-view="flip"></span>
            </div>

            <span
              data-key="label"
              data-view="text"
              className="tick-label"
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
