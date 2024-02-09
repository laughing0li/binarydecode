import { Container } from '@/components/Container'
import Faqs from '@/components/Faqs'
import TransferLayout from '@/components/TransferLayout'


export default async function Home() {

  return (
    <>
      <Container>
        <div className='flex justify-center w-full'>
        </div>
        <TransferLayout />
        <Faqs />
      </Container>

    </>
  )
}