<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Arima CRUD</h3>

<div align="center">

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)

## 🧐 About <a name = "about"></a>

Arima CRUD

## 🏁 Getting Started <a name = "getting_started"></a>

Desde la raíz del proyecto ejecutar

```bash
docker-compose up --build
```

Cuando finalice el build y se levanten los serivicios se puede acceder a la vista principial en **localhost:3000**.

Se pueden modificar los puertos a través del **.env** que se encuentra en la raíz.

Para ver los endpoints de la api se pueden consultar en **localhost:3001/api**.

## Seed

Para realizar el seed de la base de datos.

```bash
docker exec -it api npm run seed:run
```

Para hacer drop de la base de datos

```bash
docker exec -it api npm run schema:drop
```

Para sincronizar los esquemas

```bash
docker exec -it api npm run schema:sync
```
