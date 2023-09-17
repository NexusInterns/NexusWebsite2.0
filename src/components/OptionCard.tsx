interface Props
{
    title: string;
    info: string;
    fee: string;
    duration: number;
}

const OptionCard = ({title, info, fee, duration} : Props) => {
    return (
        <div className="option-card">
            <img className="option-card-image" src={`./src/assets/courses/${title}.webp`} alt={title}/>
            <p className="option-card-information">{info}</p>
            <p className="option-card-price">Course Fee:&nbsp;{fee}</p>
            <p className="option-card-duration">Duration:&nbsp;{duration} Day{duration > 1 && "s"}</p>
            <p className="option-card-read-more">Read More {">>"}</p>
        </div>
    )
}

export default OptionCard