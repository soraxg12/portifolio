import React, { FC } from "react";

interface IProps {
    children: React.JSX.Element,
    style?:React.CSSProperties,
}

export const Card: FC<IProps> = ({ children,style }: IProps) => {
    return (
        <div className="bg-gray-800 shadow-lg shadow-gray-900 p-6 m-3" style={style}>
            {children}
        </div>
    )
}