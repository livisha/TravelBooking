import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpRequestBody } from "./dto/signBody.response.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}

    @Post('signUp')
    async signUp(@Body() signUpRequestBody:SignUpRequestBody){
        try{
        return await this.authService.signUp(signUpRequestBody);
        } catch (error) {
            throw new Error('Error during SignUp');
          }
 
    }

    @Post('login')
    async login(@Body() userCredentials:{email:string, password: string }){
        try{
        const user = await this.authService.validateUser(userCredentials.email, userCredentials.password);
        console.log(user)
        if (user) {
            const token = await this.authService.generateToken({ email: user.email, sub: user.userid.toString() });
            return { access_token: token };
          } else {
            throw new Error('Invalid credentials');
          }
        } catch (error) {
            throw new Error('Error during login');
          }
 
    }
}