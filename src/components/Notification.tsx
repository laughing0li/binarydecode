
export default function Notification({ setShowNotification, error }: { setShowNotification: (value: boolean) => void, error: string})  {
    const handleReset = () => {
        setShowNotification(false)
    }
    return (   
        <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <i className="bi bi-x-circle-fill h-5 w-5 text-red-400 hover:cursor-pointer" onClick={handleReset} aria-hidden="true"></i>
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">{error}</h3>
                </div>
            </div>
        </div>
    )
}
