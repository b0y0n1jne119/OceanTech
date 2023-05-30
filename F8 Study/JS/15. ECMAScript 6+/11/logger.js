import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from './constants.js'

export default function logger(log, type = TYPE_ERROR) {
    console[type](log)
}