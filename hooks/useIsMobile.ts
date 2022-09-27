import {useEffect, useState} from 'react';
import useWindowDimensions from './useWindowDimensions';

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false)
    const windowDimensions = useWindowDimensions()

    useEffect(() => {
        if (windowDimensions?.width) {
            if (windowDimensions?.width < 1000) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
    }, [windowDimensions?.width])

    return {isMobile}
}