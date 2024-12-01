import { FC } from "react";

import IconMap from "../../Data/IconMap";

const approvalSteps = [
  "Draft",
  "Approval Manager",
  "Approval Poltry Health",
  "Approval Mgr. Purchasing",
  "Approval Mgr. Finance",
  "Approval Dir. Finance",
  "PD Dibuat",
  "Produk Diterima Pengaju",
  "Dibayar Sebagian",
  "Dibayar Penuh",
];

interface Props {
  radius?: number;
  currentApprovalStep: number;
}

const TimelineApproval: FC<Props> = ({ radius = 20, currentApprovalStep }) => {
  return (
    <div className="border-[2px] border-gray-300 rounded-b-lg p-4">
      {/* Status Bar::START */}
      <div className="relative mt-6 mx-auto flex align-top items-center w-full max-w-screen-2xl">
        {/* Line Across::START */}
        <div
          className="absolute h-[3px] bg-gray-400/80 left-[calc(100%_/_10_/_2)] right-[calc(100%_/_10_/_2)]"
          style={{
            top: radius / 2,
          }}
        />
        {/* Line Across::END */}
        {approvalSteps.map((status, index) => (
          <div key={status + index} className="flex flex-col flex-1 self-start">
            <div
              key={status}
              className={`items-center text-center h-full ${
                currentApprovalStep - 1 > index
                  ? "text-primary-darker"
                  : "text-gray-500"
              }`}
            >
              <div
                className="relative bg-white mx-auto mb-2"
                style={{
                  width: radius + 10,
                  height: radius,
                }}
              >
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full grid place-items-center ${
                    currentApprovalStep - 1 > index
                      ? "bg-primary-darker"
                      : currentApprovalStep > index
                        ? "bg-white border border-gray-300"
                        : "bg-gray-300"
                  }`}
                  style={{
                    width: radius,
                    height: radius,
                  }}
                >
                  {currentApprovalStep - 1 === index && (
                    <div
                      className="bg-primary-darker rounded-full"
                      style={{
                        width: Math.ceil((radius / 100) * 60),
                        height: Math.ceil((radius / 100) * 60),
                      }}
                    />
                  )}
                  {currentApprovalStep - 1 > index && (
                    <IconMap.FaCheck className="text-xs text-white" />
                  )}
                </div>
              </div>
              <p className="text-xs">{status}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Status Bar::END */}
    </div>
  );
};

export default TimelineApproval;
