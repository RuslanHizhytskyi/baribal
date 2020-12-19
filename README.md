# team-gulp-template

> Для удобной совместной работы на проекте, рекомендуется всем участникам установить в свой редактор плагин [EditorConfig](https://editorconfig.org/#download).

## Кратко о сборке

### Установить все зависимости

`npm install` or `npm i`

### Основной таск для разработки

`gulp`

### Таск для деплоя на сервер

`gulp deploy`

### Создать компонент

`gulp create --componentName`

Таск автоматически создает:
- `pug`-файл в `src/templates/components/`;
- `scss`-файл в `src/styles/components/`;
- `js`-файл в `src/jss/modules/`.

### Пример подключения js-полифила:

```js
import 'core-js/features/array/includes';
console.log([1, 2, 3, 4].includes(4)); // example
```

Информация о `core-js`: [github](https://github.com/zloirock/core-js).
