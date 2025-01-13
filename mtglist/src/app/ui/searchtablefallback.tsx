export function SearchTableFallBack() {

    const placeholders = [1,2,3,4,5,6]

    return(
        <div className="flex flex-col gap-2">
            {placeholders.map((placeholder) => {
                const cardName = placeholder;
                return (
                    <div key={placeholder} className="bg-gray-200/20 rounded-md p-2">
                        Searching...
                    </div>
                )
            })}
        </div>
    );
}