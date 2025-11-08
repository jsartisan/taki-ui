import * as React from "react"

interface UseControllableStateProps<T> {
  value?: T
  defaultValue?: T
  onChange?: (value: T) => void
}

export function useControllableState<T>({
  value: controlledValue,
  defaultValue,
  onChange,
}: UseControllableStateProps<T>): [T | undefined, (next: T) => void] {
  const isControlled = controlledValue !== undefined
  const [uncontrolledValue, setUncontrolledValue] = React.useState<
    T | undefined
  >(defaultValue)

  const value = isControlled ? controlledValue : uncontrolledValue

  const setValue = React.useCallback(
    (next: T) => {
      if (!isControlled) {
        setUncontrolledValue(next)
      }
      onChange?.(next)
    },
    [isControlled, onChange]
  )

  return [value, setValue]
}
