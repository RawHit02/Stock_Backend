export class ResultModel<T> {
    constructor(status: boolean, data?: T, errors?: string[]) {
        this.status = status;
        this.data = data;
        this.errors = errors;
    }
    status: boolean;
    data?: T;
    errors?: string[];

    static Set<T>(status: boolean, data?: T, ...errors: string[]) {
        return new ResultModel(status, data, errors);
    }

    static Success<T>(data: T) {
        return new ResultModel(true, data);
    }

    static Error(...errors: string[]) {
        return new ResultModel(false, null, errors);
    }
}