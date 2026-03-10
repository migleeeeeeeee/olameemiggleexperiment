/**
 * Olamee Design System — Card
 *
 * 100 % Figma-faithful implementation of "Cards" (node 396:739).
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ Card Component Set                                                   │
 * │                                                                      │
 * │ Variants:                                                            │
 * │   Card         — Container with flexible slot-based composition      │
 * │   ClickableCard — Interactive card with hover/focus/press states     │
 * │   ProfileCard  — Specialized card with avatar, name, tag, role      │
 * │                                                                      │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │ Base Specs (from Figma)                                              │
 * │   bg:           lavender-50                                          │
 * │   border:       1px solid gunmetal-200                               │
 * │   radius:       12px (radii.md)                                      │
 * │   padding:      16px (standard) / 24px (large profile)              │
 * │   gap:          16px                                                 │
 * │   min-width:    256px                                                │
 * │   overflow:     clip                                                 │
 * │   title:        Montserrat SemiBold 20/24 (h5)                       │
 * │   subtitle:     Karla Regular 14/18 (body-base, gunmetal-500)        │
 * │   body:         Karla Regular 14/18 (body-base, gunmetal)            │
 * │   body-large:   Karla Regular 16/20 (body-lg, gunmetal)              │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │ Clickable Card States                                                │
 * │   default:  bg lavender-50, border gunmetal-200                      │
 * │   hover:    bg gunmetal-100, border gunmetal-300, elevation-1        │
 * │   focus:    2px ring gunmetal-500, 3px offset, rounded-14            │
 * │   pressed:  bg gunmetal-100, border gunmetal-500                     │
 * └──────────────────────────────────────────────────────────────────────┘
 */

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../lib/cn';

/* ─── Card CVA Variant Map ──────────────────────────────────────────── */

const cardVariants = cva(
  /* Base — shared across all card variants */
  [
    'flex flex-col items-start',
    'bg-lavender-50 border border-solid border-gunmetal-200',
    'rounded-[12px] overflow-clip',
    'min-w-[256px]',
  ],
  {
    variants: {
      /**
       * padding — inner spacing
       * compact:  16px (standard card, clickable card)
       * spacious: 24px (profile big card, large layouts)
       */
      padding: {
        compact: 'p-[16px] gap-[16px]',
        spacious: 'p-[24px] gap-[16px]',
      },

      /**
       * elevation — shadow level (uses design system elevation tokens)
       * none:     flat card with border only
       * low:      elevation-1 (cards, banners, elevated buttons)
       * medium:   elevation-2 (app bars, menus, nav bars)
       */
      elevation: {
        none: '',
        low: 'shadow-[var(--shadow-elevation-1)]',
        medium: 'shadow-[var(--shadow-elevation-2)]',
      },

      /**
       * width — card width constraint
       * auto:  natural width based on content
       * fixed: 360px (default card layout from Figma)
       * full:  100% width
       */
      width: {
        auto: '',
        fixed: 'w-[360px]',
        full: 'w-full',
      },
    },

    defaultVariants: {
      padding: 'compact',
      elevation: 'none',
      width: 'auto',
    },
  },
);

/* ─── Card Title Typography ───────────────────────────────────────── */
/* Montserrat SemiBold 20/24 — matches Typography h5 variant */

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'font-heading font-semibold',
        'text-[length:var(--font-size-h5)] leading-[var(--line-height-h5)]',
        'text-gunmetal',
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  ),
);
CardTitle.displayName = 'CardTitle';

/* ─── Card Subtitle Typography ────────────────────────────────────── */
/* Karla Regular 14/18 — matches Typography body-base muted */

const CardSubtitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        'font-body font-normal',
        'text-[length:var(--font-size-body-base)] leading-[var(--line-height-body-base)]',
        'text-gunmetal-500',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  ),
);
CardSubtitle.displayName = 'CardSubtitle';

/* ─── Card Body Typography ─────────────────────────────────────────── */
/* Karla Regular — base 14/18, large 16/20 */

