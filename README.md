# Stackoverflow

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

# Запуск

Так как используется backend, то реализовал несколько вариантов:

1) Docker:

Необходим docker на машине и утилита docker-compose
```
cd stackoverflow
docker-compose build
docker-compose up
```
Сервер запустится на 3000 порте. Монга на 27017. Перед запуском стоит убедиться, что порты не заняты

2) Запуск вручную

Необходима установленная mongo и nodejs(v10.12.0). Перед запуском нужно поменять в файле stackoverflow/server/.env срочку с mongodb://mongo:27017/stackoverflow на mongodb://<your-address>/stackoverflow

```
cd stackoverflow
npm run build
cd ./server
npm run dev
```

Сервер подключается к порту 3000

3) Запуск без сервера. Требуется nodejs(v10.12.0). Порт 4200. Сервисы в данном варианте замоканы, поэтому можно смело вводить любой логин и пароль
```
cd stackoverflow
npm run mock
```

P.S. Так как на ревью меня не будет, сразу хочу уточнить пару моментов. Бек писал первый раз и на скорую руку, поэтому код сервера выглядит не очень. На фронте в целях экономии времени описывал любой компонент, который использует сервисы как Container(хоть в нем и есть View). Форма forgot не реализована, содержится как view. Обработка ошибок сервера работает только на login. Так как не вижу смысла реализовывать все это в тестовом задании.
