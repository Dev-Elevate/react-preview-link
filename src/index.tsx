import React from 'react';
import './index.styles.css';

interface IPreviewLink {
  /** If `true` renders an overlay over the preview link component | @default true */
  showHoverOverlay?: boolean;
  /** If `true` adds hover animation of poping out over the preview link | @default true */
  showHoverAnimation?: boolean;
  /** Link to your website */
  href: string;
  /** Height of the preview link component | @default 180 */
  height?: number;
  /** Width of the preview link component | @default 320 */
  width?: number;
  /** Props the you want to be passed to the underlying anchor tag | @default {} */
  linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

export function PreviewLink({
  showHoverOverlay = true,
  showHoverAnimation = true,
  href,
  height = 180,
  width = 320,
  linkProps = {},
  ...props
}: IPreviewLink & {}) {
  return (
    <a
      className={`rcss-previewlink-anchor-wrap ${!showHoverAnimation &&
        'rcss-previewlink-anchor-wrap-no-hover-effect'}`}
      href={href}
    >
      <div
        className="rcss-previewlink-wrap"
        {...props}
        // @ts-ignore
        style={{ ...props.style, height, width }}
      >
        <iframe
          className="rcss-previewlink-frame"
          height={height * 4}
          width={width * 4}
          src={href}
        />
        {showHoverOverlay && <div className="rcss-previewlink-overlay"></div>}
      </div>
    </a>
  );
}
