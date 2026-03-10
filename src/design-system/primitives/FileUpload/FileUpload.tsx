/**
 * Olamee Design System — File Upload
 *
 * Mirrors Figma "File Upload" component (6453:24202).
 *
 * States: Default (empty), with files (images or documents)
 *
 * Specs from Figma:
 *   Label: 14px medium #30343F with optional "(Optional)" in #8D8F97
 *   Default drop zone: dashed border #B2B4BA, bg=#FBFBFC, rounded-10, h=167, p=24
 *   Upload icon in circle: bg=#EFF0F3, rounded-full, icon=20px
 *   Text: "Drag and drop your file, or browse" (browse in #7A5FFF medium)
 *   File type info: "File types: {types} (Max {size})" in #8D8F97 12px
 *   File row: bg=#F5F6F8, rounded-10, px=16, py=12
 *   File name: 14px regular #30343F, size: 12px #6A6D76
 *   X button: 20px icon wrapper
 *
 * Figma node: 6453:24202
 */

import {
  type FC,
  type DragEvent,
  type ChangeEvent,
  useCallback,
  useRef,
  useState,
} from 'react';
import { cn } from '../../lib/cn';

/* ────────────────────────────────────────────────────────────── */
/*  FontAwesome icon components                                  */
/* ────────────────────────────────────────────────────────────── */
const UploadIcon = () => (
  <i className="fa-regular fa-cloud-arrow-up text-[20px] text-[#6A6D76]" />
);

const FileIcon = () => (
  <i className="fa-regular fa-file text-[20px] text-[#6A6D76]" />
);

const CloseIcon = () => (
  <i className="fa-regular fa-xmark text-[16px] text-[#6A6D76]" />
);

