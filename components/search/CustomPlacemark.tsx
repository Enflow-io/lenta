import { Placemark, withYMaps } from "@pbe/react-yandex-maps";
import React, { useEffect } from "react";
import $ from 'jquery';
import classes from "./Placemark.module.scss";
import ReactTooltip from "react-tooltip";
import ReactDOMServer from 'react-dom/server'
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';


function UserPlacemarkBalloon(props: any) {
    console.log("UserPlacemarkBalloon", props)
    const vac = props.user.vacancies;

    useEffect(() => {
        ReactTooltip.rebuild();
    })
    const lis = vac.map((el: any) => {
        return ReactDOMServer.renderToStaticMarkup(<>

            <li data-id={el.vacancyId} className="itemInMap" title="Нажми, чтобы узнать больше"
                id="placemark-balloon__profile-btn_user-id_${props.user.id}">
                <svg width="20" height="20" viewBox="0 0 27 26" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13.0039" cy="13" r="13" fill="#35219A" />
                    <g clip-path="url(#clip0_480_457)">
                        <path
                            d="M13.3904 13.3876L17.3997 13.3876C17.4973 13.38 17.5885 13.3359 17.6551 13.264C17.7216 13.1921 17.7586 13.0978 17.7586 12.9999C17.7586 12.9019 17.7216 12.8076 17.6551 12.7357C17.5885 12.6638 17.4973 12.6197 17.3997 12.6121L13.3904 12.6121L13.3931 8.60009C13.3856 8.50243 13.3415 8.41122 13.2696 8.34469C13.1977 8.27815 13.1034 8.24119 13.0054 8.24119C12.9075 8.24119 12.8131 8.27815 12.7412 8.34469C12.6694 8.41122 12.6252 8.50243 12.6177 8.60009L12.6149 12.6121L8.60288 12.6094C8.54944 12.6052 8.49572 12.6122 8.4451 12.6298C8.39448 12.6474 8.34805 12.6753 8.30871 12.7117C8.26938 12.7481 8.238 12.7923 8.21653 12.8414C8.19507 12.8905 8.18399 12.9435 8.18399 12.9971C8.18399 13.0507 8.19507 13.1037 8.21653 13.1528C8.238 13.202 8.26938 13.2461 8.30871 13.2825C8.34805 13.3189 8.39448 13.3468 8.4451 13.3644C8.49572 13.382 8.54944 13.389 8.60288 13.3848L12.6149 13.3876L12.6149 17.3969C12.6225 17.4945 12.6666 17.5857 12.7385 17.6523C12.8104 17.7188 12.9047 17.7558 13.0027 17.7558C13.1006 17.7558 13.1949 17.7188 13.2668 17.6523C13.3387 17.5857 13.3828 17.4945 13.3904 17.3969L13.3904 13.3876Z"
                            fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_480_457">
                            <rect width="14" height="14" fill="white"
                                transform="translate(13.0039 3.10059) rotate(45)" />
                        </clipPath>
                    </defs>
                </svg>

                {el.title}
            </li></>);
    }).join('')

    return <>


        <div data-tip="sdf"
            dangerouslySetInnerHTML={{
                __html: `<div class="map__placemark-balloon ${classes.Baloon}">
        <label>Магазин</label>
        <div class="${classes.Text} ${classes.Descr}">${vac[0].addressTitle}</div>

        <div class="${classes.Line}"></div>
        
              <label>Открытые вакансии</label>
              <ul class="${classes.Vacancies}">
              
                    ${lis}
                  
                                                
                                                
                  
        </ul>

    </div>
  `
            }}
        />

        
    </>
        ;
}

interface CustomPlacemarkProps {

}

const CustomPlacemark = (props: any) => {

    // @ts-ignore
    const UserPlacemarkCore = React.memo(({ ymaps }: any) => {
        const makeLayout = (layoutFactory: any) => {
            const Layout = layoutFactory.createClass(
                ReactDOMServer.renderToString(UserPlacemarkBalloon(props)),
                {
                    build: function () {
                        Layout.superclass.build.call(this);

                        // this.element = $('.map__placemark-balloon', this.getParentElement());
                        this.element = $(this.getParentElement());

                        this.element
                            .find('.vacancy')
                            .on('click', { user: this.user }, (event: any) => {

                                // this.events.fire('userclose');
                                props.openModel(event.target.getAttribute("data-id"));
                                // $.proxy(this.myClick, this)
                            });



                        // const el = $('.itemInMap')

                        $('.itemInMap').hover(function(e){ // Hover event
                            var titleText = $(this).attr('title');
                        
                            $(this).data('tiptext', titleText).removeAttr('title');
                            $('<p class="tooltip"></p>').text(titleText).appendTo('body').css('top', (e.pageY - 10) + 'px').css('left', (e.pageX + 20) + 'px').fadeIn('slow');
                        }, function(){ // Hover off event
                            $(this).attr('title', $(this).data('tiptext'));
                            $('.tooltip').remove();
                        }).mousemove(function(e){ // Mouse move event
                            $('.tooltip').css('top', (e.pageY - 10) + 'px').css('left', (e.pageX + 20) + 'px');
                        });

                        this.applyElementOffset();

                    },

                    applyElementOffset: function () {
                        // this.element.css({
                        //     position: 'absolute',
                        //     left: -(this.element[0].offsetWidth)
                        // })
                        // this.element.css({
                        //     left: -(this.element[0].offsetWidth),
                        //     // top: -(this.element[0].offsetHeight + this.element.find('.arrow')[0].offsetHeight)
                        // });
                    },
                    clear: function () {
                        this.element
                            // .find('#placemark-balloon__profile-btn_user-id_' + props.user.id)
                            .find('.vacancy')
                            .off('click');

                        Layout.superclass.clear.call(this);
                    },

                    user: props.user,
                    myClick: props.myClick,
                },
            );
            return Layout;
        };


        const balloonLayout = (layoutFactory: any) => {
            const Layout = layoutFactory.createClass(`<div class="popover top ${classes.Container}">` +
                `<a id="close" class="close ${classes.Close}" href="#"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4662 13.2476L4.33984 4.41797" stroke="#35219A" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.3385 13.2476L12.4648 4.41797" stroke="#35219A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>` +
                // '<div class="arrow"></div>' +
                '<div class="popover-inner">' +
                '$[[options.contentLayout observeSize minWidth=235 maxWidth=235 maxHeight=350]]' +
                '</div>' +
                '</div>', {
                build: function () {
                    Layout.superclass.build.call(this);

                    // this.applyElementOffset();
                    this.element = $(this.getParentElement());


                    this.element.find('.close')
                        .on('click', (e: any) => {
                            e.preventDefault();
                            // const thisis = this;
                            // debugger
                            // this.onCloseClick()
                            const test = this;
                            test.events.fire('userclose')
                            // debugger
                        });
                }
            })

            return Layout

        }

        return (
            <Placemark
                {...props}
                options={{
                    balloonContentLayout: makeLayout(ymaps.templateLayoutFactory),
                    balloonPanelMaxMapArea: 0,
                    balloonShadow: true,
                    balloonLayout: balloonLayout(ymaps.templateLayoutFactory),
                    ...props.options,
                }}
            />
        );
    });


    const UserPlacemark = React.useMemo(() => {
        return withYMaps(
            UserPlacemarkCore,
            true,
            ["geoObject.addon.balloon", "templateLayoutFactory"]);
    }, [UserPlacemarkCore]);

    return <><UserPlacemark />

    </>;

}


export default CustomPlacemark