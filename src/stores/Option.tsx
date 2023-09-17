class Option
{
    title: string;
    info: string;
    fee: string;
    duration: number;

    constructor(title: string, info: string, fee: string, duration: number)
    {
        this.title = title;
        this.info = info;
        this.fee = fee;
        this.duration = duration;

    }
}

export default Option