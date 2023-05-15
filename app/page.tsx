import Link from 'next/link';

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
  <main>
    <h1>Homepage</h1>
    <ul>
    <li><Link href="/articles/1">Go to an existent article (works)</Link></li>
    <li><Link href="/articles/2">Go to a non-existent article (works)</Link></li>
    <li><Link href="/about">Go to an non-existent page (does not work)</Link></li>
    </ul>
  </main>)
}
