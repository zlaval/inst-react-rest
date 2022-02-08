import {v4 as uuid} from 'uuid'

export class Todo {
    constructor(title, description, id = uuid()) {
        this.id = id
        this.title = title
        this.description = description
    }
}