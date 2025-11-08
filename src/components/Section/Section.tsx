import style from "./Section.module.css";
import type { ChildrenProps } from "../Container/Container";

export default function Section({ children }: ChildrenProps) {
  return <section className={style.section}>{children}</section>;
}
