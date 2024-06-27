export interface Repository<T> {
    findAll(): Promise< T[] | undefined>
    findOne(item: { matricula: string }): Promise<T | undefined>
    add(item: T): Promise<T | undefined>
    update(matricula: string, item: T): Promise<T | undefined>
    delete(item: { matricula: string }): Promise<T | undefined>
  }