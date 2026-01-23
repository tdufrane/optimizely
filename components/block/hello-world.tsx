import { HelloWorld as HelloWorldProps } from '@/lib/optimizely/types/generated'

export default function HelloWorld({
  message,
  detailedmessage,
}: HelloWorldProps) {
  return (
    <div>
      <h2>{message}</h2>
      <p>{detailedmessage}</p>
    </div>
  )
}
