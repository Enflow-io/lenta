import {createEvent, createStore, combine} from 'effector'
export const $$changed = createEvent()
export const $city = createStore(null).on($$changed, (_, newCity ) => newCity)