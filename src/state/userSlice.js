import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
   name: 'user',
   initialState: {
    name: '유비', 
    age: 20
},
   reducers: {
      changeName(state){
         state.name = '관우'
      },
      changeName2(state){
         return {
            name: '장비', 
            age: 102
        }
      },

      increase(state, action){
         state.age += action.payload

      }
   }
})

// const cart = createSlice({
//     name: 'cart',
//     initialState: [
//         {id: 1, item: '토마토', amount: 2},
//         {id: 2, item: '수박', amount: 1}
//     ],

//     reducers: {
//         addCount(state, action) {
//             let idx = state.findIndex((a)=> {return a.id === action.payload})
//             ++state[idx].amount;
//         },

//         sortName(state) {
//             state.sort((a, b)=> a.item > b.item ? 1: -1);
//         }
//     }
// })

export const { changeName, changeName2, increase} = user.actions
// export const { addCount, sortName } = cart.actions

export default user.reducer