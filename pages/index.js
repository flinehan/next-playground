import Link from 'next/link'

export default function HomePath() {

  return (
    <div>
      <ul>
        <li>
          <Link href="/3D-Printed-LED-Mood-Lamp">
            <a>3D-Printed-LED-Mood-Lamp</a>
          </Link>
        </li>
        <li>
          <Link href="/LED-Throwies">
            <a>LED-Throwies</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
