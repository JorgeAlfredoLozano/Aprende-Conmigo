# Aprende Conmigo (BackEnd)

**Servidor**:  Express y Sequellize.
**BD**: Postgres
**URL**: http://localhost:3001

# Rutas
## /user 
**POST**:  /login (CREAR USUARIO)
	Descripción: Cuando el usuario se loguea verifica si no existe en la BD y lo almacena para su posterior consumo.
	*URL*: /user/login
	*Handler*: createUserLoginHandler
	*Controller*: createUserLoginController 
	*Flujo*: mainRoute => userRoute => createUserLoginHandler => createUserLoginController 
	*Respuesta*: Usuario creado
|Params|Body  |
|--|--|
|  | displayName|
|  | email |
|  | photoURL |
---
**POST**:  /api/checkout (PASARELA DE PAGO)
	Descripción: Se utiliza para la pasarela de pagos "stripe".
	*URL*: /user/api/checkout
	*Handler*: cheackoutApiHandler
	*Controller*: cheackoutApiController 
	*Flujo*: mainRoute => userRoute => cheackoutApiHandler =>cheackoutApiController 
	*Respuesta*: message:  'successfull payment'
|Params|Body  |
|--|--|
|  | id|
|  | amount|

---
**PUT**:  /update/:email (ACTUALIZACION DATOS USUARIO)
	Descripción: Acutaliza los datos del perfil de usuario.
	*URL*: /user/update/:email
	*Handler*: putUserHandler
	*Controller*: putUserController 
	*Flujo*: mainRoute => userRoute => putUserHandler => putUserController 
	*Respuesta*: message:  '"usuario actualizado"
|Params|Body  |
|--|--|
| email | name|
|  | gender|
|  | phone|
|  | date|

---
**GET**:  /update/:email ( DATOS DEL USUARIO)
	Descripción: Se trae los datos del usuario.
	*URL*: /user/update/:email
	*Handler*: getUserHandler
	*Controller*: getUserController 
	*Flujo*: mainRoute => userRoute => getUserHandler => getUserController 
	*Respuesta*: Datos de usuarios
|Params|Body  |
|--|--|
| email | |

---
**PUT**:  /update/img/:email ( IMAGEN DEL USUARIO)
	Descripción: Permite actualizar la foto de perfil del usuario para cambiar la que viene por defecto de su cuenta google.
	*URL*: /user/update/img/:email  
	*Handler*: putPhotoHandler  
	*Controller*: putPhotoController  
	*Flujo*: mainRoute => userRoute => putPhotoHandler => putPhotoController  
	*Respuesta*: "Photo actualizada"  
|Params|Body  |
|--|--|
| email | assets|

## /publication
**POST**:  /save/:email (CREAR AVISO)
	Descripción: Crea un aviso de clases de un usuario logueado. Guarda la publicacion en el modelo Publication, y relaciona User y Lesson para guardar usuario y materia.
	*URL*: /publication/save/:email 
	*Handler*: postPublicationHandler
	*Controller*: postPublicationController
	*Flujo*: mainRoute => userRoute => postPublicationHandler => postPublicationController
	*Respuesta*: "Publicación creada correctamente."
|Params|Body  |
|--|--|
| email | title: Título de la clase| 
|  | about_class: Descripción de la clase|
|  | about_teacher: Descripción del profesor|
|  | value: Valor de la clase|
|  | grade: Nivel Primario, Secundario o Universitario|
|  | email: Email del profesor|
|  | lesson_name: Nombre de la materia|


---
**PUT**:  /save/:id (ACTUALIZACION/BORRADO AVISO)
	Descripción: En esta ruta se puede tanto actualizar la información del aviso (campos permitidos) como realizar un borrado lógico del aviso.
	*URL*: /publication/save/:id
	*Handler*: putPublicationHandler
	*Controller*: putPublicationController
	*Flujo*: mainRoute => userRoute => putPublicationHandler => putPublicationController
	*Respuesta*: Los datos actualizados
|Params|Body  |
|--|--|
| id| title: Título de la clase| 
|  | about_class: Descripción de la clase|
|  | about_teacher: Descripción del profesor|
|  | value: Valor de la clase|
|  | status: Booleano para borrado lógico|

---
**GET**:  /get/:email (Trae los avisos de un usuario)
	Descripción: Trae todos los avisos de un usuario por su email.
	*URL*: /publication/get/:email
	*Handler*: getAllPublicationHandler
	*Controller*: getAllPublicationController
	*Flujo*: mainRoute => userRoute => getAllPublicationHandler => getAllPublicationController
	*Respuesta*: Todos los avisos de un usuario 
|Params|Body  |
|--|--|
| email| | 

---
## /lesson
**GET**:  /all (TRAER MATERIAS)
	Descripción: Trae todas las materias para que puedan ser renderizadas en los select en el front.
	*URL*: /lesson/all 
	*Handler*: getLessonHandler
	*Controller*: getLessonController
	*Flujo*: mainRoute => userRoute => getLessonHandler => getLessonController
	*Respuesta*: Lista de materias.
|Params|Body  |
|--|--|
| | | 

---
# MODELOS

## /Lesson
|Campo|Propiedades  |
|--|--|
| id | INTEGER auto+ (PK)  
| lesson_name| STRING |

## /Publication
|Campo|Propiedades  |
|--|--|
| id | UUID (PK)|
| title| STRING |
| about_class| STRING |
| about_teacher| STRING |
| grade| STRING |
| status| BOOLEAN|
| UserId| UUID (FK)|

## /User
|Campo|Propiedades  |
|--|--|
| id | UUID (PK)|
| name| STRING |
| email| STRING |
| date| STRING |
| gender| STRING |
| phone| STRING|
| assets| STRING |
| certificate| STRING|

## /RELACIONES
La publicación va a estar relacionada a un usuario y ademas esa publicación va a tener una materia.

USER => PUBLICATION <= LESSON

#LessonPublication (Tabla Intermedia)
|Campo|Propiedades  |
|--|--|
| PublicationId| UUID (PK)|
| LessonId| UUID (PK)|


---
# ESTRUCTURA DE ARCHIVOS

```
server
├─ .gitignore
├─ index.js
├─ package.json
├─ server.js
└─ src
   ├─ app.js
   ├─ controllers
   │  ├─ lesson
   │  │  ├─ getLessonController.js
   │  │  └─ postLessonController.js
   │  ├─ publication
   │  │  ├─ getAllPublicationController.js
   │  │  ├─ postPublicationController.js
   │  │  └─ putPublicationController.js
   │  └─ user
   │     ├─ createUserLoginController.js
   │     ├─ getUserController.js
   │     ├─ putPhotoController.js
   │     └─ putUserController.js
   ├─ db.js
   ├─ handlers
   │  ├─ lesson
   │  │  ├─ getLessonHandler.js
   │  │  └─ postLessonHandler.js
   │  ├─ publication
   │  │  ├─ getAllPublicationHandler.js
   │  │  ├─ postPublicationHandler.js
   │  │  └─ putPublicationHandler.js
   │  └─ user
   │     ├─ ApiCheckout.js
   │     ├─ createUserLoginHandler.js
   │     ├─ getUserHandler.js
   │     ├─ putPhotoHandler.js
   │     └─ putUserHandler.js
   ├─ models
   │  ├─ Lesson.js
   │  ├─ Publication.js
   │  └─ User.js
   ├─ routes
   │  ├─ lessonRoute.js
   │  ├─ mainRoute.js
   │  ├─ publicationRoute.js
   │  └─ userRoute.js
   └─ utils
      └─ lessons.json

```

