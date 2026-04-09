type WorkInProgressHeroProps = {
    id?: string;
};

export default function WorkInProgressHero({ id = "wip" }: WorkInProgressHeroProps) {
    return (
        <section
            id={id}
            className="h-[calc(100vh-40px)] flex pb-20 sm:pb-10 flex-col justify-end items-start self-stretch gap-y-[20px] relative"
        >
            <div className="w-full flex-1 min-h-0" aria-hidden />
            <div className="w-[100%] flex flex-col gap-0">
                <h1 className="h1Header text-secondary1 animate-rise leading-none">
                    WORK <span className="font-serif italic text-secondary1">IN</span> PROGRESS
                </h1>
            </div>
        </section>
    );
}
