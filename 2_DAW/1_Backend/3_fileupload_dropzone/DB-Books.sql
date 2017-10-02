CREATE TABLE books(
IDBOOK int NOT NULL AUTO_INCREMENT PRIMARY KEY,
isbn int,
Titulo varchar(255),
Autores varchar(255),
date_reception varchar(255),
edicion varchar(255),
vol int,
Thriller varchar(255),
Drama varchar(255),
Aventura varchar(255),
Comedia varchar(255),
country varchar(255),
provincie varchar(255),
city varchar(255),
avatar varchar(255)
)

INSERT INTO books (isbn, Titulo, Autores, date_reception, edicion, vol,Thriller,Drama,Aventura,Comedia, country, provincie, city, avatar)
VALUES(1234567890,"tttt","tttt","01/02/1997", "Normal",2,"Thriller","Drama","Accion","Suspense","Espanya","Valencia","Ontinyent","media/avatar.png");
