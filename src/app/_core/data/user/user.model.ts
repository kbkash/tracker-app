export class StudentModel{
    username          : string
    email             : string
    first_name        : string
    middle_name       : string
    last_name         : string
    phone_number      : string
    address           : string
    admission_session : string

    constructor(
        username          = '',
        email             = '',
        first_name        = '',
        middle_name       = '',
        last_name         = '',
        phone_number      = '',
        address           = '',
        admission_session = ''
    ){ }
}

// export interface FacultyModel {
//     username          : string
//     email             : string
//     first_name        : string
//     middle_name       : string
//     last_name         : string
//     phone_number      : string
//     address           : string
//     admission_session : string
// }


export class FacultyModel{
    username          : string
    email             : string
    first_name        : string
    middle_name       : string
    last_name         : string
    phone_number      : string
    address           : string
    admission_session : string

    constructor(
        username          : string   =   "",
        email             : string   =   "",
        first_name        : string   =   "",
        middle_name       : string   =   "",
        last_name         : string   =   "",
        phone_number      : string   =   "",
        address           : string   =   "",
        admission_session : string   =   ""
    ){
        this.username           = username
        this.email              = email
        this.first_name         = first_name
        this.middle_name        = middle_name
        this.last_name          = last_name
        this.phone_number       = phone_number
        this.address            = address
        this.admission_session  = admission_session
    }
}