import {createReducer} from '../createReducer'
import {
    GET_SOURCES_REQUEST,
    GET_SOURCES_SUCCESS,
    GET_SOURCES_FAILURE,
    GET_FILTERS_LOCAL,
    SELECT_FILTER_LOCAL
} from '../actions/sources'

const DEFAULT_STATE = {
    sources: [],
    filters: [
        {
            name: 'Категория',
            value: 'category',
            items: [{
                value:'business',
                label: 'Бизнес'
            }, {
                value: 'entertainment',
                label: 'Развлечения'
            }, {
                value: 'gaming',
                label: 'Игры'
            }, {
                value: 'general',
                label: 'Общие'
            }, {
                value: 'music',
                label: 'Музыка'
            }, {
                value: 'politics',
                label: 'Политика'
            }, {
                value: 'science-and-nature',
                label: 'Наука и природа'
            }, {
                value: 'sport',
                label: 'Спорт'
            }, {
                value: 'technology',
                label: 'Технологии'
            }]
        },
        {
            name: 'Язык',
            value: 'language',
            items: [{
                value: 'en',
                label: 'en'
            }, {
                value: 'de',
                label: 'de'
            }, {
                value: 'fr',
                label: 'fr'
            }]
        },
        {
            name: 'Страна',
            value: 'country',
            items: [{
                value: 'au',
                label: 'au'
            }, {
                value: 'de',
                label: 'de'
            }, {
                value: 'gb',
                label: 'gb'
            }, {
                value: 'in',
                label: 'in'
            }, {
                value: 'it',
                label: 'it'
            }, {
                value: 'us',
                label: 'us'
            }]
        }
    ],
    error: null,
    loading: false
}

const setLoading = (state) => {
    return {
        ...state,
        loading: true
    }
}

const setSources = (state, action) => {
    return {
        ...state,
        sources: action.payload,
        loading: false
    }
}

const setFilters = (state) => {
    return {
        ...state,
        loading: false
    }
}

const selectFilter = (state, action) => {
    return {
        ...state,
        sources: action.value.map(item =>
                    state.sources.filter(source =>
                        source[action.payload] === item.value
                )),
        loading: false
    }
}

const setError = (state, action) => {
    return {
        ...state,
        error: action.payload,
        loading: false
    }
}

export default createReducer(DEFAULT_STATE, {

    [GET_SOURCES_REQUEST]: setLoading,
    [GET_SOURCES_SUCCESS]: setSources,
    [GET_FILTERS_LOCAL]: setFilters,
    [SELECT_FILTER_LOCAL]: selectFilter,
    [GET_SOURCES_FAILURE]: setError,
})
