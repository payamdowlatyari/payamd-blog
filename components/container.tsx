type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div className="container w-10/12 lg:w-8/12 m-auto px-4">{children}</div>
}
