import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import type { SelectionOption } from './selectionField.types';

interface UseSelectionFieldOptions {
  options: SelectionOption[];
  multiple?: boolean;
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  searchable?: boolean;
  onAddNew?: (label: string) => void;
}

export function useSelectionField({
  options,
  multiple = false,
  value,
  onChange,
  searchable = false,
  onAddNew,
}: UseSelectionFieldOptions) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [addNewText, setAddNewText] = useState('');
  const listRef = useRef<HTMLDivElement>(null);

  // Normalize value to Set
  const selectedValues = useMemo(() => {
    if (value == null) return new Set<string>();
    if (Array.isArray(value)) return new Set(value);
    return new Set([value]);
  }, [value]);

  // Filter options by search query
  const filteredOptions = useMemo(() => {
    if (!searchable || !searchQuery.trim()) return options;
    const q = searchQuery.toLowerCase();
    return options.filter(
      (opt) =>
        opt.label.toLowerCase().includes(q) ||
        opt.value.toLowerCase().includes(q),
    );
  }, [options, searchQuery, searchable]);

  // Reset search and highlight when closing
  useEffect(() => {
    if (!open) {
      setSearchQuery('');
      setHighlightedIndex(-1);
      setAddNewText('');
    }
  }, [open]);

  const select = useCallback(
    (optionValue: string) => {
      if (multiple) {
        const next = new Set(selectedValues);
        if (next.has(optionValue)) {
          next.delete(optionValue);
        } else {
          next.add(optionValue);
        }
        onChange?.(Array.from(next));
      } else {
        onChange?.(optionValue);
        setOpen(false);
      }
    },
    [multiple, selectedValues, onChange],
  );

  const deselect = useCallback(
    (optionValue: string) => {
      if (multiple) {
        const next = new Set(selectedValues);
        next.delete(optionValue);
        onChange?.(Array.from(next));
      } else {
        onChange?.('');
      }
    },
    [multiple, selectedValues, onChange],
  );

  const clear = useCallback(() => {
    onChange?.(multiple ? [] : '');
  }, [multiple, onChange]);

  const handleAddNew = useCallback(() => {
    const text = addNewText.trim();
    if (text && onAddNew) {
      onAddNew(text);
      setAddNewText('');
    }
  }, [addNewText, onAddNew]);

  // Get the label for a value
  const getLabel = useCallback(
    (val: string) => options.find((o) => o.value === val)?.label ?? val,
    [options],
  );

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!open) {
        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setOpen(true);
        }
        return;
      }

      const enabledOptions = filteredOptions.filter((o) => !o.disabled);

      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault();
          setHighlightedIndex((prev) => {
            const next = prev + 1;
            return next >= enabledOptions.length ? 0 : next;
          });
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          setHighlightedIndex((prev) => {
            const next = prev - 1;
            return next < 0 ? enabledOptions.length - 1 : next;
          });
          break;
        }
        case 'Enter': {
          e.preventDefault();
          if (highlightedIndex >= 0 && highlightedIndex < enabledOptions.length) {
            select(enabledOptions[highlightedIndex].value);
          }
          break;
        }
        case 'Escape': {
          e.preventDefault();
          setOpen(false);
          break;
        }
        case 'Home': {
          e.preventDefault();
          setHighlightedIndex(0);
          break;
        }
        case 'End': {
          e.preventDefault();
          setHighlightedIndex(enabledOptions.length - 1);
          break;
        }
      }
    },
    [open, filteredOptions, highlightedIndex, select],
  );

  return {
    open,
    setOpen,
    searchQuery,
    setSearchQuery,
    filteredOptions,
    selectedValues,
    highlightedIndex,
    setHighlightedIndex,
    select,
    deselect,
    clear,
    getLabel,
    handleKeyDown,
    listRef,
    addNewText,
    setAddNewText,
    handleAddNew,
  };
}
