import React from "react";
export const CTX = React.createContext();

const initState = {
  general: [
    { from: "aaron", msg: "hello" },
    { from: "arnold", msg: "hello" },
    { from: "arc", msg: "hello" },
  ],
  topic2: [
    { from: "aaron", msg: "hello" },
    { from: "aaron", msg: "hello" },
    { from: "aaron", msg: "hello" },
  ],
};
function reducer(state, action) {
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        [action.payload.topic]: [
          ...state[topic],
          {
            from,
            msg,
          },
        ],
      };
    default:
      return state;
  }
}

export default function Store(props) {
  const reducerHook = React.useReducer(reducer, initState);
  return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
}
