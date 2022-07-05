import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { ContactInfo } from './contact-info.entity';
import { Meeting } from './meeting.entity';
import { Task } from './task.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
    @InjectRepository(ContactInfo) private contactRepo: Repository<ContactInfo>,
    @InjectRepository(Meeting) private meetingRepo: Repository<Meeting>,
    @InjectRepository(Task) private taskRepo: Repository<Task>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async init() {
    const ceo = this.employeeRepo.create({ name: 'Mr. CEO' });
    await this.employeeRepo.save(ceo);

    const ceoContactInfo = this.contactRepo.create({
      email: 'email@email.com',
    });

    ceoContactInfo.employee = ceo;
    await this.contactRepo.save(ceoContactInfo);

    const manager = this.employeeRepo.create({ name: 'foo', manager: ceo });

    const task1 = this.taskRepo.create({ name: 'hire people' });
    const task2 = this.taskRepo.create({ name: 'create sales ppt' });

    await this.taskRepo.save(task1);
    await this.taskRepo.save(task2);

    const meeting1 = this.meetingRepo.create({ zoomUrl: 'zoom.com' });
    meeting1.attendees = [ceo];

    await this.meetingRepo.save(meeting1);

    manager.tasks = [task1, task2];
    manager.meetings = [meeting1];
    this.employeeRepo.save(manager);
  }

  async getEmployeeById(id: number) {
    return this.employeeRepo.findOne({
      where: { id: id },
      relations: [
        'tasks',
        'manager',
        'contactInfo',
        'meetings',
        'directReports',
      ],
    });
  }
}
