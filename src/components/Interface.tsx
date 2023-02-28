export interface IProps {
    Score: number,
    setScore? : React.Dispatch<React.SetStateAction<number>>,
    setIsSubmitted?: React.Dispatch<React.SetStateAction<boolean>>
}
