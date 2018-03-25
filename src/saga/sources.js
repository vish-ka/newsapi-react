import {call, put, all, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import {
    GET_SOURCES_REQUEST,
    getSourcesSuccess,
    getSourcesFailure,
} from '../actions/sources'

const api = 'https://newsapi.org/v2';
const apiKey = 'efe7f3ecb7a64f968e98af7942020a55';

function* getSources(action) {
    try {
        console.log(action)
        const {data} = yield call(axios.get, `${api}/sources`, {
            params: {
                // language: 'en',
                // q: 'business',
                apiKey: apiKey
            }})
        yield put(getSourcesSuccess(data))
    }
    catch (error) {
        yield put(getSourcesFailure(error))
    }
}

// function* addTodo(action) {
//     try {
//         console.log(action)
//         const todo = action.payload
//         const {data} = yield call(axios.post, `${api}/Todos?access_token=s3cr3t`, todo)
//         yield put(createTodoSuccess(data))
//     }
//     catch (error) {
//         yield put(createTodoFailure(error))
//     }
// }
//
// function* completeTodo(action) {
//     try {
//         const todo = action.payload
//         const id = action.payload.id
//         const {data} = yield call(axios.patch, `${api}/Todos/${id}?access_token=s3cr3t`, todo)
//         yield put(completeTodoSuccess(data))
//         yield put(getTodosRequest())
//     }
//     catch (error) {
//         yield put(completeTodoFailure(error))
//     }
// }


export default function* sources() {
    yield all([
        takeLatest(GET_SOURCES_REQUEST, getSources)
    ])
}
