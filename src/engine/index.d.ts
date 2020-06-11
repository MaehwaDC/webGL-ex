
declare namespace Core {

}

declare namespace Utils {
  export type SomeObject<Val = any> = { [key: string]: Val };
  export type Enum = SomeObject;
}
