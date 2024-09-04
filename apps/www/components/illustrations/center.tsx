import { createComponent } from "./create-component"

export const CenterAnatomy = createComponent((props) => {
  const { palette, ...rest } = props
  return (
    <svg
      width={400}
      height={300}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect x={124} y={74} width={152} height={152} fill={palette[2]} />
      <path
        d="M223.887 150.556H224.887L224.887 148.556H223.887V150.556ZM178.103 150.556L179.103 150.556V148.556H178.103V150.556ZM182.085 148.556H181.085V150.556L182.085 150.556V148.556ZM186.066 150.556H187.066V148.556H186.066V150.556ZM190.047 148.556H189.047V150.556L190.047 150.556V148.556ZM194.028 150.556L195.028 150.556V148.556H194.028V150.556ZM198.009 148.556H197.009V150.556H198.009V148.556ZM201.991 150.556H202.991V148.556H201.991V150.556ZM205.972 148.556H204.972V150.556H205.972L205.972 148.556ZM209.953 150.556L210.953 150.556V148.556H209.953V150.556ZM213.934 148.556H212.934V150.556H213.934V148.556ZM217.915 150.556L218.915 150.556V148.556H217.915V150.556ZM221.897 148.556H220.897V150.556H221.897V148.556ZM176.113 150.556L178.103 150.556V148.556H176.113L176.113 150.556ZM182.085 150.556H186.066V148.556H182.085V150.556ZM190.047 150.556L194.028 150.556V148.556H190.047V150.556ZM198.009 150.556H201.991V148.556H198.009V150.556ZM205.972 150.556H209.953V148.556H205.972L205.972 150.556ZM213.934 150.556H217.915V148.556H213.934V150.556ZM221.897 150.556L223.887 150.556V148.556H221.897V150.556Z"
        fill={palette[15]}
      />
      <path
        d="M199 173.444V174.444H201V173.444H199ZM199 127.66V128.66H201V127.66H199ZM201 131.641V130.641H199V131.641H201ZM199 135.622V136.622H201V135.622H199ZM201 139.603V138.603H199V139.603H201ZM199 143.585V144.585H201V143.585H199ZM201 147.566V146.566H199V147.566H201ZM199 151.547V152.547H201V151.547H199ZM201 155.528V154.528H199V155.528H201ZM199 159.509V160.509H201V159.509H199ZM201 163.491V162.491H199V163.491H201ZM199 167.472V168.472H201V167.472H199ZM201 171.453V170.453H199V171.453H201ZM199 125.669V127.66H201V125.669H199ZM199 131.641V135.622H201V131.641H199ZM199 139.603V143.585H201V139.603H199ZM199 147.566V151.547H201V147.566H199ZM199 155.528V159.509H201V155.528H199ZM199 163.491V167.472H201V163.491H199ZM199 171.453V173.444H201V171.453H199Z"
        fill={palette[15]}
      />
    </svg>
  )
})