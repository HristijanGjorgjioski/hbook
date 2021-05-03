import { ActionType } from '../action-types/index';
import { CellTypes } from '../cell';

export type Direction = 'up' | 'down';

interface MoveCellAction {
    type: ActionType.MOVE_CELL;
    payload: {
        id: string;
        direction: Direction;
    };
};

interface DeleteCellAction {
    type: ActionType.DELETE_CELL;
    payload: string;
};

interface InsertCellBefore {
    type: ActionType.INSERT_CELL_BEFORE;
    payload: {
        id: string | null;
        type: CellTypes;
    };
};

interface UpdateCellAction {
    type: ActionType.UPDATE_CELL;
    payload: {
        id: string;
        content: string;
    };
};

export type Action = MoveCellAction | DeleteCellAction | InsertCellBefore | UpdateCellAction;
