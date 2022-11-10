import classes from "./Form.module.scss"
import {useCallback, useRef, useState} from "react";
import {Rating} from "react-simple-star-rating/dist";
import Uploady from "@rpldy/uploady";
import {asUploadButton} from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";

const DivUploadButton = asUploadButton((props: any) => {
    return <div {...props} className={classes.UploadBtn}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M29.6178 11.9664C29.3746 11.7317 29.0449 11.5999 28.7011 11.5999C28.3572 11.5999 28.0275 11.7317 27.7844 11.9664L13.6616 25.6615C13.0596 26.2429 12.3449 26.7041 11.5583 27.0187C10.7717 27.3334 9.92866 27.4953 9.07723 27.4954C7.35771 27.4955 5.70856 26.8361 4.49259 25.6622C3.27662 24.4882 2.59342 22.896 2.5933 21.2357C2.59318 19.5754 3.27614 17.9831 4.49194 16.809L18.1699 3.54828C18.9014 2.85331 19.8875 2.46555 20.9137 2.46947C21.9399 2.47339 22.9228 2.86866 23.6485 3.56919C24.3742 4.26972 24.7838 5.21876 24.7881 6.20957C24.7924 7.20038 24.3911 8.15269 23.6715 8.85907L9.99348 22.1198C9.7468 22.3479 9.41839 22.4753 9.07678 22.4753C8.73516 22.4753 8.40675 22.3479 8.16007 22.1198C7.91699 21.885 7.78044 21.5666 7.78044 21.2346C7.78044 20.9027 7.91699 20.5843 8.16007 20.3495L20.3379 8.53731C20.5741 8.30119 20.7048 7.98495 20.7018 7.65669C20.6989 7.32843 20.5625 7.01442 20.3221 6.7823C20.0817 6.55018 19.7565 6.41851 19.4165 6.41566C19.0765 6.41281 18.749 6.539 18.5045 6.76705L6.32665 18.5792C5.96538 18.928 5.67879 19.3421 5.48327 19.7978C5.28775 20.2535 5.18711 20.742 5.18711 21.2353C5.18711 21.7285 5.28775 22.217 5.48327 22.6727C5.67879 23.1284 5.96538 23.5425 6.32665 23.8913C7.06782 24.5742 8.05294 24.9552 9.07743 24.9552C10.1019 24.9552 11.087 24.5742 11.8282 23.8913L25.5049 10.6293C26.6952 9.45037 27.3565 7.86608 27.3456 6.21966C27.3347 4.57324 26.6524 2.99727 25.4465 1.83313C24.2407 0.668995 22.6084 0.0104391 20.9032 0.000123039C19.1981 -0.010193 17.5574 0.628561 16.3365 1.77802L2.65853 15.0387C0.9563 16.6823 -2.53651e-08 18.9115 0 21.2359C2.53651e-08 23.5603 0.9563 25.7895 2.65853 27.4331C4.36075 29.0766 6.66946 30 9.07678 30C11.4841 30 13.7928 29.0766 15.495 27.4331L29.6178 13.7417C29.7389 13.6253 29.835 13.487 29.9006 13.3347C29.9662 13.1824 30 13.019 30 12.854C30 12.6891 29.9662 12.5257 29.9006 12.3734C29.835 12.2211 29.7389 12.0828 29.6178 11.9664Z"
                fill="#35219A"/>
        </svg>
        &nbsp;&nbsp;&nbsp;Прикрепить скриншот
    </div>
});

const Preview = (props: any) => {
    return <div>{props.name}</div>
}

const PreviewsWithClear = () => {
    const previewMethodsRef = useRef();
    const [previews, setPreviews] = useState([]);

    const onPreviewsChanged = useCallback((previews: any) => {
        setPreviews(previews);
    }, []);

    const onClear = useCallback(() => {
        // @ts-ignore
        if (previewMethodsRef.current?.clear) {
            // @ts-ignore
            previewMethodsRef.current.clear();
        }
    }, [previewMethodsRef]);

    return <>
        <div style={{
            paddingLeft: '1em'
        }} className={classes.FileName}>Название файла
        </div>
        {previews.map((el: any, index: number) => {
            return <div key={index}>{el?.name}</div>
        })}
        {/*<button onClick={onClear}>*/}
        {/*    Clear {previews.length} previews*/}
        {/*</button>*/}
        {/*<br/>*/}
        {/*<UploadPreview*/}
        {/*    rememberPreviousBatches*/}
        {/*    previewMethodsRef={previewMethodsRef}*/}
        {/*    onPreviewsChanged={onPreviewsChanged}*/}
        {/*/>*/}
    </>;
};

interface PropsForm {
    close: () => void
}

const Form = (props: PropsForm) => {
    const [rating, setRating] = useState(0);
    const [leftChars, setLeftChars] = useState(0)
    const handleRating = (rate: number) => {
        setRating(rate)
        // other logic
    }

    const [isSent, setIsSent] = useState(false);

    const changed = (e: any) => {
        const typed = e.target.value.length;
        const max = 1000;
        const left = max - typed;
        setLeftChars(typed)
    }
    return <div className={classes.Form}>
        <div className={classes.CloseBtn} onClick={props.close}>
            <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1733 20.3139L6.73828 6.87891" stroke="#35219A" stroke-width="1.28528"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.68216 20.1792L20.1172 6.74414" stroke="#35219A" stroke-width="1.28528"
                      stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

        {isSent && <div style={{
            padding: "2em 0"
        }}>
            <h1>Спасибо!</h1>
            <p>Благодаря Вам наша страница становится лучше!</p>


        </div>}
        {!isSent && <>
            <h1>Оцените карьерную страницу</h1>
            <p>Пожалуйста, поставьте Вашу оценку. Обратная связь от Вас поможет нам стать лучше: <span style={{
                color: "#E81919"
            }}>*</span></p>
            <Rating className={classes.Rating} style={{
                position: 'relative',
                left: -3
            }} size={25} onClick={handleRating} ratingValue={rating} /* Available Props */ />

            <div style={{
                position: "relative"
            }}>
                <span className={classes.Counter}>{leftChars}/1000</span>
                <textarea onChange={changed} style={{
                    resize: "none"
                }} className={classes.Text} placeholder={'Ваш отзыв'}>

        </textarea>

            </div>


            <div className={classes.Footer}>
                <div>
                    <div style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Uploady destination={{url: "https://localhost"}}>
                            <DivUploadButton/>
                            <PreviewsWithClear/>
                        </Uploady>
                    </div>
                    <p>Размер файла не более 1 Мб (png, jpeg)</p>
                </div>
                <div className={classes.BtnCont}>
                    <button  onClick={() => {
                        setIsSent(true)
                    }
                    }>Отправить
                    </button>
                </div>

            </div>
        </>}
    </div>
}

export default Form;