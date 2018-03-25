export const GET_SOURCES_REQUEST = 'GET_SOURCES_REQUEST'
export const GET_SOURCES_SUCCESS = 'GET_SOURCES_SUCCESS'
export const GET_SOURCES_FAILURE = 'GET_SOURCES_FAILURE'

export const GET_FILTERS_LOCAL = 'GET_FILTERS_LOCAL'
export const SELECT_FILTER_LOCAL = 'SELECT_FILTER_LOCAL'


export const getSourcesRequest = () => {
    return {
        type: GET_SOURCES_REQUEST
    }
}

export const getSourcesSuccess = (sources) => {
    return {
        type: GET_SOURCES_SUCCESS,
        payload: sources.sources,
    }
}

export const getSourcesFailure = (error) => {
    return {
        type: GET_SOURCES_FAILURE,
        payload: error,
        error: true
    }
}

export const getFilters = (sources) => {
    return {
        type: GET_FILTERS_LOCAL,
        payload: sources
    }
}

export const selectFilter = (filter, value) => {
    console.log(filter, value)
    return {
        type: SELECT_FILTER_LOCAL,
        payload: filter, value
    }
}
