import { createSlice } from '@reduxjs/toolkit'
import { Student } from '../../src/type'

interface initialState {
    studentList: [],
    studentEdit: undefined | Student,
}
const initialState = {
    studentList:[],
    studentEdit: undefined,
}

const baiTapFormSlice = createSlice({
    name: 'baiTapForm',
    initialState,

    reducers: {
        addStudent: (state, { payload }) => {
            state.studentList.push(payload)
        },

        deleteStudent: (state, { payload }) => {
            state.studentList = state.studentList.filter((prd) => prd.id !== payload)
        },

        editStudent: (state, { payload }) => {
            state.studentEdit = payload
        },

        updateStudent: (state, { payload }) => {
            state.studentList = state.studentList.map((prd) => {
                if (prd.id === payload.id) {
                    return payload
                }
                return prd
            })

            state.studentEdit = undefined
        },
    },
    extraReducers: () => {},
})

export const {addStudent, editStudent, deleteStudent,updateStudent} = baiTapFormSlice.actions
export default baiTapFormSlice.reducer

