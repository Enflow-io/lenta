import classes from "./About4.module.scss"
import {Bullet} from "../../Block1/Block1about";
import React from "react";

const About4 = () => {
    return <div>
        <div className={classes.Container}>
            <div>
                <div className={classes.H3Line}>
                    <h3>Забота об обществе и окружающей среде</h3>

                    <Icon4/>

                </div>

                <p>«ЛЕНТА» — это социальная ответственность, сознательное отношение
                    к окружающей среде и забота о людях.
                </p>
                <div>
                    <ul>
                        <li>
                            <div><Bullet/></div>
                            <div>Мы развиваем инфраструктуру и создаем привлекательные рабочие места.</div>
                        </li>
                        <li>
                            <div><Bullet/></div>
                            <div>Мы сотрудничаем с локальными поставщиками.</div>
                        </li>
                        <li>
                            <div><Bullet/></div>
                            <div>Мы реализуем программы сортировки и переработки отходов, организуем сбор
                                использованных батареек и аккумуляторов, повышаем энергоэффективность помещений.</div>
                        </li>
                        <li>
                            <div><Bullet/></div>
                            <div>Мы строго следим за соблюдением норм охраны труда и производственной безопасности.</div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    </div>;
}

const Icon4 = () => <span dangerouslySetInnerHTML={{
    __html: "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"watering_plant\" width=\"269\" height=\"202\" viewBox=\"0 0 269 202\" fill=\"none\">\n" +
        "<style>\n" +
        "#watering_plant #flower_color,\n" +
        "#watering_plant #flower_gray {\n" +
        "  transition-property: opacity;\n" +
        "  transition-duration: 150ms;\n" +
        "  transition-timing-function: linear;\n" +
        "}\n" +
        "#watering_plant #flower_color {\n" +
        "  opacity: 0;\n" +
        "}\n" +
        "#watering_plant #flower_gray {\n" +
        "  opacity: 1;\n" +
        "}\n" +
        "#watering_plant:hover #flower_gray {\n" +
        "  opacity: 0;\n" +
        "}\n" +
        "#watering_plant:hover #flower_color {\n" +
        "  opacity: 1;\n" +
        "}\n" +
        "</style>\n" +
        "<g>\n" +
        "<path d=\"M99.8125 68.5319C99.14 59.489 89.2946 54.1629 81.1708 58.176C72.3476 62.5459 61.5271 72.5584 59.2877 95.5191C55.3737 135.569 111.857 134.216 111.857 134.216L114.07 127.159C114.07 127.159 77.1224 119.261 77.8016 102.919C78.5615 84.6447 100.875 83.2711 99.8125 68.5319Z\" fill=\"#35219A\"/>\n" +
        "<path opacity=\"0.46\" d=\"M99.8125 68.5319C99.14 59.489 89.2946 54.1629 81.1708 58.176C72.3476 62.5459 61.5271 72.5584 59.2877 95.5191C55.3737 135.569 111.857 134.216 111.857 134.216L114.07 127.159C114.07 127.159 77.1224 119.261 77.8016 102.919C78.5615 84.6447 100.875 83.2711 99.8125 68.5319Z\" fill=\"white\"/>\n" +
        "<path opacity=\"0.45\" d=\"M139.907 180.352C202.304 180.352 252.887 174.833 252.887 168.024C252.887 161.215 202.304 155.695 139.907 155.695C77.5099 155.695 26.927 161.215 26.927 168.024C26.927 174.833 77.5099 180.352 139.907 180.352Z\" fill=\"#E6E6E6\"/>\n" +
        "<path d=\"M52.9525 161.479C52.9525 161.479 54.116 164.65 56.9875 164.845C59.8591 165.041 60.619 167.869 58.0501 168.616C55.4811 169.364 48.8167 166.105 48.8167 166.105L48.9713 161.964L52.9525 161.479Z\" fill=\"#35219A\"/>\n" +
        "<path d=\"M80.6597 161.479C80.6597 161.479 81.8231 164.65 84.6947 164.845C87.5663 165.041 88.3329 167.869 85.764 168.616C83.195 169.364 76.5238 166.105 76.5238 166.105L76.6785 161.964L80.6597 161.479Z\" fill=\"#35219A\"/>\n" +
        "<path d=\"M115.347 33.7071C115.347 33.7071 112.919 38.0299 110.377 40.2721C110.131 40.4885 109.844 40.6542 109.533 40.7595C109.222 40.8649 108.894 40.9078 108.567 40.8859C108.239 40.864 107.92 40.7777 107.626 40.632C107.332 40.4862 107.069 40.2838 106.853 40.0364C105.744 38.7369 104.621 36.6697 105.643 34.1851L106.86 29.7748C107.195 28.9132 107.789 28.1771 108.56 27.6681C109.331 27.1591 110.241 26.9024 111.164 26.9333C114.607 26.8727 116.968 31.1417 115.347 33.7071Z\" fill=\"#F4A28C\"/>\n" +
        "<path d=\"M105.791 31.2763L93.5918 42.016L99.9805 48.3251L106.134 38.2386L105.791 31.2763Z\" fill=\"#F4A28C\"/>\n" +
        "<path d=\"M114.217 33.1819C112.921 32.3612 111.723 31.3942 110.646 30.3C110.631 31.1072 110.38 31.8922 109.925 32.5585C109.47 33.2249 108.83 33.7434 108.084 34.0505C107.367 34.362 106.563 34.4134 105.812 34.1958C105.061 33.9783 104.409 33.5055 103.969 32.8587L107.634 27.6403C108.136 26.876 108.836 26.2621 109.659 25.8638C110.482 25.4655 111.397 25.2976 112.308 25.3779C113.095 25.4377 113.877 25.5524 114.648 25.7213C116.578 26.1455 118.104 28.6773 120.156 28.583C120.36 28.5789 120.562 28.6274 120.742 28.7236C120.923 28.8199 121.076 28.9608 121.186 29.133C121.297 29.3051 121.361 29.5028 121.374 29.7071C121.387 29.9113 121.347 30.1155 121.258 30.3C120.404 32.0641 118.4 34.3871 115.636 33.7811C115.133 33.6623 114.654 33.4597 114.217 33.1819Z\" fill=\"#24285B\"/>\n" +
        "<path d=\"M108.609 34.2323C108.609 34.2323 109.651 32.6365 108.387 31.9429C107.123 31.2494 105.596 33.5589 107.042 34.8719L108.609 34.2323Z\" fill=\"#F4A28C\"/>\n" +
        "<path d=\"M113.652 36.36L113.713 38.7234C113.717 38.8576 113.686 38.9906 113.625 39.1099C113.563 39.2292 113.472 39.3309 113.361 39.4056C113.249 39.4802 113.121 39.5254 112.987 39.5368C112.854 39.5482 112.719 39.5255 112.597 39.4708L110.835 38.6965L113.652 36.36Z\" fill=\"#F4A28C\"/>\n" +
        "<path opacity=\"0.31\" d=\"M105.959 38.5281C105.323 37.628 104.944 36.5711 104.863 35.4712C104.863 35.4712 101.985 37.5653 104.19 41.4167L105.959 38.5281Z\" fill=\"#CE8172\"/>\n" +
        "<path d=\"M210.493 147.534C210.493 147.534 213.519 144.336 216.881 147.534C220.244 150.732 217.722 153.594 217.722 153.594C217.722 153.594 221.925 151.103 223.438 154.267C223.784 154.978 223.926 155.77 223.848 156.557C223.822 156.949 223.88 157.342 224.019 157.709C224.159 158.077 224.376 158.41 224.655 158.685C224.935 158.961 225.271 159.173 225.64 159.306C226.009 159.44 226.403 159.492 226.794 159.459C230.156 159.264 234.191 159.984 234.864 164.354L220.741 163.512L209.349 155.23L210.493 147.534Z\" fill=\"#E6E6E6\"/>\n" +
        "<path d=\"M78.9178 37.5989C78.9178 37.5989 102.96 40.8781 120.438 59.6843C137.916 78.4905 77.5526 117.086 77.5526 117.086L45.9451 106.225C45.9451 106.225 43.8469 29.4651 78.9178 37.5989Z\" fill=\"#35219A\"/>\n" +
        "<path d=\"M116.053 126.688L115.899 126.62L112.039 124.6C109.418 123.147 107.47 120.724 106.609 117.851C105.749 114.978 106.045 111.882 107.435 109.225C108.824 106.568 111.196 104.56 114.045 103.631C116.893 102.701 119.991 102.924 122.677 104.252L126.538 106.272C126.665 106.339 126.778 106.429 126.87 106.539C126.962 106.649 127.032 106.776 127.075 106.913C127.118 107.05 127.133 107.194 127.121 107.337C127.108 107.48 127.068 107.619 127.002 107.747C126.935 107.874 126.845 107.987 126.735 108.079C126.625 108.172 126.498 108.241 126.361 108.285C126.225 108.328 126.081 108.343 125.938 108.331C125.795 108.318 125.656 108.278 125.529 108.211L121.669 106.191C119.486 105.048 116.938 104.819 114.587 105.556C112.235 106.293 110.272 107.934 109.13 110.12C107.988 112.306 107.759 114.857 108.495 117.211C109.231 119.566 110.871 121.531 113.054 122.675L116.914 124.695C117.182 124.809 117.393 125.025 117.501 125.295C117.61 125.565 117.607 125.868 117.493 126.136C117.378 126.403 117.163 126.615 116.893 126.723C116.623 126.832 116.321 126.829 116.053 126.715V126.688Z\" fill=\"#FFD200\"/>\n" +
        "<path opacity=\"0.08\" d=\"M83.1209 48.4396C83.1209 48.4396 91.4061 65.2729 77.64 80.3017C63.8739 95.3305 89.6105 108.622 89.6105 108.622L77.5526 117.086L45.9451 106.225C45.9451 106.225 46.4024 91.5733 46.8798 84.5303C47.3573 77.4872 83.1209 48.4396 83.1209 48.4396Z\" fill=\"black\"/>\n" +
        "<path opacity=\"0.6\" d=\"M116.053 126.688L115.899 126.62L112.039 124.6C109.418 123.147 107.47 120.724 106.609 117.851C105.749 114.978 106.045 111.882 107.435 109.225C108.824 106.568 111.196 104.56 114.045 103.631C116.893 102.701 119.991 102.924 122.677 104.252L126.538 106.272C126.665 106.339 126.778 106.429 126.87 106.539C126.962 106.649 127.032 106.776 127.075 106.913C127.118 107.05 127.133 107.194 127.121 107.337C127.108 107.48 127.068 107.619 127.002 107.747C126.935 107.874 126.845 107.987 126.735 108.079C126.625 108.172 126.498 108.241 126.361 108.285C126.225 108.328 126.081 108.343 125.938 108.331C125.795 108.318 125.656 108.278 125.529 108.211L121.669 106.191C119.486 105.048 116.938 104.819 114.587 105.556C112.235 106.293 110.272 107.934 109.13 110.12C107.988 112.306 107.759 114.857 108.495 117.211C109.231 119.566 110.871 121.531 113.054 122.675L116.914 124.695C117.182 124.809 117.393 125.025 117.501 125.295C117.61 125.565 117.607 125.868 117.493 126.136C117.378 126.403 117.163 126.615 116.893 126.723C116.623 126.832 116.321 126.829 116.053 126.715V126.688Z\" fill=\"white\"/>\n" +
        "<path d=\"M83.1209 48.4396C81.2716 39.5651 70.7806 35.5991 63.262 40.6693C55.0979 46.1705 45.7299 57.5431 46.5437 80.5913C48.003 120.809 103.8 111.935 103.8 111.935L105.051 104.643C105.051 104.643 67.3912 101.741 65.8848 85.4662C64.2035 67.2458 86.1337 62.9028 83.1209 48.4396Z\" fill=\"#35219A\"/>\n" +
        "<path opacity=\"0.46\" d=\"M83.1209 48.4396C81.2716 39.5651 70.7806 35.5991 63.262 40.6693C55.0979 46.1705 45.7299 57.5431 46.5437 80.5913C48.003 120.809 103.8 111.935 103.8 111.935L105.051 104.643C105.051 104.643 67.3912 101.741 65.8848 85.4662C64.2035 67.2458 86.1337 62.9028 83.1209 48.4396Z\" fill=\"white\"/>\n" +
        "<path d=\"M126.47 99.3234L107.486 126.829L134.009 140.733L143.572 108.285L126.47 99.3234Z\" fill=\"#FFD200\"/>\n" +
        "<path d=\"M129.12 130.741L157.049 115.335L163.882 118.917C164.09 119.033 164.254 119.214 164.349 119.434C164.443 119.653 164.462 119.897 164.403 120.128C164.344 120.359 164.209 120.564 164.021 120.71C163.833 120.857 163.602 120.937 163.364 120.937L160.257 120.877C159.407 120.871 158.573 121.104 157.849 121.55L131.386 137.441L129.12 130.741Z\" fill=\"#FFD200\"/>\n" +
        "<path d=\"M104.681 106.797C104.681 106.797 111.353 104.434 113.424 108.306C115.495 112.177 110.821 113.625 103.807 111.935L104.681 106.797Z\" fill=\"#F4A28C\"/>\n" +
        "<path d=\"M126.47 99.3234L137.822 99.7004L143.572 108.285L126.47 99.3234Z\" fill=\"#FFD200\"/>\n" +
        "<path opacity=\"0.17\" d=\"M126.47 99.3234L137.822 99.7004L143.572 108.285L126.47 99.3234Z\" fill=\"black\"/>\n" +
        "<path d=\"M112.193 133.152C112.193 133.152 118.347 136.195 120.727 132.411L113.222 129.859L112.193 133.152Z\" fill=\"#F4A28C\"/>\n" +
        "<g id=\"Group\" opacity=\"0.48\">\n" +
        "<path opacity=\"0.48\" d=\"M164.426 116.87C164.426 116.87 164.769 116.756 165.395 116.594\" stroke=\"#C9C9C9\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "<path opacity=\"0.48\" d=\"M168.495 116.002C175.798 115.019 190.997 115.652 198.085 135.744\" stroke=\"#C9C9C9\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"2.82 4.7\"/>\n" +
        "<path opacity=\"0.48\" d=\"M198.589 137.246C198.69 137.562 198.791 137.878 198.885 138.208\" stroke=\"#C9C9C9\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "</g>\n" +
        "<path d=\"M45.9116 106.225L47.4449 162.159H53.9951L57.9763 131.186C58.3086 128.611 59.3821 126.189 61.0659 124.215C62.7496 122.241 64.9709 120.8 67.4585 120.069L77.546 117.093L45.9116 106.225Z\" fill=\"#24285B\"/>\n" +
        "<path d=\"M77.5528 117.086L81.9173 162.159H75.5891L61.7356 120.028L77.5528 117.086Z\" fill=\"#24285B\"/>\n" +
        "<g id=\"flower_gray\">\n" +
        "<path d=\"M202.584 162.388C202.584 162.388 213.478 133.879 207.876 90.5634C207.876 90.5634 221.501 130.842 207.715 163.957L202.584 162.388Z\" fill=\"#A5A5A5\"/>\n" +
        "<path d=\"M213.129 138.323C213.129 138.323 215.146 127.55 231.051 128.324C231.051 128.324 227.715 144.605 213.129 138.323Z\" fill=\"#C9C9C9\"/>\n" +
        "<path d=\"M205.112 88.577C205.112 88.577 197.237 77.8037 202.57 71.0703C207.903 64.337 228.334 70.6327 213.646 89.0012L205.112 88.577Z\" fill=\"#E6E6E6\"/>\n" +
        "<path d=\"M211.636 87.1563C211.636 87.1563 218.912 75.9991 227.103 78.6251C235.294 81.2511 236.559 102.623 214.225 95.3103L211.636 87.1563Z\" fill=\"#E6E6E6\"/>\n" +
        "<path d=\"M215.704 93.8829C215.704 93.8829 228.872 91.9369 232.342 99.8149C235.812 107.693 220.681 122.823 211.326 101.236L215.704 93.8829Z\" fill=\"#E6E6E6\"/>\n" +
        "<path d=\"M213.572 100.522C213.572 100.522 222.234 110.622 217.426 117.779C212.618 124.937 191.77 120.15 205.025 100.731L213.572 100.522Z\" fill=\"#E6E6E6\"/>\n" +
        "<path d=\"M206.686 87.8228C206.686 87.8228 201.461 75.5682 192.934 76.733C184.406 77.8979 179.45 98.7107 202.718 95.4046L206.686 87.8228Z\" fill=\"#E6E6E6\"/>\n" +
        "<path d=\"M201.461 93.7751C201.461 93.7751 188.589 92.3611 185.67 100.226C182.752 108.09 198.287 122.365 206.128 100.825L201.461 93.7751Z\" fill=\"#E6E6E6\"/>\n" +
        "<path d=\"M209.39 104.118C214.615 104.118 218.852 99.876 218.852 94.6437C218.852 89.4115 214.615 85.1699 209.39 85.1699C204.164 85.1699 199.927 89.4115 199.927 94.6437C199.927 99.876 204.164 104.118 209.39 104.118Z\" fill=\"#C9C9C9\"/>\n" +
        "<path opacity=\"0.43\" d=\"M206.686 96.9667C209.29 96.9667 211.4 94.8535 211.4 92.2467C211.4 89.6399 209.29 87.5266 206.686 87.5266C204.083 87.5266 201.972 89.6399 201.972 92.2467C201.972 94.8535 204.083 96.9667 206.686 96.9667Z\" fill=\"#A5A5A5\"/>\n" +
        "<path opacity=\"0.43\" d=\"M205.005 92.9469C206.089 92.9469 206.969 92.0666 206.969 90.9808C206.969 89.8949 206.089 89.0146 205.005 89.0146C203.92 89.0146 203.041 89.8949 203.041 90.9808C203.041 92.0666 203.92 92.9469 205.005 92.9469Z\" fill=\"#A5A5A5\"/>\n" +
        "<path d=\"M180.035 163.95C180.035 163.95 177.345 160.199 181.716 156.88C186.087 153.56 188.603 160.92 192.476 155.951C194.83 152.921 191.884 152.072 195.166 146.78C196.679 144.336 200.714 142.067 204.581 146.107C205.762 147.294 206.653 148.739 207.184 150.328C207.256 150.553 207.379 150.759 207.544 150.928C207.708 151.098 207.91 151.227 208.132 151.306C208.355 151.385 208.593 151.411 208.827 151.383C209.061 151.355 209.286 151.273 209.484 151.143C210.513 150.47 211.952 150.248 213.889 151.406C214.597 151.764 215.201 152.299 215.642 152.96C216.082 153.62 216.345 154.384 216.404 155.176C216.429 156.05 216.788 156.881 217.405 157.498C218.023 158.115 218.853 158.472 219.726 158.496C223.189 158.496 227.446 159.459 227.446 163.95H180.035Z\" fill=\"#C9C9C9\"/>\n" +
        "</g>\n" +
        "<g id=\"flower_color\">\n" +
        "<path d=\"M210.493 147.534C210.493 147.534 213.519 144.336 216.881 147.534C220.244 150.732 217.722 153.594 217.722 153.594C217.722 153.594 221.925 151.103 223.438 154.267C223.784 154.978 223.926 155.77 223.848 156.557C223.822 156.949 223.88 157.342 224.019 157.709C224.159 158.077 224.376 158.41 224.655 158.685C224.935 158.961 225.271 159.173 225.64 159.306C226.009 159.44 226.403 159.492 226.794 159.459C230.156 159.264 234.191 159.984 234.864 164.354L220.741 163.512L209.349 155.23L210.493 147.534Z\" fill=\"#FFD200\"/>\n" +
        "<path d=\"M202.584 162.388C202.584 162.388 213.478 133.879 207.876 90.5634C207.876 90.5634 221.501 130.842 207.715 163.957L202.584 162.388Z\" fill=\"#00AB34\"/>\n" +
        "<path d=\"M213.129 138.323C213.129 138.323 215.146 127.55 231.051 128.324C231.051 128.324 227.715 144.605 213.129 138.323Z\" fill=\"#00AB34\"/>\n" +
        "<path d=\"M205.112 88.577C205.112 88.577 197.237 77.8037 202.57 71.0703C207.903 64.337 228.334 70.6327 213.646 89.0012L205.112 88.577Z\" fill=\"#FFD200\"/>\n" +
        "<path d=\"M211.636 87.1563C211.636 87.1563 218.912 75.9991 227.103 78.6251C235.294 81.2511 236.559 102.623 214.225 95.3103L211.636 87.1563Z\" fill=\"#FFD200\"/>\n" +
        "<path d=\"M215.704 93.8829C215.704 93.8829 228.872 91.9369 232.342 99.8149C235.812 107.693 220.681 122.823 211.326 101.236L215.704 93.8829Z\" fill=\"#FFD200\"/>\n" +
        "<path d=\"M213.572 100.522C213.572 100.522 222.234 110.622 217.426 117.779C212.618 124.937 191.77 120.15 205.025 100.731L213.572 100.522Z\" fill=\"#FFD200\"/>\n" +
        "<path d=\"M206.686 87.8228C206.686 87.8228 201.461 75.5682 192.934 76.733C184.406 77.8979 179.45 98.7107 202.718 95.4046L206.686 87.8228Z\" fill=\"#FFD200\"/>\n" +
        "<path d=\"M201.461 93.7751C201.461 93.7751 188.589 92.3611 185.67 100.226C182.752 108.09 198.287 122.365 206.128 100.825L201.461 93.7751Z\" fill=\"#FFD200\"/>\n" +
        "<path d=\"M209.39 104.118C214.615 104.118 218.852 99.876 218.852 94.6437C218.852 89.4115 214.615 85.1699 209.39 85.1699C204.164 85.1699 199.927 89.4115 199.927 94.6437C199.927 99.876 204.164 104.118 209.39 104.118Z\" fill=\"#F7F7F7\"/>\n" +
        "<path opacity=\"0.43\" d=\"M206.686 96.9667C209.29 96.9667 211.4 94.8535 211.4 92.2467C211.4 89.6399 209.29 87.5266 206.686 87.5266C204.083 87.5266 201.972 89.6399 201.972 92.2467C201.972 94.8535 204.083 96.9667 206.686 96.9667Z\" fill=\"#FF9F46\"/>\n" +
        "<path opacity=\"0.43\" d=\"M205.005 92.9469C206.089 92.9469 206.969 92.0666 206.969 90.9808C206.969 89.8949 206.089 89.0146 205.005 89.0146C203.92 89.0146 203.041 89.8949 203.041 90.9808C203.041 92.0666 203.92 92.9469 205.005 92.9469Z\" fill=\"white\"/>\n" +
        "<path d=\"M180.035 163.95C180.035 163.95 177.345 160.199 181.716 156.88C186.087 153.56 188.603 160.92 192.476 155.951C194.83 152.921 191.884 152.072 195.166 146.78C196.679 144.336 200.714 142.067 204.581 146.107C205.762 147.294 206.653 148.739 207.184 150.328C207.256 150.553 207.379 150.759 207.544 150.928C207.708 151.098 207.91 151.227 208.132 151.306C208.355 151.385 208.593 151.411 208.827 151.383C209.061 151.355 209.286 151.273 209.484 151.143C210.513 150.47 211.952 150.248 213.889 151.406C214.597 151.764 215.201 152.299 215.642 152.96C216.082 153.62 216.345 154.384 216.404 155.176C216.429 156.05 216.788 156.881 217.405 157.498C218.023 158.115 218.853 158.472 219.726 158.496C223.189 158.496 227.446 159.459 227.446 163.95H180.035Z\" fill=\"#D4AE00\"/>\n" +
        "</g>\n" +
        "</g>\n" +
        "</svg>"
}}/>;
export default About4;