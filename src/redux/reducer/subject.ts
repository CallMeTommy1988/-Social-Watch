import { ISubject } from "../../api/interface/subject";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as subjectService from "../../api/modules/subject";


const name = `subjectWorkflow`

const getSubjectListAllType = `${name}/listAll`;
const addSubjectType = `${name}/add`;
const deleteSubjectType = `${name}/delete`;

export const getSubjectListAllAsync = createAsyncThunk(getSubjectListAllType, async () => {
    const result = await subjectService.getAllSubjectList();
    return result;
});

export const addSubjectAsync = createAsyncThunk(addSubjectType, async (params: ISubject.Req) => {
    
});

export const deleteSubjectAsync = createAsyncThunk(deleteSubjectType, async (params: ISubject.Delete) => {

});

const initialState: ISubject.State = {
    list: []
};

export const subjectReducer = createSlice({
    name: name,
    initialState: initialState,
    reducers: {
        addSubject: (state: ISubject.State, action) => {
            state.list.push(action.payload);
        },
        deleteSubject: (state: ISubject.State, action) => {

            let index = -1;
            state.list.forEach((item: ISubject.Res, i) => {
                if (item.id === action.payload) {
                    index = i;
                    return;
                }
            })

            if (index > -1) {
                state.list = state.list.splice(index, 1);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSubjectListAllAsync.fulfilled, (state: ISubject.State, action) => {
                if (action.payload.code === 200 && !!action.payload.data) {
                    console.log(action.payload);
                    state.list = action.payload.data;
                }
            })
    },
});

export const { addSubject, deleteSubject } = subjectReducer.actions;

export const listSelector = (state: { subject: ISubject.State }) => {
    return state.subject.list;
}

export default subjectReducer.reducer;
