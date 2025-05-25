export default interface User {
	id: number,
	email: string,
	username: string,
	password: string,
	name?: string,
	lastname?: string,
	age?: string,
	rfc?: string,
	phone?: string,
	codePhone?: string,
	avatar: string,
  hobbies: string
}
