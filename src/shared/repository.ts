export interface Repository<T> {
    findAll(): T[] | undefined
    findOne(item: { matricula: string }): T | undefined
    add(item: T): T | undefined
    update(item: T): T | undefined
    delete(item: { matricula: string }): T | undefined
  }