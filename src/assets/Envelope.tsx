interface Props {
    Path: React.ComponentType<React.SVGProps<SVGPathElement>>;
}

export function EnvelopeIcon({Path} : Props){
    return(
        <>
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M19.125 0.947266H2.125C0.951395 0.947266 0 1.84859 0 2.96043V15.0394C0 16.1512 0.951395 17.0526 2.125 17.0526H19.125C20.2986 17.0526 21.25 16.1512 21.25 15.0394V2.96043C21.25 1.84859 20.2986 0.947266 19.125 0.947266ZM19.125 2.96045V5.87953L11.3156 11.0634C10.9003 11.3365 10.3497 11.3365 9.93437 11.0634L2.125 5.87953V2.96045H19.125ZM2.125 7.99332V15.0394H19.125V7.99332L12.3781 12.4626C11.3252 13.1598 9.92476 13.1598 8.87187 12.4626L2.125 7.99332Z" fill="white"/>
            </svg>
        </>
    )
}