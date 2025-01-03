export default function CardWrapper() {
    
    return (
        <div className="flex justify-between gap-4">
            <Card title='Lands' value='0'></Card>
            <Card title='Creatures' value='0'></Card>
            <Card title='Instants' value='0'></Card>
            <Card title='Sorceries' value='0'></Card>
            <Card title='Enchantments' value='0'></Card>
        </div>
    )
}

export function Card(
    {title, value} : {title: string, value: string | number}
) {
    return (
        <div className="flex flex-grow rounded-md h-40 flex-col flex-1 overflow-hidden">
            <div className="flex justify-center items-center flex-1 bg-gray-400">
                {title}
            </div>
            <div className="flex justify-center items-center flex-1 bg-gray-500 ">
                {value}
            </div>
        </div>
    )
}