This project devlop with: [Create React App](https://github.com/facebookincubator/create-react-app).

Video: [Calendar Jobsity](https://youtu.be/qWjtny0Ys-A).

## Index

- [Development specifications](#development-specifications)
- [Installation and deployment](#installation-and-deployment)
- [Unit Testing](#unit-testing)
- [List dependicies](#list-dependicies)
- [Bonus points](#bonus-points)

## Development specifications:

This development is focus test selection for developer front-end

## Installation and deployment:

- Como requerimiento basico debe tener instalado Nodejs en el ordenador
- Clone el proyecto con git ejecutando el siguiente comando `git clone https://github.com/FauricioValencia/calendar-jobsity`
- Instale los modulos de nodejs con el siguiente comando `yarn`
- Corra el proyecto con el siguiente comando `yarn start`

## Unit Testing

The components have unit test:

- `Calendar` path: `src/Containers/Calendar/mock/Calendar.test.js`.
- Function create Reminder path: `src/Pages/ReminderCalendar/mock/ReminderCalendar.test.js`.

For execute unit test:

- `yarn test`

## List dependicies:

- `antd`
- `axios`
- `prop-types`
- `react-redux`
- `redux`
- `redux-actions`
- `redux-devtools-extension`
- `redux-mock-store`
- `redux-thunk`

## Bonus points
* Properly handle overflow when multiple reminders appear on the same date.
* Functionality to delete one or ALL the reminders for a specific day