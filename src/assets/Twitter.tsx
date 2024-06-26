interface Props {
    Path: React.ComponentType<React.SVGProps<SVGPathElement>>;
}

export function TwitterIcon({Path} : Props){
    return(
        <>
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M19.9708 2.46378C19.4547 3.15213 18.8309 3.75258 18.1235 4.24195C18.1235 4.42177 18.1235 4.60158 18.1235 4.79139C18.1292 8.0568 16.8249 11.1879 14.5029 13.4828C12.181 15.7777 9.03567 17.0443 5.77211 16.9988C3.88538 17.0051 2.02281 16.5743 0.330301 15.7401C0.239042 15.7003 0.18018 15.61 0.180527 15.5103V15.4005C0.180527 15.257 0.296758 15.1407 0.440136 15.1407C2.29475 15.0796 4.0832 14.4366 5.55244 13.3026C3.87376 13.2688 2.36338 12.2744 1.66829 10.7453C1.63318 10.6617 1.64411 10.5659 1.69713 10.4925C1.75016 10.419 1.83761 10.3785 1.9279 10.3856C2.43809 10.4369 2.95337 10.3894 3.44561 10.2458C1.59249 9.86109 0.200074 8.32265 0.000797149 6.43969C-0.00628542 6.34936 0.0341943 6.26187 0.107613 6.20882C0.181031 6.15577 0.276775 6.14483 0.360256 6.17996C0.857554 6.39939 1.39439 6.51496 1.93788 6.51961C0.314106 5.45384 -0.387258 3.42672 0.230452 1.58469C0.294214 1.4057 0.447402 1.27347 0.633723 1.2366C0.820043 1.19972 1.01201 1.26365 1.13908 1.40487C3.33027 3.73695 6.34099 5.12662 9.53645 5.28088C9.4546 4.95427 9.41434 4.61862 9.41663 4.28191C9.44652 2.51636 10.5389 0.943567 12.1825 0.299861C13.826 -0.343846 15.6953 0.0689272 16.9153 1.34494C17.747 1.18651 18.551 0.907164 19.3018 0.515789C19.3568 0.481454 19.4265 0.481454 19.4815 0.515789C19.5158 0.57081 19.5158 0.640583 19.4815 0.695604C19.1178 1.52835 18.5035 2.2268 17.7241 2.69355C18.4066 2.6144 19.0771 2.45341 19.7211 2.21404C19.7754 2.17713 19.8466 2.17713 19.9009 2.21404C19.9463 2.23482 19.9802 2.27457 19.9937 2.32269C20.0072 2.37081 19.9988 2.42242 19.9708 2.46378Z" fill="#707070"/>
            </svg>
        </>
    )
}