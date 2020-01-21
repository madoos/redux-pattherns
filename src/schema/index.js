import { normalize, schema, denormalize } from 'normalizr'
import { curry, path } from 'ramda'

const useNormalize = curry((getter, schema, data) => getter(normalize(data, schema)))
const useDenormalize = curry((schema, data) => denormalize(data, schema))

export const Todo = new schema.Entity('todo')
export const TodoList = new schema.Array(Todo)
export const normalizeTodos = useNormalize(path(['entities', 'todo']),TodoList)
export const denormalizeTodos = useDenormalize(TodoList)