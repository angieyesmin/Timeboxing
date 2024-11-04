import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUser(){
    return this.prisma.user.findMany();
    
  }
  
 }
