class Bootcamp
{
    title: string;
    price: number;
    courses: Array<string>;

    constructor(title: string, price: number, courses: Array<string>)
    {
        this.title = title;
        this.price = price;
        this.courses = courses;

    }
}

export default Bootcamp