const cardBodyVariants = cva(
  ['font-body font-normal text-gunmetal'],
  {
    variants: {
      size: {
        base: 'text-[length:var(--font-size-body-base)] leading-[var(--line-height-body-base)]',
        large: 'text-[length:var(--font-size-body-lg)] leading-[var(--line-height-body-lg)]',
      },
    },
    defaultVariants: {
      size: 'base',
    },
  },
);

const CardBody = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardBodyVariants>
>(({ className, size, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardBodyVariants({ size }), className)}
    {...props}
  >
    {children}
  </div>
));
CardBody.displayName = 'CardBody';

/* ─── Card Header (flexible header with optional actions) ──────────── */

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col items-start gap-[8px] w-full', className)}
      {...props}
    >
      {children}
    </div>
  ),
);
CardHeader.displayName = 'CardHeader';

/* ─── Card Footer ──────────────────────────────────────────────────── */

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center gap-[8px] w-full', className)}
      {...props}
    >
      {children}
    </div>
  ),
);
CardFooter.displayName = 'CardFooter';

/* ─── Card (Main Component) ──────────────────────────────────────── */

export interface CardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof cardVariants> {
  /** Render as child element (Radix Slot pattern) */
  asChild?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, padding, elevation, width, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        ref={ref}
        className={cn(cardVariants({ padding, elevation, width }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Card.displayName = 'Card';

/* ─── ClickableCard ──────────────────────────────────────────────── */

/**
 * ClickableCard — Interactive card with hover/focus/pressed states.
 *
 * From Figma "Clickable Cards" (node 396:1622):
 *   Default:  bg lavender-50, border gunmetal-200, rounded-12
 *   Hover:    bg gunmetal-100, border gunmetal-300, elevation-1
 *   Focus:    ring-2 gunmetal-500, ring-offset-3px, rounded-14
 *   Pressed:  bg gunmetal-100, border gunmetal-500
 */

export interface ClickableCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  /** Card content — typically a row with title + tag + icon */
  children: ReactNode;
  /** Whether the card is currently in a pressed/selected state */
  pressed?: boolean;
}

const ClickableCard = forwardRef<HTMLDivElement, ClickableCardProps>(
  ({ className, pressed = false, children, ...props }, ref) => (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      className={cn(
        'flex flex-col items-start justify-center',
        'min-w-[256px] w-[560px] p-[16px] rounded-[12px]',
        'border border-solid',
        'cursor-pointer select-none',
        'transition-all duration-200 ease-out',
        /* Default */
        'bg-lavender-50 border-gunmetal-200',
        /* Hover */
        'hover:bg-gunmetal-100 hover:border-gunmetal-300',
        'hover:shadow-[var(--shadow-elevation-1)]',
        /* Focus-visible (2px ring + outer offset) */
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gunmetal-500',
        'focus-visible:ring-offset-[3px] focus-visible:rounded-[14px]',
        /* Active / Pressed */
        'active:bg-gunmetal-100 active:border-gunmetal-500',
        'active:shadow-none',
        pressed && 'bg-gunmetal-100 border-gunmetal-500 shadow-none',
        className,
      )}
      aria-pressed={pressed}
      {...props}
    >
      {children}
    </div>
  ),
);
ClickableCard.displayName = 'ClickableCard';

/* ─── ProfileCard ─────────────────────────────────────────────────── */

/**
 * ProfileCard — Card with avatar, name, tag badge, role, and body text.
 *
 * From Figma "Sample Profile Layout" (node 396:1603):
 *   Avatar: 46px circle, rounded-full, bg lavender-50, border gunmetal-300
 *   Name:   Karla Medium 16/20 (body-lg, gunmetal)
 *   Role:   Karla Regular 16/20 (body-lg, gunmetal-500)
 *   Body:   Karla Regular 14/18 (body-base, gunmetal)
 *   Action: 16px icon wrapper (kebab menu)
 */

export interface ProfileCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof cardVariants> {
  /** Avatar element — pass an <img> or initials element */
  avatar?: ReactNode;
  /** Name / primary label */
  name: string;
  /** Role / subtitle text */
  role?: string;
  /** Optional tag badge next to the name (pass a <Tag> or <Chip>) */
  tag?: ReactNode;
  /** Optional action element (e.g., kebab menu icon button) */
  action?: ReactNode;
  /** Body text / description */
  children?: ReactNode;
}

const ProfileCard = forwardRef<HTMLDivElement, ProfileCardProps>(
  (
    {
      className,
      padding,
      elevation,
      width,
      avatar,
      name,
      role,
      tag,
      action,
      children,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ padding, elevation, width }),
        className,
      )}
      {...props}
    >
      {/* Header row: avatar + name/tag + action */}
      <div className="flex items-start justify-between w-full">
        <div className="flex items-center gap-[16px]">
          {/* Avatar */}
          {avatar && (
            <div className="relative size-[46px] rounded-full overflow-clip border border-gunmetal-300 bg-lavender-50 shrink-0 flex items-center justify-center">
              {avatar}
            </div>
          )}

          {/* Name + Tag + Role */}
          <div className="flex flex-col gap-[4px] items-start min-w-0">
            <div className="flex items-center gap-[8px]">
              <span className="font-body font-medium text-[length:var(--font-size-body-lg)] leading-[var(--line-height-body-lg)] text-gunmetal">
                {name}
              </span>
              {tag}
            </div>
            {role && (
              <span className="font-body font-normal text-[length:var(--font-size-body-lg)] leading-[var(--line-height-body-lg)] text-gunmetal-500">
                {role}
              </span>
            )}
          </div>
        </div>

        {/* Action slot (kebab menu, etc.) */}
        {action && (
          <div className="flex items-center justify-center shrink-0">
            {action}
          </div>
        )}
      </div>

      {/* Body content */}
      {children && (
        <div className="font-body font-normal text-[length:var(--font-size-body-base)] leading-[var(--line-height-body-base)] text-gunmetal w-full">
          {children}
        </div>
      )}
    </div>
  ),
);
ProfileCard.displayName = 'ProfileCard';

