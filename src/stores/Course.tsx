class Course
{
    title: string;
    courseID: string;
    info: string;
    fee: string;
    duration: number;

    constructor(title: string, courseID: string, info: string, fee: string, duration: number)
    {
        this.title = title;
        this.courseID = courseID;
        this.info = info;
        this.fee = fee;
        this.duration = duration;

    }
}

export default Course