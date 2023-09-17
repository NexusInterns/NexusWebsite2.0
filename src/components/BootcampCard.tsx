interface Props
{
    title: string;
    price: number;
    courses: Array<string>;
}

const BootcampCard = ({title, price, courses} : Props) => {
    return (
        <div className="bootcamp-card">
            <h2 className="bootcamp-card-title">{title}</h2>
            <p className="bootcamp-card-price">{price}</p>
            <p className="bootcamp-card-validity">Valid for one year</p>
            <button className="bootcamp-card-button">Select</button>
            {courses.map((course) => <p className="bootcamp-card-read-more">{course}</p>)}
        </div>
    )
}

export default BootcampCard