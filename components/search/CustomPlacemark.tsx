import {Placemark, withYMaps} from "@pbe/react-yandex-maps";
import React from "react";
import $ from 'jquery';
import classes from "./Placemark.module.scss";

function UserPlacemarkBalloon(props: any) {
    return `
    <div class="map__placemark-balloon ${classes.Baloon}">
        <label>Магазин</label>
        <div class="${classes.Text} ${classes.Descr}">Санкт-Петербург, улица Савушкина, 112
Район Приморский</div>

        <div class="${classes.Line}"></div>
        
              <label>Открытые вакансии</label>
              <ul class="${classes.Vacancies}">
                  <li class="vacancy" data-id="1"  id="placemark-balloon__profile-btn_user-id_${props.user.id}">Кассир-продавец</li>
                  <li class="vacancy" data-id="1">Продавец</li>
        </ul>

    </div>
  `;
}

interface CustomPlacemarkProps {

}

const CustomPlacemark = (props: any) => {

    // @ts-ignore
    const UserPlacemarkCore = React.memo(({ymaps}: any) => {
        const makeLayout = (layoutFactory: any) => {
            const Layout = layoutFactory.createClass(
                UserPlacemarkBalloon(props),
                {
                    build: function () {
                        Layout.superclass.build.call(this);

                        // this.element = $('.map__placemark-balloon', this.getParentElement());
                        this.element = $(this.getParentElement());

                        this.element
                            .find('.vacancy')
                            .on('click', {user: this.user}, (event: any)=>{

                                // this.events.fire('userclose');
                                props.openModel(event.target.getAttribute("data-id"));
                                // $.proxy(this.myClick, this)
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
                        .on('click', (e:any) => {
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

    return <UserPlacemark/>;

}


export default CustomPlacemark