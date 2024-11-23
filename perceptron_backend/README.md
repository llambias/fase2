Primero se deben instalar los requerimientos en requirements
con ```pip3 install [requirement]``` para cada uno
para activar la base de datos se debe hacer 
``` sudo service postgresql start```
y se debe crear una base de datos

luego se debe crear un archivo .env dentro de la carpeta Tasks
la informacion de la base de datos luego debe colocarse dentro de este archivo con el siguiente fromato

```
SECRET_KEY=<my_secret_key>

POSTGRESQL_NAME=<posgresql_database>
POSTGRESQL_USER=<posgresql_user>
POSTGRESQL_PASS=<postgresql_pass>
POSTGRESQL_HOST=localhost
POSTGRESQL_PORT=5432
DEBUG=True
```

para aplicar las migraciones hay que hacer
```
python manage.py makemigrations
python manage.py migrate
```

para levantar el servidor se debe usar el comando 
``` python3 manage.py runserver``` 