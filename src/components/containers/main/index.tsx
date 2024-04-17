import { propType } from "@/src/types/interface";
import "./style.scss";

export default function index({children}:propType) {
  return (
    <main>
      {children}
    </main>
  )
}
