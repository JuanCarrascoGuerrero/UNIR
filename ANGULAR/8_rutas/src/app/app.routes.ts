import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Error404 } from './pages/error404/error404';
import { OurServices } from './pages/our-services/our-services';
import { WorkViewComponent } from './pages/work-view/work-view.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { DescripcionComponent } from './pages/productos/descripcion/descripcion.component';
import { OrigenComponent } from './pages/productos/origen/origen.component';

export const routes: Routes = [
    // Definido como objeto json con path y componente que carga

    // Como creamos una ruta que redirige a otra...
    //Ruta -> ruta hija
    {path:'',pathMatch:'full', redirectTo: 'home'},  // SIEMPRE LA PRIMERA

    {path:'home',component: Home},  
    {path:'contact',component: Contact},
    {path:'servicios',component: OurServices},
    {path:'productos',component: ProductosComponent},

    //Ruta con parte dinámica!!!!
    //  / ':'  y el variable
    {path:'servicios/:url',component: WorkViewComponent},

    //Ejemplo parte variable por id (para privado NO SEO FRIENDLY)
                                                        //Añadimos el pro de Interface compuestas?
    {path:'productos/:id',component: ProductoComponent, 
        children:[
            {path:'',component: DescripcionComponent},              //opcion a <-- RUTA VACIA HIJA SI QUEREMOS ESTABLECER UNA RUTA
            //{path:'',pathMatch:'full', redirectTo: 'descripcion'},  //opcion b <-- PREDEFINIDA (/descripcion en este caso)
            {path:'descripcion',component: DescripcionComponent},
            {path:'origen',component: OrigenComponent},
        ]},
        

    {path:'**', component: Error404}  //SIEMPRE LA ULTIMA, EL 404 
];
