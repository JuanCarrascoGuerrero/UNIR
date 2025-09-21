import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsersserviceService } from '../../services/usersservice.service';
import { IUser } from '../../interfaces/iuser.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-card',
  imports: [RouterLink],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  useIcons: boolean = true;

  @Input() imgsrc: string = '';
  @Input() nombre: string = '';
  @Input() apellido: string = '';
  @Input() username: string = '';
  @Input() email: string = '';
  @Input() _id: string = '';

  service = inject(UsersserviceService);
  activatedRoute = inject(ActivatedRoute);
  id!: string;
  user!: IUser;

  async ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['_id'];
    });

    if (this.id) {
      const response = await this.service.geUserBy_id(this.id);
      console.log(response);
      if (response) {
        this.user = response;
      }
    }
  }

  async eliminar(idDelete: string) {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'No, cancelar'
    });

    if (result.isConfirmed) {
      const responseFind = await this.service.geUserBy_id(idDelete);
      if (responseFind) {
        const responseDelete = await this.service.deleteUserById(responseFind);
        if (responseDelete) {
          await Swal.fire('OK!', 'Has eliminado al usuario', 'success');
        }
      } else {
        await Swal.fire('Error', 'Ha habido un error eliminando este usuario', 'error');
      }
    } else {
      return;
    }
  }
}
