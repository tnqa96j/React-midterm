import styles from "./icons.module.css"
import Icon from '@ant-design/icons';


export function Sun({ color }) {
    return (

        <svg viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
            <g id="Environment / Sun">
                <path id="Vector" d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    )
}

export function Moon({ color }) {
    return (
        <svg viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
            <path d="M4.67199 18.7967C3.97348 18.2328 4.55832 17.2239 5.45256 17.1452C11.2419 16.6357 15.0596 10.0755 12.4592 5.00063C12.0486 4.19926 12.5832 3.13003 13.4466 3.38559C17.2438 4.50955 20 7.94173 20 12C20 16.9715 16.1189 21 11 21C8.65964 21 6.38082 20.1762 4.67199 18.7967Z" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )

}

export function Like({ color }) {
    return (
        <svg  viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" className={styles.like}>
        <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" stroke={color} stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    )

}