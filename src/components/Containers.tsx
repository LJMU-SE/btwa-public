export function Container({ children }: Readonly<{ children?: React.ReactNode }>) {
    return <div className="w-full px-[40px] md:px-[130px] xl:px-[180px]">{children}</div>;
}
