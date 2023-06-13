import { Injectable } from '@angular/core';
import { format, parse } from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import { UsersData } from './models';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private formDataSubject = new BehaviorSubject<any[]>(USERS);
  formData$ = this.formDataSubject.asObservable();

  updateFormData(data: UsersData[]) {
    this.formDataSubject.next(data);
  }
  addFormData(data: UsersData) {
    const formattedData = {
      ...data,
      born: format(new Date(data.born), 'dd/MM/yyyy'),
    };

    const currentData = this.formDataSubject.value;
    const newData = [...currentData, formattedData];
    this.formDataSubject.next(newData);
  }
}

export const USERS: UsersData[] = [
  {
    id: 1,
    name: 'Ana Paula',
    email: 'teste1@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 35',
    born: '01/01/1980',
  },
  {
    id: 2,
    name: 'José Elias',
    email: 'teste2@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 88',
    born: '01/01/1981',
  },
  {
    id: 3,
    name: 'Luciana',
    email: 'teste3@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 45',
    born: '01/01/1982',
  },
  {
    id: 4,
    name: 'Maria Eduarda',
    email: 'teste4@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 11',
    born: '01/01/1983',
  },
  {
    id: 5,
    name: 'Gustavo',
    email: 'teste5@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 30',
    born: '01/01/1984',
  },
  {
    id: 6,
    name: 'Carolina',
    email: 'teste6@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 33',
    born: '01/01/1985',
  },
  {
    id: 7,
    name: 'Jair',
    email: 'teste7@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 44',
    born: '01/01/1986',
  },
  {
    id: 8,
    name: 'Fernando',
    email: 'teste8@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 66',
    born: '01/01/1987',
  },
  {
    id: 9,
    name: 'Francisco',
    email: 'teste9@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 78',
    born: '01/01/1988',
  },
  {
    id: 10,
    name: 'Otávio',
    email: 'teste10@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 24',
    born: '01/01/1989',
  },
  {
    id: 11,
    name: 'Cláudia',
    email: 'teste11@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 2',
    born: '01/01/1990',
  },
  {
    id: 12,
    name: 'Alessandra',
    email: 'teste12@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 60',
    born: '01/01/1991',
  },
  {
    id: 13,
    name: 'Jussara',
    email: 'teste13@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 67',
    born: '01/01/1992',
  },
  {
    id: 14,
    name: 'Cintia',
    email: 'teste14@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 5',
    born: '01/01/1993',
  },
  {
    id: 15,
    name: 'Rodolfo',
    email: 'teste15@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 135',
    born: '01/01/1994',
  },
  {
    id: 16,
    name: 'Artur',
    email: 'teste16@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 6635',
    born: '01/01/1995',
  },
  {
    id: 17,
    name: 'Eloise',
    email: 'teste17@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 935',
    born: '01/01/1996',
  },
  {
    id: 18,
    name: 'Manu',
    email: 'teste18@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 235',
    born: '01/01/1997',
  },
  {
    id: 19,
    name: 'Carlos',
    email: 'teste19@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 635',
    born: '01/01/1998',
  },
  {
    id: 20,
    name: 'Bárbara',
    email: 'teste20@teste.com.br',
    phone: 21986543789,
    address: 'Rua Pereira de Siqueira, 535',
    born: '01/01/2000',
  },
];

USERS.forEach((e) => {
  const bornDate = parse(e.born, 'dd/MM/yyyy', new Date());
  e.born = format(bornDate, 'dd/MM/yyyy');
});
