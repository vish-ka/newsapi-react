import {fork} from 'redux-saga/effects'
import sourcesSaga from './sources'

export default function* main() {
    yield fork(sourcesSaga)
}
