import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GymsModule } from './gyms/gyms.module';
import { GradesModule } from './grades/grades.module';
import { ClimbsModule } from './climbs/climbs.module';
import { LeaguesModule } from './leagues/leagues.module';
import { TrainingsModule } from './trainings/trainings.module';
import { ListsModule } from './lists/lists.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    GymsModule,
    GradesModule,
    ClimbsModule,
    LeaguesModule,
    TrainingsModule,
    ListsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
