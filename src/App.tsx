import { GithubLogo, QrCode, LinkedinLogo } from 'phosphor-react'

export function App() {
  return (
    <div className="container">
      <img
        className="avatar"
        src="https://github.com/vitordcode.png"
        alt="Vitor de Paula avatar"
      />
      <span>@vitordpaula1</span>

      <a
        className="social-links"
        href="https://github.com/vitordcode"
        target="_blank"
      >
        <GithubLogo size={24} />
        <span>Github</span>
      </a>

      <a
        className="social-links"
        href="https://vitordcode.com.br"
        target="_blank"
      >
        <QrCode size={24} />
        <span>Portfolio</span>
      </a>

      <a
        className="social-links"
        href="https://linkedin.com/vitordcode"
        target="_blank"
      >
        <LinkedinLogo size={24} />
        <span>Linkdin</span>
      </a>
    </div>
  )
}
