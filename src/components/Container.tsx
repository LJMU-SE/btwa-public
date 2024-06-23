export default function Container({ children }: Readonly<{ children: React.ReactNode }>) {
    return <div className="w-full px-[130px] xl:px-[250px]">{children}</div>;
}
