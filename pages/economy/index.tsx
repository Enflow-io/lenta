import React from 'react';
import Header from '../../components/layout/Header';
import Block1 from '../../components/Block1/Block1';
import Block2 from '../../components/Block2/Block2';
import Footer from '../../components/layout/Footer';
import stickerSrc from '../../public/i/stickers/sticker4.svg'
import Block3 from '../../components/Block3/Block3';
import {MenuAll} from "../../components/layout/Layout";

const EconomyPage = () => {
    return (
        <div>
            <MenuAll />
            <Header/>
            <Block1 icon={Icon1} text={`....  это высокотехнологичные распределительные центры с адресной системой хранения и современный автопарк. Мы гордимся тем, что наши сотрудники работают в отличных условиях и могут доверять своей компании. И мы можем гарантировать: если вы работаете в «ЛЕНТЕ», размер дохода зависит только от вас.`} stickerSrc={stickerSrc} label={"Почему классно работать в автохозяйстве «ЛЕНТЫ»?"}/>
            <Block2 youtubeSrc='https://www.youtube.com/embed/j9BQGEYs88g' />
            <Block3/>
            <Footer/>
        </div>
    );
};

const svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"family\" width=\"274\" height=\"257\" viewBox=\"0 0 274 257\" fill=\"none\">\n" +
    "<style>\n" +
    "#family #face_1 {\n" +
    "  transform-origin: 94px 93px;\n" +
    "  transform: rotate(0deg);\n" +
    "  transition-property: transform;\n" +
    "  transition-duration: 150ms;\n" +
    "  transition-timing-function: linear;\n" +
    "}\n" +
    "#family:hover #face_1 {\n" +
    "  transform: rotate(17deg);\n" +
    "}\n" +
    "#family #face_2,\n" +
    "#family #face_2_ext {\n" +
    "  transform-origin: 176px 106px;\n" +
    "  transform: rotate(0deg);\n" +
    "  transition-property: transform;\n" +
    "  transition-duration: 150ms;\n" +
    "  transition-timing-function: linear;\n" +
    "  transition-delay: 80ms;\n" +
    "}\n" +
    "#family:hover #face_2,\n" +
    "#family:hover #face_2_ext {\n" +
    "  transform: rotate(-14deg);\n" +
    "}\n" +
    "</style>\n" +
    "<g>\n" +
    "<path d=\"M136.461 95.7257C136.461 95.7257 149.781 98.6026 162.121 110.527C174.461 122.451 127.063 146.391 136.461 95.7257Z\" fill=\"#35219A\"/>\n" +
    "<path opacity=\"0.46\" d=\"M162.139 110.49C174.479 122.367 127.062 146.391 136.479 95.6888C136.479 95.6888 149.799 98.5657 162.139 110.49Z\" fill=\"white\"/>\n" +
    "<g id=\"face_2_ext\">\n" +
    "  <path d=\"M168.66 77.3172C168.66 77.3172 147.736 94.7545 162.028 105.152C176.319 115.55 183.507 92.3401 183.507 92.3401L180.251 74.764L168.66 77.3172Z\" fill=\"#FFD200\"/>\n" +
    "</g>\n" +
    "  <path d=\"M168.661 94.1902L183.6 94.6712C183.6 94.6712 235.077 104.218 207.086 157.575C202.262 166.812 199.628 177.036 199.39 187.454H159.975L158.254 180.331C156.004 170.561 151.683 161.387 145.582 153.431C137.811 143.57 131.836 123.588 168.661 94.1902Z\" fill=\"#35219A\"/>\n" +
    "<g id=\"face_1\">\n" +
    "<path d=\"M111.661 57.41C111.661 57.41 113.335 65.5135 112.605 71.0638C112.533 71.6049 112.355 72.1265 112.081 72.5987C111.807 73.0708 111.443 73.4843 111.009 73.8152C110.575 74.1461 110.08 74.388 109.552 74.527C109.024 74.6661 108.474 74.6994 107.933 74.6253C105.158 74.2182 101.458 72.8492 100.006 68.6309L96.6849 61.8132C96.6849 61.8132 94.7701 57.4377 98.9975 53.5617C103.225 49.6858 110.884 52.4332 111.661 57.41Z\" fill=\"#F4A28C\"/>\n" +
    "<path d=\"M97.3042 63.0343L96.2312 90.0737L111.17 89.5926L105.953 70.1109L97.3042 63.0343Z\" fill=\"#F4A28C\"/>\n" +
    "<path d=\"M109.635 57.9927C107.115 58.3892 104.557 58.4947 102.013 58.3072C102.881 59.3316 103.432 60.5874 103.596 61.9202C103.76 63.253 103.532 64.6048 102.938 65.8094C102.378 66.9867 101.425 67.9318 100.243 68.4822C99.0612 69.0326 97.7245 69.1539 96.4629 68.8251L95.3529 58.2795C95.1407 56.776 95.3401 55.2431 95.9297 53.8439C96.5194 52.4446 97.4773 51.2314 98.7015 50.3333C99.7563 49.5477 100.863 48.8338 102.013 48.1964C104.899 46.6145 109.58 48.1131 112.059 45.745C112.31 45.5096 112.617 45.3429 112.951 45.2612C113.285 45.1794 113.635 45.1854 113.966 45.2784C114.297 45.3715 114.599 45.5485 114.842 45.7923C115.085 46.0361 115.26 46.3384 115.352 46.67C116.203 49.8152 116.231 54.9308 112.105 57.1972C111.33 57.5942 110.496 57.8629 109.635 57.9927V57.9927Z\" fill=\"#FFD200\"/>\n" +
    "<path d=\"M103.78 65.5134C103.78 65.5134 103.345 62.3589 101.005 62.8862C98.6642 63.4135 99.2655 67.9648 102.54 68.011L103.78 65.5134Z\" fill=\"#F4A28C\"/>\n" +
    "<path d=\"M112.456 62.5625L115.111 65.4487C115.261 65.6124 115.368 65.8114 115.421 66.0272C115.474 66.243 115.472 66.4688 115.415 66.6836C115.358 66.8984 115.247 67.0953 115.094 67.2562C114.941 67.4171 114.749 67.5367 114.537 67.6041L111.466 68.5291L112.456 62.5625Z\" fill=\"#F4A28C\"/>\n" +
    "<path opacity=\"0.31\" d=\"M107.276 74.3292C105.374 74.0833 103.586 73.2858 102.133 72.035C102.133 72.035 102.928 76.9286 108.904 81.1376L107.276 74.3292Z\" fill=\"#CE8172\"/>\n" +
    "</g>\n" +
    "<g id=\"face_2\">\n" +
    "<path d=\"M168.17 61.9983C168.17 61.9983 166.496 70.0832 167.245 75.6798C167.315 76.2214 167.493 76.7437 167.766 77.2165C168.04 77.6892 168.404 78.1032 168.838 78.4343C169.273 78.7654 169.768 79.0072 170.297 79.1458C170.825 79.2843 171.375 79.3167 171.916 79.2413C174.691 78.8343 178.391 77.4652 179.844 73.2469L183.146 66.3738C183.146 66.3738 185.061 61.989 180.834 58.1223C176.606 54.2555 168.947 57.0215 168.17 61.9983Z\" fill=\"#F4A28C\"/>\n" +
    "<path d=\"M182.527 67.6225L183.6 94.6619L168.661 94.1808L173.878 74.6992L182.527 67.6225Z\" fill=\"#F4A28C\"/>\n" +
    "<path d=\"M176.052 70.0461C176.052 70.0461 176.486 66.9009 178.827 67.4282C181.167 67.9555 180.566 72.5068 177.291 72.5438L176.052 70.0461Z\" fill=\"#F4A28C\"/>\n" +
    "<path d=\"M167.375 67.1415L164.72 70.0369C164.57 70.2007 164.463 70.3996 164.41 70.6154C164.357 70.8313 164.359 71.057 164.416 71.2718C164.474 71.4866 164.584 71.6836 164.737 71.8444C164.891 72.0053 165.082 72.125 165.294 72.1923L168.365 73.1174L167.375 67.1415Z\" fill=\"#F4A28C\"/>\n" +
    "<path opacity=\"0.31\" d=\"M172.537 78.9175C174.436 78.6726 176.221 77.8748 177.671 76.6234C177.671 76.6234 176.884 81.5169 170.909 85.7259L172.537 78.9175Z\" fill=\"#CE8172\"/>\n" +
    "<path d=\"M169.225 49.7875C164.295 52.3499 163.786 59.1583 167.967 62.8123C169.612 64.1988 171.443 65.3478 173.406 66.2258C181.62 70.0092 167.986 106.928 187.476 106.068C206.966 105.208 203.062 95.8831 196.587 86.7898C190.112 77.6965 189.862 63.6634 188.345 56.2629C187.245 50.9161 175.941 46.2816 169.225 49.7875Z\" fill=\"#FFD200\"/>\n" +
    "</g>\n" +
    "<path d=\"M96.2314 90.0737L111.17 89.6019C111.17 89.6019 190.232 86.3087 134.12 190.905H80.9593C80.9593 190.905 33.8388 101.489 96.2314 90.0737Z\" fill=\"#35219A\"/>\n" +
    "<path opacity=\"0.08\" d=\"M91.5417 110.49C91.5417 110.49 99.0159 121.942 93.8265 140.832C88.6371 159.721 86.6761 175.743 97.7208 190.905H80.9595C80.9595 190.905 72.2365 172.811 71.5613 168.703C70.886 164.596 58.5185 121.452 91.5417 110.49Z\" fill=\"black\"/>\n" +
    "<path d=\"M53.1361 146.116C53.1361 146.116 47.0587 201.749 53.1361 223.821H63.6073C63.6073 223.821 64.4028 176.448 78.7036 151.74L53.1361 146.116Z\" fill=\"#F4A28C\"/>\n" +
    "<path d=\"M68.7862 103.7C59.7025 111.775 51.4235 124.8 50.2858 145.605L80.9594 152.376C85.5428 140.76 89.0028 128.732 91.2919 116.456C93.7432 103.644 78.5359 95.0227 68.7862 103.7Z\" fill=\"#35219A\"/>\n" +
    "<path opacity=\"0.46\" d=\"M68.7862 103.7C59.7025 111.775 51.4235 124.8 50.2858 145.605L80.9594 152.376C85.5428 140.76 89.0028 128.732 91.2919 116.456C93.7432 103.644 78.5359 95.0227 68.7862 103.7Z\" fill=\"white\"/>\n" +
    "<path d=\"M80.9414 190.905L77.6946 224.031H136.48L134.121 190.905H80.9414Z\" fill=\"#24285B\"/>\n" +
    "<path d=\"M158.994 183.403H199.612L205.236 224.031H149.809L158.994 183.403Z\" fill=\"#24285B\"/>\n" +
    "<path opacity=\"0.08\" d=\"M138.459 131.812C138.459 131.812 130.476 130.776 130.8 137.936C131.124 145.096 140.217 158.287 132.262 163.125C124.741 167.751 100.866 178.851 105.205 197.029C105.673 198.939 106.593 200.709 107.887 202.19L113.373 208.545C115.16 210.621 116.285 213.184 116.603 215.904C116.921 218.624 116.418 221.377 115.158 223.809L115.047 224.031H138.459L143.464 195.289L145.758 156.696L138.459 131.812Z\" fill=\"black\"/>\n" +
    "<path opacity=\"0.08\" d=\"M195.837 115.91C195.837 115.91 178.262 126.354 180.251 150.017C182.24 173.68 170.927 177.445 170.927 177.445L174.312 185.216C174.312 185.216 195.273 204.919 184.876 224.068H205.226L200.453 189.591L210.628 150.054L195.837 115.91Z\" fill=\"black\"/>\n" +
    "<path d=\"M139.624 137.936C139.624 137.936 135.119 157.196 143.805 157.362C152.491 157.529 150.28 137.936 150.28 137.936H139.624Z\" fill=\"#F4A28C\"/>\n" +
    "<path d=\"M136.313 139.194C136.313 139.194 135.388 143.033 140.882 143.403C144.088 143.624 147.306 143.624 150.512 143.403C150.512 143.403 157.144 141.211 153.49 135.179C149.837 129.148 149.596 135.91 145.424 130.785C141.252 125.661 137.497 129.546 138.459 133.274C139.421 137.002 133.972 134.199 136.313 139.194Z\" fill=\"#FFD200\"/>\n" +
    "<path d=\"M148.791 153.755L150.511 166.067C150.511 166.067 153.675 171.183 147.089 172.283C140.502 173.384 138.134 170.637 142.343 166.252L143.435 153.755H148.791Z\" fill=\"#F4A28C\"/>\n" +
    "<path d=\"M193.812 120.425C196.856 108.186 213.987 106.891 218.788 118.575C221.507 125.207 223.08 133.699 221.748 144.3C220.091 158.428 215.149 171.972 207.318 183.846C205.513 186.533 202.768 188.447 199.623 189.21C196.478 189.974 193.161 189.532 190.325 187.972L154.749 168.546L156.885 160.221L194.016 172.468C194.016 172.468 187.383 146.187 193.812 120.425Z\" fill=\"#35219A\"/>\n" +
    "<path opacity=\"0.46\" d=\"M193.812 120.425C196.856 108.186 213.987 106.891 218.788 118.575C221.507 125.207 223.08 133.699 221.748 144.3C220.091 158.428 215.149 171.972 207.318 183.846C205.513 186.533 202.768 188.447 199.623 189.21C196.478 189.974 193.161 189.532 190.325 187.972L154.749 168.546L156.885 160.221L194.016 172.468C194.016 172.468 187.383 146.187 193.812 120.425Z\" fill=\"white\"/>\n" +
    "<path d=\"M150.512 143.403C150.512 143.403 155.137 143.468 154.591 147.64C154.045 151.812 148.735 147.64 148.735 147.64L150.512 143.403Z\" fill=\"#F4A28C\"/>\n" +
    "<path d=\"M133.02 169.184C127.627 171.682 119.533 176.585 115.602 184.91C114.477 187.302 114.085 189.973 114.475 192.587C114.865 195.201 116.02 197.641 117.794 199.6L128.413 211.367C128.413 211.367 127.285 217.213 130.531 217.704C133.778 218.194 132.761 208.897 132.761 208.897L125.083 196.686C124.78 196.209 124.586 195.67 124.516 195.109C124.446 194.548 124.501 193.978 124.678 193.441C124.855 192.903 125.149 192.412 125.539 192.002C125.929 191.593 126.405 191.275 126.933 191.071C132.317 189.018 140.392 184.069 139.476 172.986C139.407 172.258 139.167 171.557 138.774 170.94C138.382 170.323 137.849 169.808 137.219 169.437C136.589 169.066 135.879 168.85 135.15 168.806C134.42 168.762 133.69 168.892 133.02 169.184V169.184Z\" fill=\"#F4A28C\"/>\n" +
    "<path d=\"M130.513 207.112L128.357 224.031H165.145L161.371 208.592L130.513 207.112Z\" fill=\"#24285B\"/>\n" +
    "<path opacity=\"0.31\" d=\"M143.121 157.381C143.121 157.381 145.406 157.483 148.431 154.994C148.431 154.994 148.329 159.74 142.807 160.942L143.121 157.381Z\" fill=\"#CE8172\"/>\n" +
    "<path d=\"M150.511 166.067C150.511 166.067 164.507 165.789 165.783 179.554C167.06 193.319 161.371 208.592 161.371 208.592L130.513 207.112C130.513 207.112 115.842 170.045 142.343 166.252L150.511 166.067Z\" fill=\"#35219A\"/>\n" +
    "<path opacity=\"0.08\" d=\"M151.696 173.69C151.696 173.69 150.503 180.563 153.056 186.64C155.283 192.179 155.726 198.275 154.323 204.078L153.296 208.62L149.809 224.059H165.137L162.62 214.808L164.101 198.897C164.101 198.897 165.747 191.737 165.562 190.442C165.377 189.147 151.696 173.69 151.696 173.69Z\" fill=\"black\"/>\n" +
    "<path d=\"M158.273 168.047C163.018 170.248 169.864 174.337 174.109 180.923C175.922 183.76 176.751 187.114 176.467 190.468C176.182 193.822 174.801 196.989 172.537 199.48L162.843 210.211C162.843 210.211 163.98 216.057 160.734 216.547C157.487 217.038 158.458 207.778 158.458 207.778L165.719 196.252C166.068 195.697 166.291 195.074 166.374 194.424C166.456 193.774 166.396 193.115 166.197 192.491C165.998 191.867 165.665 191.294 165.221 190.813C164.778 190.331 164.234 189.952 163.629 189.702C158.273 187.51 150.845 182.524 151.724 171.867C151.785 171.125 152.024 170.409 152.421 169.78C152.817 169.15 153.36 168.625 154.003 168.25C154.646 167.875 155.37 167.661 156.113 167.626C156.856 167.59 157.597 167.735 158.273 168.047V168.047Z\" fill=\"#F4A28C\"/>\n" +
    "<path d=\"M156.367 162.034C156.367 162.034 151.797 158.093 148.736 160.045C145.674 161.997 145.868 165.382 150.512 166.067L155.137 166.752L156.367 162.034Z\" fill=\"#F4A28C\"/>\n" +
    "<path d=\"M205.235 106.068C205.235 106.068 221.886 110.943 215.411 118.417C208.936 125.892 200.287 111.591 205.235 106.068Z\" fill=\"#F4A28C\"/>\n" +
    "</g>\n" +
    "</svg>"

const Icon1 = () => <span dangerouslySetInnerHTML={{
    __html: svg
}}/>;

export default EconomyPage;