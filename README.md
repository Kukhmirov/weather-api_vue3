# weather-api_vue3

не больщое приложение прогноза погоды.<br>
стек -<br>
vue 3 (composition api)<br>
pinia (composition api)<br>
webpack<br>
babel<br>
typeScript<br>
scss<br>
dragable<br>

## Для запуска 
npm run dev

## Для запуска на стороннем сайте

Сделайте сборку проекта npm run build, файлы bundle и style css из папки дист поместить в нужный проект.<br>

подключить скрипт к проекту <br>
const script = document.createElement("script");<br>
script.src = "/src/widget/bundle.js";<br>
script.async = true;<br>
document.body.appendChild(script);<br><br>
далее разместить в нужном месте <div id="widget"></div>
