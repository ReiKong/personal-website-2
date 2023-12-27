interface ChipProps {
    content: string | JSX.Element;
}

export default function Chip({ content }: ChipProps) {
    return (
        <div className="w-auto rounded border border-secondary2 pt-1 pb-0.5 px-2">
            <p>{content}</p>
        </div>
    )
}