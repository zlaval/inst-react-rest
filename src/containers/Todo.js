import {v4 as uuid} from 'uuid'

export class Todo {
    constructor(title, description, id = uuid(), done = false) {
        this.id = id
        this.title = title
        this.description = description
        this.done = done
    }
}