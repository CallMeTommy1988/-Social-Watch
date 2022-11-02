
export namespace ISubject {
    export interface Res {
        id: number;
        subject_no: string;
        subject_type: number;
        user_id: number;
        create_time: Date;
        status: number;
    }

    export interface Req {
        subject_no: string;
        subject_type: number
    }

    export interface Delete {
        id: number,
        no: string
    }

    export interface State {
        list: ISubject.Res[]
    }
}