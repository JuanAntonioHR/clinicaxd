import TodayCard, { TodayCardInterface } from "./todayCard"

export default function TodayStats() {


    const data: TodayCardInterface = {
        title: "Patients",
        value: 15,
        subvalue: "+10%"
    } 

    const dummyData: TodayCardInterface[] = [
        {
            title: "Appointments",
            value: 120,
            subvalue: "+10%"
        },
        {
            title: "Patients",
            value: 150,
            subvalue: "+10%"
        },
        {
            title: "Doctors",
            value: 24,
            subvalue: "+2%"
        },
        {
            title: "Patients",
            value: 15,
        },
        
    ]

    return (
        <div className="flex gap-6 items-center self-stretch">
            {dummyData.map((dataCard, index) => <TodayCard key={index} data={dataCard}/>)}
        </div>
    )
}