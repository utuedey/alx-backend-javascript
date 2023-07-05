export interface Teacher {
  readonly firstname: string;
  readonly lastname: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
}

// an interface named Directors that extends Teacher

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
(firstname: string, lastname: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements IStudentClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;

 }
}

export function createStudent(ctor: IStudentClassConstructor, firstName: string, lastName: string): IStudentClass {
  return new ctor(firstName, lastName);
}
