export default function LocalePage({ params }: { params: { locale: string } }) {
    return <div>Locale: {params.locale}</div>
}
