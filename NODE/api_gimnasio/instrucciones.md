API CLIENTES

## Recuperar todos los clientes
Method: GET
URL: /api/clientes 
Headers: auth -> TOKEN
Body: ---
Response: Array con todos los clientes

## Creación de un cliente
Method: POST
URL: /api/clientes 
Headers: auth -> TOKEN
Body: Objeto cliente
Response: Objeto cliente creado, texto confirmación,...etc

## Recuperar Un cliente
Method: GET
URL: /api/clientes/id
Headers: auth -> TOKEN
Body: ---
Response: datos del cliente

## Registro de Usuarios (esquema gimnasio -> Staff)
Method: POST
URL: /api/usuarios/registro
Headers: x
Body: {username,email,password}
Response: 
-Mensaje de confirmación y datos del nuevo usuario