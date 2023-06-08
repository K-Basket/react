import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === 'increment') {
    return { ...state, total: state.total + action.payload };
  }

  if (action.type === 'decrement') {
    return { ...state, total: state.total - action.payload };
  }

  if (action.type === 'setStep') {
    return { ...state, step: action.payload };
  }

  if (action.type === 'createTodo') {
    return { ...state };
  }

  if (action.type === 'updateTodo') {
    return { ...state };
  }

  return state;
};

// здесь store имеет сколько угодно свойств в объекте
export const store = createStore(reducer, {
  total: 0,
  todo: [],
  users: null,
  step: 1,
});

// store.dispatch({ type: 'increment', payload: 12 });

// ========================= Ниже код без разделения на папки ====================== //

// import { createStore } from 'redux';

// const reducer = (state, action) => {
//   if (action.type === 'increment') {
//     return { ...state, total: state.total + action.payload };
//   }

//   if (action.type === 'decrement') {
//     return { ...state, total: state.total - action.payload };
//   }

//   if (action.type === 'setStep') {
//     return { ...state, step: action.payload };
//   }

//   return state;
// };

// // здесь store имеет сколько угодно свойств в объекте
// export const store = createStore(reducer, {
//   total: 0,
//   items: [],
//   users: null,
//   step: 1,
// });

// // store.dispatch({ type: 'increment', payload: 12 });
