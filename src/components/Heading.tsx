
interface PropsHeader {
    title: string
    center?: boolean
}

export const Heading = ({title, center}:PropsHeader) => {
  return (
    <div className={`${center ? 'text-center' : 'text-start'}`}>
        <div className="text-2xl font-light mb-5">
            {title}
        </div>
    </div>
  )
}
