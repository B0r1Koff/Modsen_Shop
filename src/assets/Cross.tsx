interface Props {
    Path: React.ComponentType<React.SVGProps<SVGPathElement>>;
}

export function CrossIcon({Path} : Props){
    return(
        <>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M1 1.24459L16.7554 17M1 16.7554L16.7554 1" stroke="black" stroke-width="1.5"/>
            </svg>
        </>
    )
}