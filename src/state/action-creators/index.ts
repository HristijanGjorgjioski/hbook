import { ActionType } from "../action-types";
import { Direction } from "../actions";
import { CellTypes } from "../cell";

export const updateCell = (id: string, content: string) => {
    return {
        type: ActionType.UPDATE_CELL,
        payload: {
            id, content
        }
    }
};

export const deleteCell = (id: string) => {
    return {
        type: ActionType.DELETE_CELL,
        payload: id
    }
};

export const moveCell = (id: string, direction: Direction) => {
    return {
        type: ActionType.MOVE_CELL,
        payload: {
            id, direction
        }
    }
};

export const insertCellAfter = (id: string | null, cellType: CellTypes) => {
    return {
        type: ActionType.INSERT_CELL_AFTER,
        payload: {
            id,
            type: cellType
        }
    }
};
