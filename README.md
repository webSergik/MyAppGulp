#Базовый шаблон для создания веб приложений

Базовый проект, в него входит компиляция sass и jade, поднятие веб-сервера с livereload.

##Рабочее окружение

Для разворачивания проекта вам потребуется NodeJS, npm, gulp.

##Возможности шаблона

* autoprefix для css
* для sass autoprefix и sourcemaps
* jade шаблонизатор для генерации html
* при компиляции jade и sass ловим ошибки с помощью plumber
* собираем svg в спрайт

Если вам не нужен jade и sass можете просто его не использовать.

##Как использовать:

1. Клонируем к себе в папку проект (внимание точка в конце говорит чтобы клонировать в текущую папку) **git clone https://github.com/webSergik/MyAppGulp.git .**

2. Устанавливаем node_modules **npm install**

3. Запускаем вотчер и сервер **gulp**

##Запуск с помощью npm

1. npm run start  - development build

2. npm run production - production build
