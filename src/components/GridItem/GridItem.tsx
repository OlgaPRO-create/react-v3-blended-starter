import type { ChildrenProps } from "../Container/Container";
import style from "./GridItem.module.css";

export default function GridItem({ children }: ChildrenProps) {
  return <li className={style.item}>{children}</li>;
}
