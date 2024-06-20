import { RangeInput, RangeInputWrapper, RangeSelected, RangeSlider, ContentWrapper } from "./styled"
import { ThemeProvider } from "styled-components"
import { useSelector } from "react-redux"
import { useState } from "react"

export default function RangeInputComponent(props: {max: number, min: number, setMin: React.Dispatch<React.SetStateAction<number>>, setMax: React.Dispatch<React.SetStateAction<number>>}){
    let [firstValue, setFirstValue] = useState(props.min)
    let [secondvalue, setSecondValue] = useState(props.max)

    return(
        <ThemeProvider theme={useSelector((state: any) => state.currentTheme.value)}>
            <ContentWrapper>
                <RangeSlider>
                    <RangeSelected/>
                </RangeSlider>
                
                <RangeInputWrapper>
                    <RangeInput type="range" 
                        value={props.min}
                        min={0}
                        max={1000}
                        onChange={e => {
                            setFirstValue(Number(e.target.value))
                            if(firstValue > secondvalue) props.setMax(firstValue)
                            else props.setMin(firstValue)
                        }}
                    />
                    <RangeInput type="range" 
                        value={props.max}
                        min={0}
                        max={1000}
                        onChange={e => {
                            setSecondValue(Number(e.target.value))
                            if(secondvalue > firstValue) props.setMax(secondvalue)
                            else props.setMin(secondvalue)
                        }}
                    />
                </RangeInputWrapper>
                
            </ContentWrapper>
        </ThemeProvider>
    )
}