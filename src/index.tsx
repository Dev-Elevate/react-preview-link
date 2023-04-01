import React from 'react';
import './index.styles.css';
export function PreviewLink({
  href,
  height = 180,
  width = 320,
  ...props
}: any) {
  return (
    <a href={href}>
      <div id="wrap" {...props} style={{ ...props.style, height, width }}>
        <iframe id="frame" height={height * 4} width={width * 4} src={href} />
      </div>
    </a>
  );
}
