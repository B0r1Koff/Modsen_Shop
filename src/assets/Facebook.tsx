interface Props {
    Path: React.ComponentType<React.SVGProps<SVGPathElement>>;
}

export function FacebookIcon({Path} : Props){
    return(
        <>
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M9.5 3H6.5C5.94772 3 5.5 3.44772 5.5 4V7H9.5C9.61374 6.99748 9.7216 7.05039 9.78923 7.14188C9.85685 7.23336 9.87578 7.35201 9.84 7.46L9.1 9.66C9.03181 9.86192 8.84312 9.99842 8.63 10H5.5V17.5C5.5 17.7761 5.27614 18 5 18H2.5C2.22386 18 2 17.7761 2 17.5V10H0.5C0.223858 10 0 9.77614 0 9.5V7.5C0 7.22386 0.223858 7 0.5 7H2V4C2 1.79086 3.79086 0 6 0H9.5C9.77614 0 10 0.223858 10 0.5V2.5C10 2.77614 9.77614 3 9.5 3Z" fill="#707070"/>
            </svg>
        </>
    )
}