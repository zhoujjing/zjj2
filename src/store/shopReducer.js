const initState = {
    arr: [],
    pushData: []
};
let shopReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case 'getList':
            // console.log(payload);
            state.arr = payload
            return { ...state }
        case 'getPushList':
            console.log(payload);
            if (payload.mode) {
                state.pushData = [...state.pushData, ...payload]
            } else {
                state.pushData = payload
            }
            // state.arr = payload
            return { ...state }
        case 'dels':
            // console.log(payload);
            state.arr.forEach((item, index) => {
                if (item.id === payload) {
                    state.arr.splice(index, 1)
                }
            })
            return { ...state }
        case 'adds':
            // console.log(payload);
            payload.id = new Date() * 1
            state.arr.unshift(payload)
            return { ...state }
        case 'edits':
            // console.log(payload);
            state.arr.forEach((item, index) => {
                if (item.id === payload.id) {
                    Object.assign(item, payload)
                    console.log(item, payload);

                }
            })
            return { ...state }
        default:
            return state
    }
}
export default shopReducer