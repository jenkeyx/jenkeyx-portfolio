export const localization = {
    en: {
        greeting: "Hello",
        introducing: {
            iam: "I am",
            name: "Sergey Mhitaryan"
        },
        navPanel:{
            about: "About",
            projects: "Projects",
            skills: "Skills",
        },
        projects: [
            {
                name: "Megabyte media",
                technologies : ["Next.js", "Web Audio API", "Swagger", "JavaScript", "Material UI"],
                description: "Developed frontend for a university’s media portal with a team of 4 developers. " +
                    "Implemented RESTful API based on OpenAPI Specification. Implemented UI elements for a project " +
                    "component system, and implemented a custom podcast player using React Hooks and Web Audio API. " +
                    "Developed site pages with data fetch using Next.js methods according to Server Side Rendering",
                year: 2021
            },
            {
                name: "Krypton",
                technologies : ["Node.js", "GraphQL", "Strapi", "JWT"],
                description: "Developed node.js script for a Strapi CMS, that fetches product data in an XML file which " +
                    "can be uploaded in CMS, and maps it on Strapi collection types.",
                year: 2022
            },
            {
                name: "Freedom 24",
                technologies : ["HTML5", "SCSS", "JavaScript", "Bootstrap", "GitLab"],
                description: "Implemented US corporate stock options page layout using vanilla JS, SCSS and Bottstrap components",
                year: 2022
            },
            {
                name: "PWRBoard",
                technologies : ["React.js", "React Hooks", "JavaScript", "SCSS", "GitLab"],
                description: "Implemented PWRboard constructor for a project launch on Indiegogo. Constructor allows the\n" +
                    "user to select many batteries, and charger components from the list and put them together on a grid." +
                    " UX is based on dragging components on a grid using Drag and drop API, then the user can rotate or " +
                    "delete them.",
                year: 2022
            },
            {
                name: "Graphene",
                technologies : ["Gatsby.js", "Strapi", "React.js", "GraphQL", "Material UI", "Media Devices API",
                    "Intersection observer API", "GitLab"],
                description: "Developed Video landing component, developed ”Founders” and ”Portfolio” page." +
                    " Implemented component for Video pitch recording using Media Devices API.Implemented data " +
                    "fetching by using GraphQL requests. Developed and implemented collection types in Strapi to " +
                    "store data about company team members. Implemented Team page.",
                year: 2022
            },
            {
                name: "Mind-money",
                technologies : ["React.js", "Redux", "Redux-tools", "Gatsby.js", "Material UI"],
                description: "Implemented user registration and verification form using Redux+ReduxTools state management " +
                    "library and fields validation. Developed UI components based on Material UI components with style " +
                    "overrides by CSS-in-JS libraries.",
                year: 2022
            },
            {
                name: "INTG 101",
                technologies: ["React.js, Recoil, Material UI,CSS-IN-JS, PWA"],
                description: "Implemented component system of UI, created documentation via Storybook libray, " +
                    "developed data flow system of the app based on Recoil. Developed tracker page, statistics, " +
                    "main menu. Implemented PWA features: maskable icon, app caching to be avalable offline, skeleton.",
                year: 2022
            }
        ]
    },
    rus: {
        greeting: "Привет",
        introducing: {
            iam: "Я –",
            name: "Сергей Мхитарян"
        },
        navPanel:{
            about: "Обо мне",
            projects: "Проекты",
            skills: "Навыки",
        },
        projects: [
            {
                name: "Мегабайт медиа",
                technologies : ["Next.js", "Web Audio API", "Swagger", "JavaScript", "Material UI"],
                description: "Разрабатывал компоненты для университетского медиа портала в команде " +
                    "из 4-х разработчиков. Разработал RESTful API на спецификации OpenAPI. Разработал " +
                    "собственную реализацию плеера для подкастов при помощи React Hooks и Web Audio API. " +
                    "В ходе разработки использовали различные методы Next.js с " +
                    "приминением технологии Server Side Rendering",
                year: 2021
            },
            {
                name: "Krypton",
                technologies : ["Node.js", "GraphQL", "Strapi", "JWT"],
                description: "Разработал скрипт на Node.js для Strapi CMS, позволяющий обновлять, создавать " +
                    "данные о перечне и колличестве товаров при помощи таблицы формата .xlsx",
                year: 2022
            },
            {
                name: "Freedom 24",
                technologies : ["HTML5", "SCSS", "JavaScript", "Bootstrap", "GitLab"],
                description: "Разработал страницу \"Опционы акций корпораций США\" для финансовой организации " +
                    "Freedom Finance Технологии: HTML5, SCSS, JavaScript, Bootstrap, GitLab",
                year: 2022
            },
            {
                name: "PWRBoard",
                technologies : ["React.js", "React Hooks", "JavaScript", "SCSS", "GitLab"],
                description: "Разработал конструктор для PWRBoard – стартапа на Indiegogo. Конструктор позволяет\n" +
                    "пользователю размещать устройства питания от различных устройств на виртуальной доске, вращать " +
                    "и удалять их. Механизм основан на drag and drop API.",
                year: 2022
            },
            {
                name: "Graphene",
                technologies : ["Gatsby.js", "Strapi", "React.js", "GraphQL", "Material UI", "Media Devices API",
                    "Intersection observer API", "GitLab"],
                description: "Разработал Лэндинг компонент, страницу \"Founders\", и \"Portfolio\"." +
                    " Разработал формы с валидацией данных, разработал компонент для записи видеосообщения " +
                    "при отправке формы при помощи Media Devices API с возможностью предпросмотра перед отправкой." +
                    " Разработал структуру для хранения данных членов команды в Strapi на соответствующей странице",
                year: 2022
            },
            {
                name: "Mind-money",
                technologies : ["React.js", "Redux", "Redux-tools", "Gatsby.js", "Material UI"],
                description: "Разработал регистрацию и верификацию пользователя при помощи Redux+ReduxTools\n" +
                    "библиотек, валидацию форм. Разработал компоненты UI, основанных на Material UI, с " +
                    "переопределением стилей при помощи CSS-in-JS библиотек",
                year: 2022
            },
            {
                name: "INTG 101",
                technologies: ["React.js, Recoil, Material UI,CSS-IN-JS, PWA"],
                description: "Разработал систему компонентов UI, создал документацию по системе компонентов " +
                    "при помощи Storybook. Внедрил Recoil для менеджмента данных в приложении. Реализовал " +
                    "особенноси PWA приложения: maskable icon, кэширование данных приложения. Разработал трекер, " +
                    "главное меню, страницу со статистикой.",
                year: 2022
            }
        ]
    },
}