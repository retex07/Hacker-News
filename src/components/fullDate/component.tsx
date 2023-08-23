import { FlexDate } from "./styled";

interface Props {
    time: number
}

const FullDate = (props: Props) => {
    return (
        <FlexDate>
            <FlexDate>
                {new Date(props.time * 1000).getDate()}.
                {new Date(props.time * 1000).getMonth()}.
                {new Date(props.time * 1000).getFullYear()}
            </FlexDate>
            <FlexDate>
                {new Date(props.time * 1000).getHours()}:
                {new Date(props.time * 1000).getMinutes()}
            </FlexDate>
        </FlexDate>
    );
}

export default FullDate;