/* ─── ContentCard ──────────────────────────────────────────────────── */

/**
 * ContentCard — Large card container for complex content (tables, forms, etc.)
 *
 * From Figma "Property 1=Profile Big Card" (node 5282:20011):
 *   bg:       #FDFDFE (lavender-50)
 *   border:   1px solid #D7D8DC (gunmetal-200)
 *   radius:   24px
 *   padding:  32px
 *   gap:      16px
 *   min-w:    256px
 *   overflow: clip
 *
 * Use this for page-level cards that wrap tables, toolbars, forms,
 * and other complex content. Significantly larger than the base Card
 * (24px radius vs 12px, 32px padding vs 16/24px).
 */

const contentCardVariants = cva(
  [
    'flex flex-col items-start',
    'bg-[#FDFDFE] border border-solid border-[#D7D8DC]',
    'rounded-[24px] overflow-clip',
    'min-w-[256px]',
    'p-[32px] gap-[16px]',
  ],
  {
    variants: {
      /**
       * elevation — shadow level
       * none:   flat with border only
       * low:    elevation-1 (subtle lift)
       * medium: elevation-2 (prominent)
       */
      elevation: {
        none: '',
        low: 'shadow-[var(--shadow-elevation-1)]',
        medium: 'shadow-[var(--shadow-elevation-2)]',
      },

      /**
       * width — card width constraint
       * auto: natural width based on content
       * full: 100% width (fills parent)
       */
      width: {
        auto: '',
        full: 'w-full',
      },
    },

    defaultVariants: {
      elevation: 'none',
      width: 'full',
    },
  },
);

export interface ContentCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof contentCardVariants> {
  /** Render as child element (Radix Slot pattern) */
  asChild?: boolean;
}

const ContentCard = forwardRef<HTMLDivElement, ContentCardProps>(
  ({ className, elevation, width, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        ref={ref}
        className={cn(contentCardVariants({ elevation, width }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
ContentCard.displayName = 'ContentCard';

/* ─── Exports ─────────────────────────────────────────────────────── */

export {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardHeader,
  CardFooter,
  ClickableCard,
  ProfileCard,
  ContentCard,
  cardVariants,
  cardBodyVariants,
  contentCardVariants,
};
