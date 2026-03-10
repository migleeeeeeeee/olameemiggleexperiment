import { forwardRef, useState, useRef, useCallback, useEffect, type HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export interface SliderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current value (0–100) */
  value?: number;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Show min/max labels */
  showLabels?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Track fill color */
  fillColor?: string;
  /** Track background color */
  trackColor?: string;
  /** Callback when value changes */
  onChange?: (value: number) => void;
}

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      className,
      value: controlledValue,
      min = 0,
      max = 100,
      step = 1,
      showLabels = true,
      disabled = false,
      fillColor = '#7A5FFF',
      trackColor = '#EFF0F3',
      onChange,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState(controlledValue ?? 0);
    const trackRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const currentValue = controlledValue !== undefined ? controlledValue : internalValue;
    const percentage = Math.min(100, Math.max(0, ((currentValue - min) / (max - min)) * 100));

    useEffect(() => {
      if (controlledValue !== undefined) {
        setInternalValue(controlledValue);
      }
    }, [controlledValue]);

    const updateValue = useCallback(
      (clientX: number) => {
        if (!trackRef.current || disabled) return;
        const rect = trackRef.current.getBoundingClientRect();
        const fraction = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
        const raw = min + fraction * (max - min);
        const stepped = Math.round(raw / step) * step;
        const clamped = Math.min(max, Math.max(min, stepped));

        setInternalValue(clamped);
        onChange?.(clamped);
      },
      [min, max, step, disabled, onChange],
    );

    const handleMouseDown = useCallback(
      (e: React.MouseEvent) => {
        if (disabled) return;
        e.preventDefault();
        isDragging.current = true;
        updateValue(e.clientX);

        const onMouseMove = (ev: MouseEvent) => {
          if (isDragging.current) updateValue(ev.clientX);
        };
        const onMouseUp = () => {
          isDragging.current = false;
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      },
      [disabled, updateValue],
    );

    const handleTouchStart = useCallback(
      (e: React.TouchEvent) => {
        if (disabled) return;
        isDragging.current = true;
        updateValue(e.touches[0].clientX);

        const onTouchMove = (ev: TouchEvent) => {
          if (isDragging.current) updateValue(ev.touches[0].clientX);
        };
        const onTouchEnd = () => {
          isDragging.current = false;
          document.removeEventListener('touchmove', onTouchMove);
          document.removeEventListener('touchend', onTouchEnd);
        };
        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', onTouchEnd);
      },
      [disabled, updateValue],
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (disabled) return;
        let newValue = currentValue;
        switch (e.key) {
          case 'ArrowRight':
          case 'ArrowUp':
            newValue = Math.min(max, currentValue + step);
            break;
          case 'ArrowLeft':
          case 'ArrowDown':
            newValue = Math.max(min, currentValue - step);
            break;
          case 'Home':
            newValue = min;
            break;
          case 'End':
            newValue = max;
            break;
          default:
            return;
        }
        e.preventDefault();
        setInternalValue(newValue);
        onChange?.(newValue);
      },
      [disabled, currentValue, min, max, step, onChange],
    );

    const disabledStyles = disabled
      ? 'opacity-50 pointer-events-none cursor-not-allowed'
      : 'cursor-pointer';

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-[4px] p-[10px]',
          disabledStyles,
          className,
        )}
        {...props}
      >
        {showLabels && (
          <span className="font-body font-bold text-[10px] leading-[12px] tracking-[-0.24px] text-[#6249D4] whitespace-nowrap select-none">
            {min}%
          </span>
        )}

        {/* Track container */}
        <div
          ref={trackRef}
          className="relative flex-1 h-[6px]"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Background track */}
          <div
            className="absolute inset-0 rounded-[8px]"
            style={{ backgroundColor: trackColor }}
          />

          {/* Fill track */}
          <div
            className="absolute top-0 left-0 h-full rounded-[8px] transition-[width] duration-150"
            style={{ width: `${percentage}%`, backgroundColor: fillColor }}
          >
            {/* Thumb */}
            <div
              role="slider"
              tabIndex={disabled ? -1 : 0}
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={currentValue}
              aria-disabled={disabled}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 size-[20px] rounded-full transition-shadow duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5FFF]/40"
              style={{ backgroundColor: fillColor }}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>

        {showLabels && (
          <span className="font-body font-bold text-[10px] leading-[12px] tracking-[-0.24px] text-[#6249D4] whitespace-nowrap select-none">
            {max}%
          </span>
        )}
      </div>
    );
  },
);

Slider.displayName = 'Slider';
