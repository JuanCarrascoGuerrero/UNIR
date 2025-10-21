## APP Frontend para CRM de Empleados.*
- usar tailwind como framework de css.
  - https://tailwindcss.com/docs
  - https://tailwindcss.com/docs/installation/framework-guides/angular

Url muestra:
   https://crm-empleados.onrender.com/api/usuario/login
  https://crm-empleados.onrender.com/api/empleados
    - entidades: USUARIOS, EMPLEADOS (interfaces, servicios)

Componentes: - Pages
- Publica
  - HOME => /home => HomeComponent - Hero bienvenido y menu login y a registro
  - LOGIN => /login => LoginComponent - Formulario de login/ Template
  - REGISTRO => /register => RegisterComponent - Formulario de tipo Model.
- Privadas (Protegidas por contraseña)  
  - Dashboard =>  "/dashboard" => DashboardComponent
        - Rutas Hijas
            - Lista empleados
            - Crear un empleado
            - Actualizar un empleado
            - Borrar empleado (no va ser ruta si no evento)
  
Shared:
  - NavDashboard va ser el header dentro de la parte privada.

Services:
  Employees
  Users

Interfaces:
  IEmployee
  IUser

para logarse en la app 
{
  "email": "admin@gmail.com",
  "password": "12345"
}
