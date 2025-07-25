
interface PopUp {
    message: string
}

export default function PopUp( { message }: PopUp ) {
    

    return (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm">
        <div className="bg-white shadow-lg px-35 py-15 rounded-xl border text-center border-gray-200 animate-fade-in-out">
          <p className="text-gray-800 text-base font-medium">{message}</p>
        </div>
      </div>
    )
}