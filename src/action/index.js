import axios from "../utils/axios";
export const getList = () => {
    return dispatch => {
        axios.get('/datalist').then(res => {
            // console.log(res.data);
            dispatch({
                type: 'getList',
                payload: res.data
            })
        })
    }
};
export const getPushList = (mode) => {
    return dispatch => {
        axios.get('/pulldata').then(res => {
            console.log(res.data);
            dispatch({
                type: 'getPushList',
                payload: res.data,
                mode
            })
        })
    }
};
export const dels = (id) => {
   return {
       type:'dels',
       payload:id
   }
};
export const adds = (data) => {
    return {
        type:'adds',
        payload:data
    }
 };
 export const edits = (data) => {
    return {
        type:'edits',
        payload:data
    }
 };