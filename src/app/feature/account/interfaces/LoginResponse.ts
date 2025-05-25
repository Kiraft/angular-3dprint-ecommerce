export default interface LoginResponse {
  success: boolean;
  data: {
    id: number;
    email: string;
    username: string;
  };
  message: string;
}
