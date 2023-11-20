export function Footer() {
  return (
    <footer className="py-6 px-4 max-w-screen-2xl m-auto">
      <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Feito por{" "}
          <a
            href='mailto: leonardoalc23@gmail.com'
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Leonardo Alcantara
          </a>
          . O codigo fonte está disponível em {" "}
          <a
            href='https://github.com/LeoNerd23/magic-library'
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}