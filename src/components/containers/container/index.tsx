import "./style.scss"
import { propType } from "../../../types/interface";

const index = ({children}:propType) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};

export default index;