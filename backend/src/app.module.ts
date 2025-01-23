import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultyModule } from './faculty/faculty.module';
import { SpecialityModule } from './speciality/speciality.module';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { GroupModule } from './group/group.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1111',
      database: 'distance_learning_app',
      autoLoadEntities: true,
      synchronize: true,
    }),
    FacultyModule,
    SpecialityModule,
    UserModule,
    CourseModule,
    GroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
