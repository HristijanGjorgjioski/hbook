import './styles.css'
import { Cell } from "../../../state"
import ActionBar from "../../ActionBar/ActionBar";
import CodeCell from "../../CodeCell";
import TextEditor from "../../TextEditor/TextEditor";

interface CellListItemProps {
    cell: Cell
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
    let child: JSX.Element;
    (cell.type === 'code') ? 
        child = <>
            <div className="action-bar-wrapper">
                <ActionBar id={cell.id} />
            </div>
            <CodeCell />
        </> 
    : 
        child =
            <> 
                <TextEditor cell={cell} />
                <ActionBar id={cell.id} />
            </> 

    return (
        <div className="cell-list-item">
            {child}
        </div>
    )
}

export default CellListItem
