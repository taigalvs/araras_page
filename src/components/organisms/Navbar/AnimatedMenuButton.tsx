import { Button } from '@/components/atoms'
import { forwardRef } from 'react'

type TAnimatedMenuButton = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const AnimatedMenuButton = forwardRef<
  HTMLButtonElement,
  TAnimatedMenuButton
>(({ isOpen, setIsOpen }, ref) => {
  return (
    <Button
      ref={ref}
      unstyled
      className="flexColCenter text-white "
      onClick={() => setIsOpen(!isOpen)}>
      <span
        className={`block h-0.5 w-6 rounded-sm bg-white 
      transition-all duration-300 ease-out ${
        isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
      }`}
      />
      <span
        className={`my-0.5 block h-0.5 w-6 rounded-sm 
      bg-white transition-all duration-300 ease-out ${
        isOpen ? 'opacity-0' : 'opacity-100'
      }`}
      />
      <span
        className={`block h-0.5 w-6 rounded-sm bg-white 
      transition-all duration-300 ease-out ${
        isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
      }`}
      />
    </Button>
  )
})
