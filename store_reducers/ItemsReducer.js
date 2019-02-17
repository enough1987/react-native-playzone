import { ACTIONS } from "../store_actions/index";

const INITIAL_STATE = {
  items: [
    {
      text: "item 1"
    },
    {
      text: "item 2"
    },
    {
      text: "item 3"
    },
    {
      text: "item 4"
    },
    {
      text: "item 5"
    },
    {
      text: "item 6"
    },
    {
        text: "text 1"
    },
    {
        text: "text 1.1"
    }
  ],
};

const ItemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return {
        items: [...state.items, action.item]
      }
    default:
      return state
  }
};

export default ItemsReducer;