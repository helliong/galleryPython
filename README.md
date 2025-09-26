

Интерактивная галерея изображений с использованием HTML, CSS, JavaScript и Python.

## О проекте

- **Frontend:**  
  - HTML5, CSS3 ([assets/style/main.css](assets/style/main.css), [assets/style/reset.css](assets/style/reset.css))
  - JavaScript ([assets/script/main.js](assets/script/main.js), [assets/script/gallery.js](assets/script/gallery.js))
- **Backend:**  
  - Python ([assets/backend/main.py](assets/backend/main.py)) — для автоматического создания дерева изображений в формате JSON.

## Как запустить

1. **Сканирование изображений:**
   - Запустите [`assets/backend/main.py`](assets/backend/main.py), чтобы создать файл [`tree.json`](tree.json) с актуальной структурой изображений.
   - Убедитесь, что путь к папке с изображениями в скрипте соответствует вашему расположению.

2. **Запуск галереи:**
   - Откройте [`index.html`](index.html) в браузере.
   - Нажмите на заголовок "Gallery" для отображения галереи.
   - Используйте стрелки для навигации между изображениями.

## Структура проекта

- `assets/img/` — изображения для галереи
- `assets/icons/` — иконки интерфейса
- `assets/script/` — скрипты для работы галереи
- `assets/style/` — стили
- `assets/backend/` — скрипт для генерации дерева изображений

## Требования

-