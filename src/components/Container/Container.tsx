import  {type ReactNode}  from "react";
import styled from "./Container.module.css";

export interface ChildrenProps {
  children: ReactNode;
}


export default function Container({ children }: ChildrenProps) {
  return <div className={styled.container}>{children}</div>;
}
