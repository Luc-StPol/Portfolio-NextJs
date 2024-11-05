import { ComponentPropsWithRef } from 'react';

export default function DarkModeIcon(props: ComponentPropsWithRef<'svg'>) {
  return (
    <svg width="30px" height="30px" viewBox="0 0 100 125">
      <title>Dark Mode</title>
      <path
        d="M65.44,75.94a48.15,48.15,0,0,1-22-73.44A48.15,48.15,0,1,0,93.53,77.71,47.87,47.87,0,0,1,65.44,75.94Z"
        fill={props.color}
      />
    </svg>
  );
}
