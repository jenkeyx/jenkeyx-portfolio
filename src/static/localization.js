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
        about:{
            description: "I am Sergey Mkhitaryan, a front-end developer from St. Petersburg." +
                " With 2 years of experience in web development, I have gained skills in solving " +
                "a wide range of tasks, from developing new applications to improving existing ones, " +
                "to mentoring and code reviews. In my work, I strive to implement the client's requirements " +
                "with attention to detail.",
            facts:{
                experience: "Years of experience in front-end developing",
                projects: "Projects"
            }
        },
        projects: [
            {
                id: "megabyte",
                name: "Megabyte media",
                technologies : ["Next.js", "Web Audio API", "Swagger", "JavaScript"],
                description: "A website for a media outlet affiliated with ITMO University was created and " +
                    "launched by a team of 4 people. I developed interactive surveys with editorial comments " +
                    "similar to those on the Meduza website. I also created a page on which all studio podcasts," +
                    " with dozens or even hundreds of episodes, were collected and published on our own platform. " +
                    "Additionally, I designed a player for listening to the podcasts with a custom layout. " +
                    "The website was ranked among the top three \"Best Websites\" by the youth media center \"SEC\".",
                year: 2021,
                pictures:{
                    mainPic: "megabyte/mb-main.png",
                    showcases: [
                        {
                            src: "megabyte/player.png",
                            alt: "A page featuring a podcast episode, player, and brief summary."
                        },
                        {
                            src: "megabyte/podcast-page.png",
                            alt: "All podcasts are now gathered in one place."
                        },
                        {
                            src: "megabyte/poll-title.png",
                            alt: "A page with a poster and a description of the quiz"
                        },
                        {
                            src: "megabyte/poll.png",
                            alt: "Each user response is accompanied by a relevant editorial comment"
                        }
                    ]
                }
            },
            {
                id: "krypton",
                name: "Krypton",
                technologies : ["Node.js", "GraphQL", "Strapi", "JWT"],
                description: "I developed a program for CMS Strapi that enables the loading of 180+ " +
                    "products into the database from an xlsx table, while also importing corresponding " +
                    "photographs. The program takes into account any changes to the products and prevents " +
                    "duplicates, thus considerably simplifying the management of goods.",
                year: 2022,
                pictures:{
                    mainPic: "krypton/krypton-main.png",
                    showcases: [
                        {
                            src: "krypton/catalog.png",
                            alt: "Site catalog based on .xslx doc"
                        },
                    ]
                }
            },
            {
                id: "freedom",
                name: "Freedom 24",
                technologies : ["HTML5", "SCSS", "JavaScript", "Bootstrap", "GitLab"],
                description: "Implemented US corporate stock options page layout using Vanilla-JS, " +
                    "SCSS and Bootstrap components with adaptive-response design",
                year: 2022,
                pictures:{
                    mainPic: "freedom/freedom-main.png",
                    showcases: [
                        {
                            src: "freedom/img1.png",
                            alt: ""
                        },
                        {
                            src: "freedom/img2.png",
                            alt: ""
                        },
                    ]
                }
            },
            {
                id:"pwrboard",
                name: "PWRBoard",
                technologies : ["React.js", "React Hooks", "JavaScript", "SCSS", "GitLab"],
                description: "Created the PWRboard constructor for an advertising company on IndieGoGo. " +
                    "The constructor demonstrates the capabilities of the product, " +
                    "allowing user to place 45+ accessories and batteries from various " +
                    "manufactures on the charging station  ",
                year: 2022,
                pictures:{
                    mainPic: "pwrboard/pwrboard-main.png",
                    showcases: [
                        {
                            src: "pwrboard/constructor-demo.gif",
                            alt: "The user can place the devices in any order, rotate and delete them, " +
                                "the constructor prevents the components from overlapping"
                        },
                    ]
                }
            },
            {
                id:"graphene",
                name: "Graphene",
                technologies : ["Gatsby.js", "Strapi", "React.js", "GraphQL", "Material UI", "Media Devices API",
                    "Intersection observer API", "GitLab"],
                description: "Developed the landing page and pages of the main sections for the website of the " +
                    "american venture company Graphene. Forms with validation have been implemented through which " +
                    "clients and business founders can contact the company.",
                year: 2022,
                pictures:{
                    mainPic: "graphene/graphene-main.png",
                    showcases: [
                        {
                            src: "graphene/landing.png",
                            alt: "Video landing"
                        },
                        {
                            src: "graphene/video-pitch.gif",
                            alt: "A founder can record elevator-pitch, outlining the idea of his business " +
                                "and telling about himself in more detail. The pitch can be overwritten and viewed before sanding. " +
                                "Also works on mobile devices"
                        },
                        {
                            src: "graphene/apply-for-funding.png",
                            alt: "A form for contacting the founders with the company"
                        },
                        {
                            src: "graphene/team-page.png",
                            alt: "Company team page"
                        },
                        {
                            src: "graphene/member-page.png",
                            alt: "Employee's page with social profiles and a brief biography"
                        },
                        {
                            src: "graphene/feedback-form.png",
                            alt: "Investor feedback form with the company"
                        },
                    ]
                }
            },
            {
                id:"mindmoney",
                name: "Mind-money",
                technologies : ["React.js", "Redux", "Redux-tools", "Gatsby.js", "Material UI"],
                description: "Created the Mind-money user step-by-step registration forms in the Tradernet" +
                    " Freedom finance financial network system. Thus, the user registers directly through " +
                    "the company's website, instead of registering on another resource.",
                year: 2022,
                pictures:{
                    mainPic: "mindmoney/mindmoney-main.png",
                    showcases: [
                        {
                            src: "mindmoney/reg-init-step.png",
                            alt: "Pre-registration of a user with verification of the existence of an account"
                        },
                        {
                            src: "mindmoney/economic-profile.png",
                            alt: "Formation of the economic profile of the account"
                        },
                        {
                            src: "mindmoney/reg-complete.png",
                            alt: "Continuing registration on a mobile device"
                        },

                    ]
                }
            },
            {
                id:"intg",
                name: "INTG 101",
                technologies: ["React.js", "Recoil", "Material UI","CSS-IN-JS", "PWA"],
                description: "Took an active part in the development of the PWA habits tracker application " +
                    "as a leading front-end developer. Created the architecture of the client part of the " +
                    "application, developed a system of UI components, aiming to bring the UX of the " +
                    "application closer to the native app.",
                year: 2022,
                pictures:{
                    mainPic: "intg/intg-main.webp",
                    showcases: [
                        {
                            src: "intg/tracker.webp",
                            alt: "A tracker page where a user can rate themselves by three categories of behaviors"
                        },
                        {
                            src: "intg/sessions-and-progress.webp",
                            alt: "Statistics and user progress against the background of the overall progress of the team"
                        },
                        {
                            src: "intg/ui-demo.gif",
                            alt: "App UX demonstration"
                        },
                    ]
                }
            }
        ],
        footer:{
            message:"Let's work together!"
        }
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
        about:{
            description: "Я – Сергей Мхитарян, front-end разработчик из Санкт-Петербурга. За 2 года работы " +
                "в сфере веб-разработки я получил опыт решения широкого спектра задач: создания новых и " +
                "улучшения старых приложений, до менторства и код-ревью. В своей работе я старался наиболее " +
                "точно реализовать все желания клиента с вниманием к деталям. ",
            facts:{
                experience: "Года опыта в front-end разработке",
                projects: "Проектов"
            }
        },
        projects: [
            {
                id:"megabyte",
                name: "Мегабайт медиа",
                technologies : ["Next.js", "Web Audio API", "Swagger", "JavaScript"],
                description: "Создан и запущен сайт СМИ при университете ИТМО в команде из 4-х человек. " +
                    "Мною разработаны интерактивные опросы с комментариями редакции на манер тестов Meduza. Создана страница, " +
                    "где собраны и опубликованы на собственной платформе все подкасты студии с десятками и " +
                    "сотнями выпусков в каждом. Разработан плеер для прослушивания подкастов  с индивидуальным дизайном. " +
                    "Сайт попал в тройку лауреатов «Лучший сайт» по версии молодёжного медиацентра «НОС» ",
                year: 2021,
                pictures:{
                    mainPic: "megabyte/mb-main.png",
                    showcases: [
                        {
                            src: "megabyte/player.png",
                            alt: "Страница с выпуском подкаста, плеером и кратким содержанием"
                        },
                        {
                            src: "megabyte/podcast-page.png",
                            alt: "Все подкасты теперь собраны в одном месте."
                        },
                        {
                            src: "megabyte/poll-title.png",
                            alt: "Страница с постером и описанием теста"
                        },
                        {
                            src: "megabyte/poll.png",
                            alt: "Каждый ответ пользователя сопровождается соответствующим комментарием редакции"
                        }
                    ]
                }
            },
            {
                id:"krypton",
                name: "Krypton",
                technologies : ["Node.js", "GraphQL", "Strapi", "JWT"],
                description: "Разработал программу для CMS Strapi, которая позволяет загружать " +
                    "180+ товаров в базу данных из таблицы формата xlsx, подгружая соответствующие " +
                    "фотографии. Программа учитывает изменения товаров и не допускает дубликатов, " +
                    "что заметно упрощает товарный менеджмент.",
                year: 2022,
                pictures:{
                    mainPic: "krypton/krypton-main.png",
                    showcases: [
                        {
                            src: "krypton/catalog.png",
                            alt: "Каталог товаров, заполненный благодаря работе скрипта"
                        },
                    ]
                }
            },
            {
                id:"freedom",
                name: "Freedom 24",
                technologies : ["HTML5", "SCSS", "JavaScript", "Bootstrap", "GitLab"],
                description: "Разработал страницу \"Опционы акций корпораций США\" при помощи SCSS, Vanilla-JS " +
                    "и Bootstrap для финансовой организации Freedom Finance c адаптивно-отзывчивым дизайном",
                year: 2022,
                pictures:{
                    mainPic: "freedom/freedom-main.png",
                    showcases: [
                        {
                            src: "freedom/img1.png",
                            alt: ""
                        },
                        {
                            src: "freedom/img2.png",
                            alt: ""
                        },
                    ]
                }
            },
            {
                id:"pwrboard",
                name: "PWRBoard",
                technologies : ["React.js", "React Hooks", "JavaScript", "SCSS", "GitLab"],
                description: "Создал конструктор стартапа PWRboard для рекламной кампании на Indiegogo. " +
                    "Конструктор позволяет пользователю ознакомиться с возможностями продукта, позволяя " +
                    "разместить на зарядной станции более 45 аксессуаров и аккумуляторов от различных производителей.",
                year: 2022,
                pictures:{
                    mainPic: "pwrboard/pwrboard-main.png",
                    showcases: [
                        {
                            src: "pwrboard/constructor-demo.gif",
                            alt: "Пользователь может размещать устройства в любом порядке, вращать и " +
                                "удалять их, конструктор предотвращает наложения компонентов."
                        },
                    ]
                }
            },
            {
                id:"graphene",
                name: "Graphene",
                technologies : ["Gatsby.js", "Strapi", "React.js", "GraphQL", "Material UI", "Media Devices API",
                    "Intersection observer API", "GitLab"],
                description: "Разработал лендинг и страницы основных разделов для сайта американской венчурной " +
                    "компании Graphene. Реализованы формы с валидацией, через которые клиенты и учредители " +
                    "бизнесов могут связываться с компанией. ",
                year: 2022,
                pictures:{
                    mainPic: "graphene/graphene-main.png",
                    showcases: [
                        {
                            src: "graphene/landing.png",
                            alt: "Видео-лэндинг"
                        },
                        {
                            src: "graphene/video-pitch.gif",
                            alt: "Учередитель может записать elevator-pitch, " +
                                "изложив идею своего бизнеса и рассказав о себе подробнее. " +
                                "Питч можно перезаписать и просмотреть перед отправкой в том числе" +
                                " и на мобильных устройствах"
                        },
                        {
                            src: "graphene/apply-for-funding.png",
                            alt: "Форма для связи учередителей с компанией"
                        },
                        {
                            src: "graphene/team-page.png",
                            alt: "Страница сотрудников компании"
                        },
                        {
                            src: "graphene/member-page.png",
                            alt: "Страница отдельного сотрудника с соц. профилями и краткой биографией"
                        },
                        {
                            src: "graphene/feedback-form.png",
                            alt: "Форма для обратной связи инвесторов с компанией"
                        },
                    ]
                }
            },
            {
                id:"mindmoney",
                name: "Mind-money",
                technologies : ["React.js", "Redux", "Redux-tools", "Gatsby.js", "Material UI"],
                description: "Создал формы пошаговой регистрации пользователя Mind-money в системе финансовой " +
                    "сети Tradernet Freedom finance. Таким образом пользователь регистрируется напрямую через " +
                    "сайт компании, вместо регистрации на ином ресурсе.",
                year: 2022,
                pictures:{
                    mainPic: "mindmoney/mindmoney-main.png",
                    showcases: [
                        {
                            src: "mindmoney/reg-init-step.png",
                            alt: "Предварительная регистрация пользователя с проверкой на существование учетной записи"
                        },
                        {
                            src: "mindmoney/economic-profile.png",
                            alt: "Формирование экономического профиля учетной записи"
                        },
                        {
                            src: "mindmoney/reg-complete.png",
                            alt: "Продолжение регистрации на мобильном устройстве"
                        },
                    ]
                }
            },
            {
                id:"intg",
                name: "INTG 101",
                technologies: ["React.js", "Recoil", "Material UI","CSS-IN-JS", "PWA"],
                description: "Принимал активное участие в разработке и предварителном запусуке PWA приложения-трекера привычек" +
                    " в качестве ведущего front-end разработчика. Создал архитектуру клиентской части приложения, разработал " +
                    "систему UI-компонентов, стремясь приблизить UX приложения к native app",
                year: 2022,
                pictures:{
                    mainPic: "intg/intg-main.webp",
                    showcases: [
                        {
                            src: "intg/tracker.webp",
                            alt: "Страница трекера, где пользователь может оценить себя по трем категориям поведений"
                        },
                        {
                            src: "intg/sessions-and-progress.webp",
                            alt: "Статистика и прогресс пользователя на фоне общего прогресса команды"
                        },
                        {
                            src: "intg/ui-demo.gif",
                            alt: "Демонстрация UX приложения"
                        },
                    ]
                }
            }
        ],
        footer:{
            message:"Давайте работать вместе!"
        }
    },
}