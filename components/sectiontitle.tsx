interface SectionTitleProps {
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

const SectionTitle = ({ title = "", subtitle, center = false, light = false, level = 2 }: SectionTitleProps) => {
  // Verificar se o título existe antes de tentar dividi-lo
  const words = title ? title.split(" ") : []
  const firstWord = words.length > 0 ? words[0] : ""
  const restOfTitle = words.length > 1 ? words.slice(1).join(" ") : ""

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <HeadingTag
        className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-gray-800"}`}
        id={title.toLowerCase().replace(/\s+/g, "-")}
      >
        {title && (
          <>
            <span className="text-blue-600">{firstWord}</span>
            {restOfTitle && <span> {restOfTitle}</span>}
          </>
        )}
      </HeadingTag>
      {subtitle && <p className={`text-lg ${light ? "text-white/80" : "text-gray-600"}`}>{subtitle}</p>}
      <div
        className={`h-1 w-20 bg-blue-600 mt-4 ${center ? "mx-auto" : ""}`}
        role="presentation"
        aria-hidden="true"
      ></div>
    </div>
  )
}

export default SectionTitle
