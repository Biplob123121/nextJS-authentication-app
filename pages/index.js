import Head from 'next/head'

export default function Home() {
  return (
    <section className='bg-indigo-100'>
      <Head>
        <title>Next JS Authentication App</title>
      </Head>

      <div className='container mx-auto'>
        <h1 className='py-6 text-3xl font-bold text-center text-gray-600'>Next JS Authentication App</h1>
      </div>
    </section>
  )
}
