import { Controller, Render, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

const app = new AppService();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  root() {
    return { title: 'Login' };
  }

  @Get('/register')
  @Render('index')
  async registerView(@Res() res) {
    res.render('index', {
      title: 'Register',
    });
  }
}