/* ────────────────────────────────────────────────────────────── */
/*  Helpers                                                      */
/* ────────────────────────────────────────────────────────────── */
function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(i > 0 ? 1 : 0)} ${units[i]}`;
}

function isImageFile(file: File): boolean {
  return file.type.startsWith('image/');
}

/* ────────────────────────────────────────────────────────────── */
/*  Types                                                        */
/* ────────────────────────────────────────────────────────────── */
export interface UploadedFile {
  /** File object */
  file: File;
  /** Preview URL (for images) */
  previewUrl?: string;
  /** Unique id */
  id: string;
}

export interface FileUploadProps {
  /** Label text */
  label?: string;
  /** Whether the field is optional */
  optional?: boolean;
  /** Accepted file types (e.g. ".pdf,.doc,.docx,.txt,.rtf") */
  accept?: string;
  /** Human-readable file type description */
  fileTypeDescription?: string;
  /** Maximum file size in bytes */
  maxSize?: number;
  /** Human-readable max size (e.g. "20 MB") */
  maxSizeLabel?: string;
  /** Allow multiple files */
  multiple?: boolean;
  /** Currently uploaded files */
  files?: UploadedFile[];
  /** Callback when files are added */
  onFilesAdd?: (files: File[]) => void;
  /** Callback when a file is removed */
  onFileRemove?: (id: string) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Outer className */
  className?: string;
}

/* ────────────────────────────────────────────────────────────── */
/*  Component                                                    */
/* ────────────────────────────────────────────────────────────── */
export const FileUpload: FC<FileUploadProps> = ({
  label,
  optional = false,
  accept,
  fileTypeDescription = 'pdf, doc, docx, txt, rtf',
  maxSize: _maxSize,
  maxSizeLabel = '20 MB',
  multiple = true,
  files = [],
  onFilesAdd,
  onFileRemove,
  disabled = false,
  className,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);
      if (disabled) return;

      const droppedFiles = Array.from(e.dataTransfer.files);
      onFilesAdd?.(droppedFiles);
    },
    [disabled, onFilesAdd],
  );

  const handleDragOver = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled) setIsDragOver(true);
    },
    [disabled],
  );

  const handleDragLeave = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);
    },
    [],
  );

  const handleFileSelect = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        onFilesAdd?.(Array.from(e.target.files));
        e.target.value = ''; // Reset for re-selection
      }
    },
    [onFilesAdd],
  );

  const handleBrowseClick = useCallback(() => {
    if (!disabled) {
      inputRef.current?.click();
    }
  }, [disabled]);

  const hasFiles = files.length > 0;

  return (
    <div className={cn('flex flex-col gap-[8px] items-start w-full', className)}>
      {/* ── Label ── */}
      {label && (
        <div className="flex items-center gap-[4px]">
          <span className="font-body font-medium text-[14px] leading-[18px] text-[#30343F]">
            {label}
          </span>
          {optional && (
            <span className="font-body font-normal text-[14px] leading-[18px] text-[#8D8F97]">
              (Optional)
            </span>
          )}
        </div>
      )}

      {/* ── Drop zone ── */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={cn(
          'flex flex-col items-center justify-center gap-[12px] w-full',
          'rounded-[10px] p-[24px]',
          'transition-colors duration-150',
          hasFiles ? 'min-h-[100px]' : 'min-h-[167px]',
          isDragOver
            ? 'bg-[#EFF0F3] border-2 border-dashed border-[#7A5FFF]'
            : 'bg-[#FBFBFC] border border-dashed border-[#B2B4BA]',
          disabled && 'opacity-50 cursor-not-allowed',
        )}
      >
        {/* Upload icon */}
        <div className="flex items-center justify-center size-[40px] rounded-full bg-[#EFF0F3]">
          <UploadIcon />
        </div>

        {/* Text */}
        <div className="flex items-center gap-[4px]">
          <span className="font-body font-normal text-[14px] leading-[18px] text-[#30343F]">
            Drag and drop your file, or{' '}
          </span>
          <button
            type="button"
            onClick={handleBrowseClick}
            disabled={disabled}
            className="font-body font-medium text-[14px] leading-[18px] text-[#7A5FFF] hover:underline cursor-pointer disabled:cursor-not-allowed"
          >
            browse
          </button>
        </div>

        {/* File types */}
        <span className="font-body font-normal text-[12px] leading-[14px] text-[#8D8F97]">
          File types: {fileTypeDescription} (Max {maxSizeLabel})
        </span>

        {/* Hidden file input */}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileSelect}
          className="hidden"
          disabled={disabled}
        />
      </div>

      {/* ── File list ── */}
      {hasFiles && (
        <div className="flex flex-col gap-[8px] w-full">
          {files.map(({ file, previewUrl, id }) => {
            const isImage = isImageFile(file);
            return (
              <div
                key={id}
                className={cn(
                  'flex items-center gap-[12px] w-full',
                  'bg-[#F5F6F8] rounded-[10px]',
                  'px-[16px] py-[12px]',
                )}
              >
                {/* Preview / Icon */}
                {isImage && previewUrl ? (
                  <img
                    src={previewUrl}
                    alt={file.name}
                    className="w-[40px] h-[24px] object-cover rounded-[4px] shrink-0"
                  />
                ) : (
                  <span className="inline-flex items-center justify-center shrink-0 size-[20px]">
                    <FileIcon />
                  </span>
                )}

                {/* File info */}
                <div className="flex flex-col gap-[2px] flex-1 min-w-0">
                  <span className="font-body font-normal text-[14px] leading-[18px] text-[#30343F] truncate">
                    {file.name}
                  </span>
                  <span className="font-body font-normal text-[12px] leading-[14px] text-[#6A6D76]">
                    {formatFileSize(file.size)}
                  </span>
                </div>

                {/* Remove button */}
                <button
                  type="button"
                  onClick={() => onFileRemove?.(id)}
                  disabled={disabled}
                  className={cn(
                    'inline-flex items-center justify-center shrink-0',
                    'size-[20px] rounded-full',
                    'hover:bg-[#D8DAE0] transition-colors',
                    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
                  )}
                  aria-label={`Remove ${file.name}`}
                >
                  <CloseIcon />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

FileUpload.displayName = 'FileUpload';
