import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FooterMobile from "../components/layout/FooterMobile";
import Cookie from "../components/cookie/Cookie";
import {MenuAll, MenuStyles} from "../components/layout/Layout";
import classes from "./Pages.module.scss";

const CookiePage = () => {
    return (
        <div>
            <MenuAll/>
            <Header/>
            <div className={classes.Container}>
                <div className={classes.CookiePage}>

                    <h2 className="cookie-section__cookie-title">Политика применения Cookie</h2>
                    <div className={classes.Label}>Получение cookie</div>
                    <div className="cookie-section__text-block"><p className="cookie-section__text">ООО «Лента»
                        использует
                        файлы cookie с целью персонализации сервисов и повышения удобства пользования веб-сайтом
                        https://career.lenta.com/ (далее – Сайт). Cookie представляют собой небольшие файлы, которые
                        сохраняются в вашем интернет-браузере или в операционной системе вашего компьютера (мобильного
                        устройства) при использовании Сайта. Cookie содержат информацию о предыдущих посещениях вами
                        Сайта.
                        Cookie позволяют, например, сохранить ранее введённые на Сайте данные, благодаря чему их не
                        требуется вводить заново при следующем посещении Сайта или при переходе между страницами Сайта.
                        Данные пользователей, полученные таким способом, обезличиваются посредством технических мер.
                        Поэтому
                        невозможно установить связь между этими данными и пользователем, посетившим Сайт. Эти данные не
                        сохраняются вместе с другими персональными данными пользователей.</p><p
                        className="cookie-section__text">Продолжая использовать наш Сайт и нажимая на кнопку «Согласен»,
                        вы
                        даете согласие на обработку данных, содержащихся в cookie.</p></div>
                    <div className={classes.Label}>Цели обработки cookie</div>
                    <div className="cookie-section__text-block"><p className="cookie-section__text">Файлы cookie
                        используются нами в следующих целях:</p>
                        <div className="cookie-section__text">
                            <ul className="cookie-section__without-line-style">
                                <li>функционирование Сайта и улучшение его работы;</li>
                                <li>повышения защищенности систем безопасности Сайта;</li>
                                <li>идентификации пользователя;</li>
                                <li>анализ пользовательского поведения посетителей Сайта, определение их предпочтений;
                                </li>
                                <li> предоставление целевой информации по продуктам и услугам, в т.ч. рекламы.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.Label}>Виды используемых cookie</div>
                    <div className="cookie-section__text-block"><p className="cookie-section__text">Файлы cookie,
                        используемые Сайтом, можно разделить в соответствии с указанными выше целями на четыре вида:</p>
                        <p
                            className="cookie-section__text">Эти файлы cookie необходимы для работы Сайта и не могут
                            быть
                            отключены. Они устанавливаются только в ответ на ваши действия, например, установку ваших
                            настроек
                            конфиденциальности, вход в систему (введение логина и пароля) или заполнение форм на Сайте.
                            Вы
                            можете настроить свой браузер так, чтобы он блокировал или предупреждал вас об этих файлах
                            cookie,
                            но в этом случае некоторые части Сайта не будут работать. Эти файлы cookie не хранят никакой
                            личной
                            информации.</p><p className="cookie-section__text_underline">Пример необходимых cookie</p>
                        <div className="cookie-section__text">
                            <ul className="cookie-section__with-line-style">
                                <li>IP-адрес устройства, тип его операционной системы, тип браузера, домен, иные
                                    системные
                                    настройки;
                                </li>
                                <li>языковые настройки системы, страна, часовой пояс;</li>
                                <li>место нахождения устройства, с которого выполнен вход на Сайт;</li>
                                <li>данные входа (логин, пароль), иных учётных данных;</li>
                                <li>продукты в корзине.</li>
                                <li>Производительные cookie</li>
                            </ul>
                        </div>
                        <p className="cookie-section__text">Эти файлы cookie позволяют нам подсчитать количество
                            посещений и
                            определить, откуда вы пришли на Сайт. Так мы можем измерить и улучшить производительность
                            Сайта.
                            Например, мы можем узнать, какие страницы наиболее и наименее популярны, и увидеть, как
                            посетители перемещаются по сайту. Вся информация, собираемая этими файлами cookie, является
                            анонимной. Если вы не разрешите использование этих файлов cookie, мы не узнаем, когда вы
                            посетили Сайт.</p><p className="cookie-section__text_underline">Пример производительных
                            cookie:</p>
                        <div className="cookie-section__text">
                            <ul className="cookie-section__with-line-style">
                                <li>веб-сайты, которые вы посещали до того, как зашли на Сайт;</li>
                                <li>информация о том, посещали ли вы ранее Сайт или же это первое посещение;</li>
                                <li>частота посещений;</li>
                                <li>страницы Сайта, на которые вы заходили, и время, которое вы там провели;</li>
                                <li>веб-сайты, которые вы посещаете после того, как покидаете Сайт.</li>
                                <li>Функциональные cookie</li>
                            </ul>
                        </div>
                        <p className="cookie-section__text">Эти файлы cookie позволяют запомнить выбранные вами
                            настройки,
                            которые будут автоматически активизированы при последующих посещениях вами Сайта, помогают
                            предоставить расширенные функциональные возможности и персонализацию. Они могут быть
                            установлены
                            нами или сторонними поставщиками услуг, услуги которых мы добавили на наши страницы. Если вы
                            не
                            разрешите использование этих файлов cookie, некоторые или все эти службы могут работать
                            некорректно.</p><p className="cookie-section__text_underline">Пример функциональных
                            cookie:</p>
                        <div className="cookie-section__text">
                            <ul className="cookie-section__with-line-style">
                                <li>использование функций Сайта;</li>
                                <li>ваш магазин Лента.</li>
                                <li>Целевые cookie</li>
                            </ul>
                        </div>
                        <p className="cookie-section__text">Этот вид файлов cookie позволяет нам получать информацию о
                            ваших
                            интересах и потребностях и предоставлять вам наиболее актуальный контент. Данная информация
                            собирается на условиях анонимности сторонними поставщиками веб-услуг. Эти компании могут
                            использовать их для создания профиля ваших интересов и показа релевантной рекламы на других
                            сайтах. Они не хранят непосредственно личную информацию, а основаны на уникальной
                            идентификации
                            вашего браузера и интернет-устройства. Если вы не разрешите использование этих файлов
                            cookie, вы
                            получите менее адресную рекламу.</p><p className="cookie-section__text_underline">Пример
                            целевых
                            cookie:</p>
                        <div className="cookie-section__text">
                            <ul className="cookie-section__with-line-style">
                                <li>введённые поисковые термины;</li>
                                <li>демографические данные (пол, возраст, и т.п.).</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.Label}>Как отказаться от использования cookie</div>
                    <div className="cookie-section__text-block"><p className="cookie-section__text">При первом посещении
                        Сайта может быть запрошено ваше согласие на использование файлов cookie со ссылкой на данную
                        Политику. Одновременно приводится информация о том, каким образом можно отказаться от сохранения
                        файлов cookie в настройках браузера (кроме необходимых).</p><p
                        className="cookie-section__text">Если
                        после того, как вы одобрили использование файлов cookie, вы захотите изменить свое решение, вы
                        сможете сделать это, удалив файлы cookie, хранящиеся в вашем браузере. После этого Сайт может
                        повторно запросить ваше согласие на использование файлов cookie, и вы сможете сделать иной
                        выбор.</p><p className="cookie-section__text">После отключения функции использования cookie в
                        веб-браузере Вы можете обнаружить, что некоторые разделы Сайта не работают должным образом.
                        Инструкции по управлению файлами cookie обычно можно найти в справочной службе браузера.</p>
                    </div>
                    <div className={classes.Label}>Сроки хранения файлов cookie</div>
                    <div className="cookie-section__text-block"><p className="cookie-section__text">Файлы cookie будут
                        храниться на вашем устройстве в течение периода, необходимого для достижения их цели, после чего
                        они
                        будут автоматически удалены с вашего устройства. Для различных видов файлов cookie срок хранения
                        на
                        вашем устройстве может отличаться.</p></div>
                </div>
            </div>
            <Footer/>
            <FooterMobile/>
            <Cookie/>
        </div>
    );
};

export default CookiePage;