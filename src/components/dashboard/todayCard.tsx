export interface TodayCardInterface {
    title: string,
    value: number,
    subvalue?: string
}

export default function TodayCard({data} : {data : TodayCardInterface}) {

    return (
        <div className="flex flex-col p-6 gap-4 flex-appointmentCard bg-background_green rounded-2xl">
            <p className="text-lg font-semibold">{data.title}</p>
            <p className="text-4xl font-semibold">{data.value}</p>
            <p className="text-sm text-[#3B883E]">{data.subvalue ? data.subvalue : <br/>}</p>
        </div>
    )
}