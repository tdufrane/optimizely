import { HelloWorld as HelloWorldProps } from '@/lib/optimizely/types/generated'

export default function HelloWorld({ message }: HelloWorldProps) {
  return (
    <div>
      <h2>{message}</h2>
    </div>
  )
}
