import { Fragment } from "react";
import AddCell from "./AddCell/AddCell";
import CellListItem from "./cell-list-item";
import { useTypedSelector } from "./hooks/useTypedSelector"

const CellList: React.FC = () => {
    const cells = useTypedSelector(({ cells: { order, data } }) => order.map((id) => data[id]));

    const renderedCells = cells.map((cell) => (
        <Fragment key={cell.id}>
            <AddCell nextCellId={cell.id} />
            <CellListItem cell={cell} />
        </Fragment>
    ))
    

    return (
        <div>
            {renderedCells}
            <AddCell nextCellId={null} />
        </div>
    )
}

export default CellList
