class Course
{
    title0: string;
    title1: string;
    title2: string;
    title: string;
    courseID: string;
    info: string;
    fee: string;
    duration: number;

    constructor(title0: string, title1: string, title2: string, courseID: string, info: string, fee: string, duration: number)
    {
        this.title0 = title0;
        this.title1 = title1;
        this.title2 = title2;
        this.title = `${title0} ${title1} ${title2}`;
        this.courseID = courseID;
        this.info = info;
        this.fee = fee;
        this.duration = duration;

    }
}

export default Course