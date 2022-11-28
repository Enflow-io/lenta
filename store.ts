import {createEvent, createStore, combine} from 'effector'
export const $$changed = createEvent()
export const $city = createStore(null).on($$changed, (_, newCity ) => newCity)

export const $$bdsChanged = createEvent()
export const $bds = createStore(null).on($$bdsChanged, (_, data ) => data)

export const $$stationsChanged = createEvent()
export const $stations = createStore(null).on($$stationsChanged, (_, data ) => data)

export const $$keywordChanged = createEvent()
export const $keyword = createStore("").on($$keywordChanged, (_, data ) => data)



export const $$filtersChanged = createEvent()
export const $filters = createStore({
    city: null,
    bds: null,
    stations: null,
    keyword: null
}).on($$filtersChanged, (_, filters ) => filters);