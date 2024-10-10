type HrTextProps = {
  text: string
  variant?: 'default' | 'white'
}
export function HrText({ text, variant = 'default' }: HrTextProps) {
  return (
    <div
      data-aos="fade-down-right"
      data-aos-easing="ease-in"
      data-aos-duration="500"
      data-aos-offset="0"
      className="flexColStart lg:flexStart mb-6 flex-col-reverse gap-4 lg:flex-row">
      <hr
        className={`w-[72px] border-b-2 ${variant === 'default' ? 'border-primary-700' : 'border-white'}`}
      />
      <p
        className={`font-base font-bold uppercase tracking-wide ${variant === 'default' ? 'text-primary-700' : 'text-white'}`}>
        {text}
      </p>
    </div>
  )
}
