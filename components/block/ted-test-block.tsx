import { TedTestBlock as TedTestBlockProps } from '@/lib/optimizely/types/generated'

export default function TedTestBlock({ stringTest }: TedTestBlockProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <p
          className="text-lg leading-relaxed text-[#2d2d2d]"
          data-epi-edit="stringTest"
        >
          {stringTest}
        </p>
      </div>
    </section>
  )
}
