import {useState} from "react";

interface CheckboxProps {
    className: string
    checked: boolean
}
const Checkbox = (props: CheckboxProps) => {
    // const [isChecked, setIsChecked] = useState(props.checked);
    // const [isChecked, setIsChecked] = useState(props.checked);
    const isChecked = props.checked;

    return <>

        {isChecked && <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.33333 2H12.6667C13.4 2 14 2.6 14 3.33333V12.6667C14 13.4 13.4 14 12.6667 14H3.33333C2.6 14 2 13.4 2 12.6667V3.33333C2 2.6 2.6 2 3.33333 2ZM6.2 10.86C6.46 11.12 6.88 11.12 7.14 10.86L12.1933 5.8C12.4533 5.54 12.4533 5.12 12.1933 4.86C11.9333 4.6 11.5133 4.6 11.2533 4.86L6.66667 9.44667L4.74667 7.52667C4.48667 7.26667 4.06667 7.26667 3.80667 7.52667C3.68183 7.65122 3.61168 7.82032 3.61168 7.99667C3.61168 8.17301 3.68183 8.34211 3.80667 8.46667L6.2 10.86Z"
                  fill="#00AB34"/>
        </svg>}

        {!isChecked && <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33333 2H12.6667C13.4 2 14 2.6 14 3.33333V12.6667C14 13.4 13.4 14 12.6667 14H3.33333C2.6 14 2 13.4 2 12.6667V3.33333C2 2.6 2.6 2 3.33333 2ZM12.6667 12.6667V3.33333H3.33333V12.6667H12.6667Z" fill="#00AB34"/>
        </svg>
        }

    </>

}


export default Checkbox;