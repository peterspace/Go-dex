import React from 'react'

const ToolTip = ({message, backgroundColor = 'bg-gray-600', className = 'text-white', children}) => {
  return (
    <div className="relative flex flex-col group">
    <span>{message}</span>
    <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
      <span className={`relative z-10 p-2 text-xs leading-none whitespace-no-wrap shadow-lg rounded-md ${backgroundColor} ${className}`}>{children}</span>
      <div className={`w-3 h-3 -mt-2 rotate-45 ${backgroundColor}`}></div>
    </div>
  </div>
  )
}

export default ToolTip

// import React, {useState} from "react";

// const ToolTipContainer = ({children}) => {
// 	const [visible, setVisible] = useState(false);

// 	return (
// 		<div
// 			onMouseEnter={() => setVisible(true)}
//             onMouseLeave={() => setVisible(false)}
// 		>
// 			<span>Hover to tooltip</span>
// 			<div className={`relative w-fit ${visible ? "flex" : "hidden"}`}>
// 				{children}
// 			</div>
// 		</div>
// 	);
// };

// const ToolTip = ({
//     className = "text-black",
//     contentClassName = '',
// 	backgroundColor = "bg-gray-400",
// 	children,
// }) => {
// 	return (
// 		<div
// 			className={`
//             absolute bottom-0 mb-7 px-3 py-2 rounded-md z-20
//         ${backgroundColor}
//         ${className}
//     `}
// 		>
// 			<div className={`relative z-20 w-fit ${contentClassName}`}>{children}</div>
// 			<div
// 				className={`absolute 
//             w-3 h-3 rotate-45 z-10 ${backgroundColor}`}
// 			/>
// 		</div>
// 	);
// };

// export {ToolTip, ToolTipContainer};
