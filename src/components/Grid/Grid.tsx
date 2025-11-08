import type { ChildrenProps } from "../Container/Container";
import style from "./Grid.module.css";

export default function Grid({ children }: ChildrenProps) {
  return <ul className={style.list}>{children}</ul>;
}
