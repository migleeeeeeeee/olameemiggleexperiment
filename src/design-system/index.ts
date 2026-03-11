/**
 * Olamee Design System — Public API
 *
 * Single entry point for all tokens, theme, and components.
 * import { Button, Text, tokens, ThemeProvider } from '@/design-system';
 */

// ── Tokens ──────────────────────────────────────────────────────
export { tokens, colors, gradients, typography, spacing, elevation, radii } from './tokens';
export type { ColorFamily, SpacingKey, ElevationLevel, RadiiKey } from './tokens';

// ── Theme ───────────────────────────────────────────────────────
export { ThemeProvider, useTheme } from './themes/ThemeProvider';

// ── Primitives ──────────────────────────────────────────────────
export { Button, buttonVariants } from './primitives/Button';
export type { ButtonProps } from './primitives/Button';

export { Icon, iconVariants } from './primitives/Icon';
export type { IconProps, IconSize, FaStyle } from './primitives/Icon';
export { iconRegistry, getIconsByCategory, iconCategories } from './primitives/Icon';
export type { IconName, IconCategory, IconEntry } from './primitives/Icon';

export { IconButton } from './primitives/IconButton';
export type { IconButtonProps } from './primitives/IconButton';

export { Input, inputFieldVariants } from './primitives/Input';
export type { InputProps } from './primitives/Input';

export { InputWithDropdown } from './primitives/InputWithDropdown';
export type { InputWithDropdownProps } from './primitives/InputWithDropdown';

export { SearchBar } from './primitives/SearchBar';
export type { SearchBarProps } from './primitives/SearchBar';

export { Text, typographyVariants } from './primitives/Typography';
export type { TextProps } from './primitives/Typography';

export { Checkbox } from './primitives/Checkbox';
export type { CheckboxProps } from './primitives/Checkbox';

export { RadioGroup, RadioItem } from './primitives/Radio';
export type { RadioItemProps } from './primitives/Radio';

export { Toggle } from './primitives/Toggle';
export type { ToggleProps } from './primitives/Toggle';

export { Chip, FilterChip, chipVariants, filterChipVariants } from './primitives/Chip';
export type { ChipProps, FilterChipProps } from './primitives/Chip';

export { Tag, tagVariants } from './primitives/Tag';
export type { TagProps } from './primitives/Tag';

export { Tooltip, RichTooltip } from './primitives/Tooltip';
export type { TooltipProps, RichTooltipProps } from './primitives/Tooltip';

export { ProgressBar } from './primitives/ProgressBar';
export type { ProgressBarProps } from './primitives/ProgressBar';

export { StepProgress } from './primitives/StepProgress';
export type { StepProgressProps, StepItem } from './primitives/StepProgress';

export { CircularChart, circularChartVariants } from './primitives/CircularChart';
export type { CircularChartProps } from './primitives/CircularChart';

export { BarProgress } from './primitives/BarProgress';
export type { BarProgressProps } from './primitives/BarProgress';

export { Slider } from './primitives/Slider';
export type { SliderProps } from './primitives/Slider';

export { Textarea, textareaFieldVariants } from './primitives/Textarea';
export type { TextareaProps } from './primitives/Textarea';

export { DatePickerInput, datePickerInputVariants } from './primitives/DatePickerInput';
export type { DatePickerInputProps } from './primitives/DatePickerInput';

export { DateRangePickerInput } from './primitives/DateRangePickerInput';
export type { DateRangePickerInputProps } from './primitives/DateRangePickerInput';

export { CalendarDatePicker } from './primitives/CalendarDatePicker';
export type { CalendarDatePickerProps, CalendarMode } from './primitives/CalendarDatePicker';

export { TimePickerInput, timePickerInputVariants } from './primitives/TimePickerInput';
export type { TimePickerInputProps } from './primitives/TimePickerInput';

export { TimeRangePickerInput } from './primitives/TimeRangePickerInput';
export type { TimeRangePickerInputProps } from './primitives/TimeRangePickerInput';

export { AmPmToggle } from './primitives/AmPmToggle';
export type { AmPmToggleProps, AmPmValue } from './primitives/AmPmToggle';

export { TimePickerUI } from './primitives/TimePickerUI';
export type { TimePickerUIProps, TimeFormat } from './primitives/TimePickerUI';

export { TimeRangePickerUI } from './primitives/TimeRangePickerUI';
export type { TimeRangePickerUIProps, TimeRangeFormat } from './primitives/TimeRangePickerUI';

export { Counter } from './primitives/Counter';
export type { CounterProps } from './primitives/Counter';

export { FileUpload } from './primitives/FileUpload';
export type { FileUploadProps, UploadedFile } from './primitives/FileUpload';

export { Card, CardTitle, CardSubtitle, CardBody, CardHeader, CardFooter, ClickableCard, ProfileCard, ContentCard, cardVariants, cardBodyVariants, contentCardVariants } from './primitives/Card';
export type { CardProps, ClickableCardProps, ProfileCardProps, ContentCardProps } from './primitives/Card';

export { Tabs, Tab, tabItemVariants } from './primitives/Tabs';
export type { TabsProps, TabProps } from './primitives/Tabs';

export { Toast, toastVariants } from './primitives/Toast';
export type { ToastProps } from './primitives/Toast';

export { Snackbar } from './primitives/Snackbar';
export type { SnackbarProps } from './primitives/Snackbar';

export { Notification, notificationVariants } from './primitives/Notification';
export type { NotificationProps } from './primitives/Notification';

// ── Layout ──────────────────────────────────────────────────────
export { TopNavbar } from './layout/TopNavbar';
export type { TopNavbarProps, TopNavbarState } from './layout/TopNavbar';

export { Sidebar } from './layout/Sidebar';
export type { SidebarProps, SidebarItem, SidebarSubItem, SidebarSection, SidebarTheme } from './layout/Sidebar';

// ── Composites ──────────────────────────────────────────────────
export { SingleSelectDropdown, MultiSelectDropdown, MultiSelectorSearchBar, PhoneNumberField, CountrySelection, DropdownMenuItem } from './composites/SelectionField';
export type { SingleSelectDropdownProps, MultiSelectDropdownProps, MultiSelectorSearchBarProps, PhoneNumberFieldProps, PhoneNumberValue, PhoneNumberSize, CountrySelectionProps, SelectionOption, SelectionFieldSize } from './composites/SelectionField';

export { ModalForm, CardForm, FormTitleBar, FormFieldRow, FormFooter, FormBody, modalFormVariants, cardFormVariants, formBodyVariants } from './composites/Form';
export type { ModalFormProps, CardFormProps, FormTitleBarProps, FormFieldRowProps, FormFooterProps, FormBodyProps } from './composites/Form';

// ── Types ───────────────────────────────────────────────────────
export type {
  ButtonHierarchy,
  ButtonSize,
  ButtonColorScheme,
  InteractiveState,
  ComponentSize,
  Orientation,
} from './types/components.types';

// ── Utilities ───────────────────────────────────────────────────
export { cn } from './lib/cn';
